import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { IoHome } from 'react-icons/io';
import { ImHome } from 'react-icons/im';
import { BsFillPersonFill } from 'react-icons/bs';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { RiContactsBookFill } from 'react-icons/ri';
import './navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="nav-container">
      <div className="navbar">
        <a className="btn" onClick={() => navigate('/')}>
          <ImHome className="nav-icon" />
          <h3>Home</h3>
        </a>
        <a className="btn" onClick={() => navigate('/about')}>
          <BsFillPersonFill className="nav-icon" />
          <h3>About</h3>
        </a>
        <a className="btn" onClick={() => navigate('/portfolio')}>
          <BsFillBriefcaseFill className="nav-icon" />
          <h3>Projects</h3>
        </a>
        <a className="btn" onClick={() => navigate('/contactMe')}>
          <RiContactsBookFill className="nav-icon" />
          <h3>Contact</h3>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
