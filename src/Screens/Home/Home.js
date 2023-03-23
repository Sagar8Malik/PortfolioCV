import React from "react";
import { FaInfinity } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import info from "../../data";

const Home = () => {
  const navigate = useNavigate("/about");
  const { selfInfo } = info;
  return (
    <>
      <Helmet>
        <title>Tushar Pethkar's Portfolio</title>
      </Helmet>
      <div className="home-container">
        <div className="frame-container">
          <div className="frame"></div>
        </div>
        <div className="info-container">
          {/* <div className="first">
            <FaInfinity className="home-icon" />
            <h1>Hub</h1>
          </div> */}
          <h1 className="center">Hi, I Am {selfInfo.name}</h1>
          <h2>{selfInfo.DescribeYourself}</h2>
          <p>{selfInfo.Sent1}</p>
          <p>{selfInfo.sent2} </p>
          <a className="home-button" onClick={() => navigate("/about")}>
            <h2>About Me</h2>
            <IoMdContact className="home-icon2" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
