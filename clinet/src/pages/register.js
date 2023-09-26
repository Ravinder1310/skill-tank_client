import React, { useState } from 'react'
import Layout from '../components/layouts/layout'
import toast from 'react-hot-toast';
import axios from "axios";
import {useNavigate} from "react-router-dom"
import "../styles/auth.css"

const Register = () => {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [answer, setAnswer] = useState("")
  const navigate = useNavigate()

  const handleSubmit =  async(e) => {
    e.preventDefault();
    console.log(name,email,password,answer);
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,{name,email,password,answer})
      if(res && res.data.success){
        toast.success( res.data && res.data.message);
        navigate("/login")
      }else{

        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong')
    }
    toast.success('Registeration successfull')
  }

  return (
    <Layout title={"Register - Ecommerce app"}>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
        <h1 className="title">Register</h1>
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
    </Layout>
  );
}

export default Register