import React from 'react';
import './contact.css';
import { HiLocationMarker } from 'react-icons/hi';
import { BsTelephoneFill } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { FaHackerrank } from 'react-icons/fa';
import { ImGithub } from 'react-icons/im';
import { BsLinkedin } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { Helmet } from 'react-helmet-async';
import info from '../../data';
const ContactMe = () => {
  const { selfInfo } = info;
  const contactInfo = selfInfo;
  return (
    <>
      <Helmet>
        <title>CONTACT ME</title>
      </Helmet>
      <div className="contact-container">
        <div className="title">
          <h1 className="title1">CONTACT</h1>
          <h1 className="title2">ME</h1>
        </div>
        <div className="contact-frame">
          <div className="frame"></div>
          <div className="contact-info">
            <div className="col1">
              <div className="row">
                <div className="icon">
                  <BsTelephoneFill />
                </div>
                <div className="info">
                  <h2 className="key">Contact Me</h2>
                  <h2 className="value">{contactInfo.mobileNo}</h2>
                </div>
              </div>
              <div className="row">
                <div className="icon">
                  <HiLocationMarker />
                </div>
                <div className="info">
                  <h2 className="key">Current Location</h2>
                  <h2 className="value">{contactInfo.location}</h2>
                </div>
              </div>

              <div className="row">
                <div className="icon">
                  <GrMail />
                </div>
                <div className="info">
                  <h2 className="key">Email</h2>
                  <h2 className="value">{contactInfo.email}</h2>
                </div>
              </div>
            </div>
            <div className="col2">
              <BsTwitter className="icon" />
              <BsLinkedin className="icon" />
              <ImGithub className="icon" />
              <FaHackerrank className="icon" />
            </div>
          </div>
        </div>
        <h1 className="form-title">
          Send <span>Message</span> To <span>Me</span>
        </h1>
        <div className="form-container">
          <form>
            <label>
              <h2>Enter Your Name</h2>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
            ></input>
            <label>
              <h2>Enter Your Mobile Number</h2>
            </label>
            <input
              type="Number"
              name="name"
              placeholder="Enter Your Mobile Number"
              required
            ></input>
            <label>
              <h2>Enter Your Email</h2>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Email Add."
              required
            ></input>
            <label>
              <h2>Enter the Subject</h2>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Subject"
            ></input>
            <label>
              <h2>Enter the Message</h2>
            </label>
            <textarea
              name="comment"
              placeholder="Enter Your Message"
              required
            ></textarea>
            <button type="submit">
              <h2>Send Message</h2>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
