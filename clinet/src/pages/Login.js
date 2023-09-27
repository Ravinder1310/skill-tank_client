import React, { useState } from 'react';
import Layout from '../components/layouts/layout';
import toast from 'react-hot-toast';
import axios from "axios";
import "../styles/changes.css";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/auth.css";
import { useAuth } from '../context/auth';
import { useToggle } from '../context/toggle';

const Authentication = () => {
  const [email1, setEmail1] = useState("");
  const [password1, setPassword1] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  const location = useLocation();
  const { isLogin, toggleAuthMode } = useToggle();

  const handleSubmit1 = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, { email: email1, password: password1 });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        toast.success('Login successful');
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`, { name, email, password, answer });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        toast.success('Registration successful');
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };


  return (
    <Layout>
      <div className="form-container">
        
        {isLogin ? (
          
          <div className='frm'>
            <h1 className="title">{isLogin ? "Login Form" : "Signup Form"}</h1>
           <div className='changes'>
          <button onClick={() => toggleAuthMode(false)} className={isLogin ? "active-button" : "inactive-button"}>Login</button>
          <button onClick={() => toggleAuthMode(true)} className={!isLogin ? "active-button" : "inactive-button"}>Signup</button>
        </div>
          <form onSubmit={handleSubmit1} style={{ textAlign: "right" }}>
           
            <div className="mb-3">
              <input
                type="email"
                value={email1}
                onChange={(e) => setEmail1(e.target.value)}
                placeholder="Email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                value={password1}
                onChange={(e) => setPassword1(e.target.value)}
                placeholder="Password"
                className="form-control"
                id="exampleInputPassword1"
                required
              />
            </div>
            <div className="mb-3">
              <a
                className=""
                style={{ width: "100px", fontSize: "10px" }}
                href='/forgot-password'
              >
                Forgot Password
              </a>
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
          </div>
        ) : (
          <div className='frm'>
            <h1 className="title">{isLogin ? "Login Form" : "Signup Form"}</h1>
           <div className='changes'>
          <button onClick={() => toggleAuthMode(false)} className={isLogin ? "active-button" : "inactive-button"}>Login</button>
          <button onClick={() => toggleAuthMode(true)} className={!isLogin ? "active-button" : "inactive-button"}>Signup</button>
        </div>
          <form onSubmit={handleSubmit2} style={{ textAlign: "right" }}>
            
            <div className="mb-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="form-control"
                id="exampleInputPassword1"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Who is your best friend"
                className="form-control"
                id="exampleInputPassword1"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Authentication;
