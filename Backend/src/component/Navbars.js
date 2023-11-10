import React, { useState } from 'react';
import './Navbar.css';
import logo from '../images/logoo1.png'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
// import LockOpenIcon from '@mui/icons-material/LockOpen';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import GroupsIcon from '@mui/icons-material/Groups';
import CallIcon from '@mui/icons-material/Call';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import LoginIcon from '@mui/icons-material/Login';
import SecurityIcon from '@mui/icons-material/Security';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
const Navbars = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };
  const handleLogout = () =>{
    localStorage.removeItem("token");
    // window.location.reload('/About');
    window.location = "/";
  }

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link><img src={logo} alt="Logo" /></Link>
      </div>

      <div className={`navbar__links ${isHamburgerOpen ? 'active' : ''}`}>
      <NavLink
        to="/Mainpage"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >
        <HomeIcon className='nav-icons'/> Unikpix
      </NavLink>
      <NavLink
        to="/About"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >
        <InfoIcon className='nav-icons'/> About
      </NavLink>
      <NavLink
        to="/Contact"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >
       <CallIcon className='nav-icons'/> Contact
      </NavLink>
      <NavLink
        to="/Services"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >
       <CleaningServicesIcon className='nav-icons'/> Services
      </NavLink>
      <NavLink
        to="/Team"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >
       <GroupsIcon className='nav-icons'/> Our Team
      </NavLink>
      <NavLink
        to="/Tc"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >
       <PrivacyTipIcon className='nav-icons'/> T & C
      </NavLink>
      <NavLink
        to="/Ppolicy"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >
       <SecurityIcon className='nav-icons'/> Privacy Policy
      </NavLink>
      </div>

      <div className={`navbar__buttons ${isHamburgerOpen ? 'active' : ''}`}>
      <Link ><button onClick={handleLogout} class="custom-btn btn-3"><span>Logout <LoginIcon/></span></button></Link>
        {/* <Link to="/Signin"><button class="custom-btn btn-3"><span>Sign in <LockOpenIcon/></span></button></Link> */}
      </div>

      <div className="navbar__hamburger" onClick={handleHamburgerClick}>
        <div className={`hamburger ${isHamburgerOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {isHamburgerOpen && (
          <div className="navbar__hamburger-links">
            <Link to=""><HomeIcon className='nav-icons'/> Home</Link>
            <Link to="/Mainpage"><HomeIcon className='nav-icons'/> UnikPix</Link>
            <Link to="/About"><InfoIcon className='nav-icons'/> About</Link>
            <Link to="/Contact"><CallIcon className='nav-icons'/> Contact</Link>
            <Link to="/Services"><CleaningServicesIcon className='nav-icons'/> Services</Link>
            <Link to="/Team"><CallIcon className='nav-icons'/> Our Team</Link>
            <Link to="/Tc"><CallIcon className='nav-icons'/> T & C</Link>
            <Link to="/Ppolicy"><CallIcon className='nav-icons'/> Privacy Policy</Link>
            <Link to="/"><button onClick={handleLogout} className="custom-btn btn-3"><span>Logout <LoginIcon/></span></button></Link>
        {/* <Link to="/Signin"><button className="custom-btn btn-3"><span>Sign in <LockOpenIcon/></span></button></Link> */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbars;
