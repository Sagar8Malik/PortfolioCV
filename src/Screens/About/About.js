import React from "react";
import "./about.css";
import CV from "../../CV/SAGAR MALIK_RESUME.pdf";
import { MdDownloadForOffline } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { RiContactsBookFill } from "react-icons/ri";
import { Helmet } from "react-helmet-async";
import info from "../../data";
const About = () => {
  const { edu } = info;
  const { skills } = info;
  const { selfInfo } = info;
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>ABOUT</title>
      </Helmet>
      <div className="about-container">
        <div className="title">
          <h1 className="title1">ABOUT</h1>
          <h1 className="title2">ME</h1>
        </div>
        <div className="about-frame">
          <div className="frame"></div>
          <div className="about-info">
            <div className="col1">
              <p className="key">Name</p>
              <p className="value">{selfInfo.name}</p>
              <p className="key">DOB</p>
              <p className="value">{selfInfo.birthDate}</p>
              <p className="key">Email</p>
              <p className="value">{selfInfo.email}</p>
              <p className="key">Address</p>
              <p className="value">{selfInfo.location}</p>
            </div>
            <div className="col2">
              <p className="key">Skill</p>
              <p className="value">{selfInfo.DescribeYourself}</p>
              <p className="key">Experience</p>
              <p className="value">{selfInfo.experience}</p>
              <p className="key">Language</p>
              <p className="value">{selfInfo.language}</p>
            </div>
          </div>
        </div>
        <a className="downloadCV" href={CV} download>
          <h2>Download CV</h2>
          <MdDownloadForOffline className="downloadCV-2" />
        </a>
        <div className="title">
          <h1 className="title2">MY</h1>
          <h1 className="title1">SKILL Set</h1>
        </div>
        <div className="about-skills">
          {skills.map((skill, i) => (
            <div className="grid" key={i}>
              {skill.img}
              <h2 className="name">{skill.name}</h2>
            </div>
          ))}
        </div>

        <div className="title">
          <h1 className="title2">MY</h1>
          <h1 className="title1">EDUCATION</h1>
        </div>
        <div className="about-education">
          {edu.map((ele, i) => (
            <div className="edu-card" key={i}>
              <div className="icon">
                <FaGraduationCap className="edu-icon" />
              </div>
              <div className="content">
                <div className="duration">
                  <p>{ele.time}</p>
                </div>
                <h2>{ele.class}</h2>
                <p>{ele.name}</p>
                <p>{ele.marks}</p>
              </div>
            </div>
          ))}
        </div>
        <a className="downloadCV" onClick={() => navigate("/contactMe")}>
          <h2>Contact Me</h2>
          <RiContactsBookFill className="downloadCV-2" />
        </a>
      </div>
    </>
  );
};

export default About;
