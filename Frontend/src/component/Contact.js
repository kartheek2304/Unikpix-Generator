import React from "react";
import { useState } from "react";
import "./Contact.css";
import contactbomma from "../images/contact1.png";
// import Navbar from './Navbar'
// import map from '../images/map3.png'
// import contact from '../images/pngfind.com-ali-a-png-1955963.png'
import contact from '../images/con1.jpg'
import get from "../images/getintouch.png";
// import { Link } from 'react-router-dom';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FeedbackIcon from "@mui/icons-material/Feedback";
import PhoneIcon from "@mui/icons-material/Phone";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log("DEV1 ERROR: -", error));
  };
  return (
    <>
    {/* <Navbar/> */}
    <div className="contact-us-page">
      <img
        className="img8"
        src={contact}
        // src={contact}
        alt=""
      />
      <div className="contact-us-page-content">
        <div data-aos="zoom-in" data-aos-offset="400" className="contact-us-page-image">
          <img className="contactbomma" src={contactbomma} alt="Contact Us" />
        </div>
        <div data-aos="zoom-in" data-aos-offset="400" className="contact-us-page-form">
          <h2 style={{ color: "#ff3366" }}>
            Drop us a Query <FeedbackIcon fontSize="10" />
          </h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              name="message"
              id="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <div className="contact-us-page-content3">
        <div data-aos="zoom-in" data-aos-offset="400" className="contact-us-page-image">
          <img className="contact-us-page-image1" src={get} alt="Contact Us" />
        </div>
        <div data-aos="zoom-in" data-aos-offset="400" id="contact-us-page-form1" className="contact-us-page-form">
          <h2 style={{ color: "#ff3366" }}>
            Contact Details{" "}
            <ContactPageIcon className="locationicon" fontSize="10" />
          </h2>
          <h5 style={{ color: "skyblue" }}>
            <span style={{ color: "#ff3366" }}>
              {" "}
              <EmailIcon className="phoneicon1" fontSize="10" /> Mail id :{" "}
            </span>{" "}
            unikpix@gmail.com
          </h5>
          <h5 style={{ color: "skyblue" }}>
            <span style={{ color: "#ff3366" }}>
              {" "}
              <PhoneIcon className="phoneicon1" fontSize="10" /> Contact No :{" "}
            </span>{" "}
            8897479004
          </h5>
          <h5 style={{ color: "skyblue" }}>
            <span style={{ color: "#ff3366" }}>
              {" "}
              <PhoneAndroidIcon className="phoneicon1" fontSize="10" /> Help
              desk No :{" "}
            </span>{" "}
            08818-228858
          </h5>
          <h5 style={{ color: "skyblue" }}>
            <span style={{ color: "#ff3366" }}>
              {" "}
              <LocationOnIcon className="phoneicon1" fontSize="10" /> Location :{" "}
            </span>
            KN Road, Nandi bomma center opp, Tadepalligudem, West Godavari
            District, Andhra Pradesh, 534102, India.
          </h5>
        </div>
      </div>
      {/* <div className="contact-us-page-content1"> */}
      {/* <div className="contact-us-page-form">
          <h2 style={{color:'#ff3366'}}>Location <LocationOnIcon className='locationicon' fontSize="10"/></h2>
          <h5 style={{color:'skyblue'}}>KN Road, Nandi bomma center opp, Tadepalligudem - 1, West Godavari District, Andhra Pradesh, 534102, India.</h5>
        </div> */}
      {/* <div className="contact-us-page-image">
          <Link target='_blank' to='https://maps.windows.com/?form=WNAMSH&entity=local_ypid%3AYN4070x249262420&collection=point.16.81241_81.52816_Aparna%20Super%20Bazar'><img  src={map} alt="Contact Us" /></Link>
        </div> */}
      <iframe data-aos="zoom-in" 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.2802970498183!2d81.52555897528586!3d16.81244518397986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37b4b9bf7af90d%3A0x4de2f1e271cc53f7!2sAparna%20Super%20Bazar!5e0!3m2!1sen!2sin!4v1687930953492!5m2!1sen!2sin"
        width="100%"
        title="maps"
        height="450"
        style={{
          border: "0",
          marginTop: "10px",
          borderRadius: "20px",
          padding: "10px",
        }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
      {/* </div> */}
    </div>
    </>
  );
};

export default Contact;
