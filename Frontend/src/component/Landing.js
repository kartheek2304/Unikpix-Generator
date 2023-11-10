import React from 'react';
import './Landing.css'; 
import Landing2 from './Landing2.js'
import logo from '../images/logoo1.png';
import { Link } from 'react-router-dom';
// import Navbar from './Navbar'
const LandingPage = () => {
  return (
    <>
    {/* <Navbar/> */}
    <div>
    <div className="landing-page">
      <div className="overlay">
        <img className='logoimg' src={logo} alt="" />
        <h1 className="title">🆄🅽🅸🅺🅿🅸🆇</h1>
        <p className="subtitle">Discover the Power of AI Image Generation</p>
        {/* <button className="cta-button">Get Started</button> */}
        <Link to='/Login'><button class="custom-btn btn-3"><span>Get Started</span></button></Link>
      </div>
    </div>
    <Landing2/>
    



    
    </div>
    </>
  );
};

export default LandingPage;
