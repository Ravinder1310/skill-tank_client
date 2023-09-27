import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { toast } from "react-hot-toast";
import "./header.css";

const Header = () => {
  const [auth, setAuth] = useAuth();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout successfully");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand1" aria-expanded="false">
            <img
              width={"70px"}
              height={"50px"}
              style={{ borderRadius: "60%" }}
              src="/images/logo.png"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <div className="navbar-nav mb-lg-0">
              <Link to={"/"} className="navbar-brand">
                <img
                  width={"70px"}
                  height={"50px"}
                  style={{ borderRadius: "60%" }}
                  src="/images/logo.png"
                />
              </Link>
              <h3>MR</h3>
            </div>
            <hr className="headHr"/>
            <div className="edu">
              <p>Part of Times </p>
              <p>Higher Education </p>
            </div>
            <div className="cat">
              <NavLink to={"/"} className="nav-link">
                Home
              </NavLink>
              <NavLink to={"/officer"} className="nav-link">
                Officers
              </NavLink>
              <NavLink to={"/examination"} className="nav-link">
                Examination
              </NavLink>
              <NavLink to={"/section"} className="nav-link">
                Sections
              </NavLink>
              <NavLink to={"/students"} className="nav-link">
                Students
              </NavLink>
              <NavLink to={"/academics"} className="nav-link">
                Academics
              </NavLink>
            </div>
            <div className="logos">
              <div>
                <img
                  src="/images/diversion.png"
                  height={"16px"}
                  width={"20px"}
                />
              </div>
              <div>
                <img
                  src="/images/aeroplane.png"
                  height={"29px"}
                  width={"25px"}
                />
              </div>
            </div>
            <div className="auth">
              {!auth.user ? (
                <>
                  <NavLink to={"/authentication"} className="nav-link">
                      Login
                  </NavLink>
                </>
              ) : auth.user.role === 1 ? ( // Check if role is 1
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {auth.user.name}
                  </NavLink>

                  <ul className="dropdown-menu">
                    <li>
                      <NavLink
                        to={`/dashboard/${
                          auth.user.role === 1 ? "admin" : "user"
                        }`}
                        className="nav-link"
                      >
                        Dashboard
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/login"}
                        onClick={handleLogout}
                        className="nav-link"
                      >
                        Logout
                      </NavLink>
                    </li>
                  </ul>
                </li>
              ) : (
                <>
                  <NavLink
                    to={"/login"}
                    onClick={handleLogout}
                    className="nav-link"
                  >
                    Logout
                  </NavLink>
                </>
              )}
            </div>
            <div className="menu">
              <img src="/images/hamb.png" width={"30px"} height={"30px"} />
            </div>

            {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
