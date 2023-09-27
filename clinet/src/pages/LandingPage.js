import React from "react";
import Layout from "../components/layouts/layout";
import "../styles/landing.css";
import "../styles/form.css";

const LandingPage = () => {
  return (
    <Layout>
      <div className="container">
        <div className="study">
          <h2>
            Getting you{" "}
            <span
              style={{
                borderRadius: "50%",
                backgroundColor: "red",
                color: "white",
                fontSize:"20px",
                padding: "10px",
              }}
            >
              4.9
            </span>
            👩‍🔧📜where you want to study. ↗️
          </h2>
          <p>
            Everything you need to know about your study abrod journey: from
            first search to your first day on campus.
          </p>
          <div className="crs">
            <div className="course">
              <h4>📑Course</h4>
              <h4>🧰Services</h4>
            </div>
            <div>
              <input className="inpt1" placeholder="What do you want to study?"/>
              <div className="input-container">
                <input className="inpt2" type="text" placeholder="Your ideal country / region or institution" />
                <button type="button" className="input-button">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="education">
          <img src="/images/edu.png" width={"100%"} alt="error" />
          <div className="top">
            <div>
              <p>World top 10 universities</p>
              <img src="/images/rank.png" width={"94%"} alt="error" />
              <div>
                <p>🔴Graphic templates</p>
              </div>
              <div>
                <p>🔵UI Design</p>
              </div>
            </div>
            <div>
              <p>Earning report</p>
              <div className="report">
                <img src="/images/st.png" alt="" />
                <div>
                  <p>Total Students</p>
                  <h5>78K</h5>
                </div>
              </div>
              <hr />
              <div className="report">
                <img src="/images/topper.png" alt="" />
                <div>
                  <p>BD Topper Students</p>
                  <h5>8K</h5>
                </div>
              </div>
              <hr />
              <div className="report">
                <img src="" alt="" />
                <div>
                  <p>Contributor bobus</p>
                  <h5>706</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LandingPage;
