import React from 'react';
import {  FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import './Footer.css'; 
import footerimg from '../images/logoo1.png'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
      <img style={{width:'200px',height:'200px'}} src={footerimg} alt="" />
      <div className="quick-access">
        <h3>Quick Access</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Services">Services</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </div>
      <div className="quick-access">
        <h3>UnikPix</h3>
        <ul>
          <li><Link to="/">3D</Link></li>
          <li><Link to="/">Oil Painting</Link></li>
          <li><Link to="/">Cartoon</Link></li>
          <li><Link to="/">Anime</Link></li>
        </ul>
      </div>
      <div className="contact">
        <h3>Contact</h3>
        <ul>
         <li><span className="footer-icon"></span> Phone: 9630215487</li>
          <li><span className="footer-icon"></span> Email: unikpixhelp@gmail.com</li>
          <li><span className="footer-icon"></span> Address: KN Road , Tadepalligudem - 1</li>
        </ul>
      </div>
      <div style={{display:'flex',flexDirection:'column'}}>
      <div className="subscribe">
        <h3>Subscribe</h3>
        <form >
          <div>
          <input type="email" placeholder="Your Email" />
          <button className='submitbtn' type="submit">Subscribe</button>
          </div>
        </form>
      </div>
      <div className="aifoto">
        <h3 style={{marginTop:'10px'}}>Follow us</h3>
        <div className="aifoto-icons">
          <FaInstagram />
          <FaTwitter />
          <FaFacebook />
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
