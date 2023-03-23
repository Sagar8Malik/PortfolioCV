import React from 'react';
import './portfoilio.css';
import { ImEarth } from 'react-icons/im';
import { BsGithub } from 'react-icons/bs';
import { Helmet } from 'react-helmet-async';
import info from '../../data';
const Portfolio = () => {
  const { projects } = info;
  return (
    <>
      <Helmet>
        <title>PORTFOLIO</title>
      </Helmet>
      <div className="project-container">
        <div className="title">
          <h1 className="title1">MY</h1>
          <h1 className="title2">Projects</h1>
        </div>
        <div className="card-container">
          {projects.map((e) => (
            <div className="card">
              <div className="lines"></div>
              <div
                className="imgBox"
                style={{
                  backgroundImage: `url(${e.image})`,
                }}
              >
                <div className="transparency"></div>
              </div>
              <div className="content">
                <h2 className="title">{e.title}</h2>
                <a className="button" href={e.link} target="_blank">
                  <h2>Live Demo</h2>
                  <ImEarth className="button-icon" />
                </a>
                {e.link_github && (
                  <a className="button2" href={e.link_github} target="_blank">
                    <h2>GitHub</h2>
                    <BsGithub className="button-icon" />
                  </a>
                )}

                <h2 className="time">{e.time}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
