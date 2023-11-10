import React from 'react';
import './Services.css';
import serv1 from '../images/serv1.jpg'
import serv2 from '../images/serv2.webp'
// import Navbar from './Navbar'
import serv3 from '../images/serv3.avif'
import serv4 from '../images/serv4.webp'
import serv from '../images/ser.jpg'
const Services = () => {
  return (
    <>
    {/* <Navbar/> */}
    <div className="services-container">
      {/* <h1 className='unikpix'>UNIKPIX Services</h1> */}
      <img className='serviceimage' src={serv} alt="" />
      <div data-aos="zoom-in" data-aos-offset="400" className="service">
        <img id='serviceimg'
          className="service-image"
          src={serv1}
          alt=""
        />
        <div data-aos="zoom-in" data-aos-offset="400" className="service-description">
          <h2>Service 1: Image Style Transfer</h2>
          <p>
            Our AI-powered image generator can transfer the style of one image
            to another. Whether you want your photo to look like a famous
            painting or mimic a specific artistic style, our service can help
            you achieve it. Simply upload your images, select the desired
            style, and let our AI do the rest.
          </p>
        </div>
      </div>

      <div data-aos="zoom-in" data-aos-offset="400" className="service1">
        <img
          className="service-image"
          src={serv2}
          alt=""
        />
        <div data-aos="zoom-in" data-aos-offset="400" className="service-description">
          <h2>Service 2: Image Super-Resolution</h2>
          <p>
            Enhance the resolution and quality of your images using our AI image
            generator. Whether you have low-resolution photos or want to enhance
            details in your images, our super-resolution service can help. Upload
            your images, choose the desired level of enhancement, and watch as our
            AI generates high-resolution versions of your pictures.
          </p>
        </div>
      </div>

      <div data-aos="zoom-in" data-aos-offset="400" className="service">
        <img
          className="service-image"
          src={serv3}
          alt=""
        />
        <div data-aos="zoom-in" data-aos-offset="400" className="service-description">
          <h2>Service 3: Image Captioning</h2>
          <p>
            Our AI image generator can automatically generate descriptive captions
            for your images. Whether you need captions for social media posts,
            articles, or presentations, our service can generate accurate and
            contextually relevant captions for your images. Simply upload your
            images, and our AI will provide you with captions that best describe
            their contents.
          </p>
        </div>
      </div>

      <div data-aos="zoom-in" data-aos-offset="400" className="service1">
        <img
          className="service-image"
          src={serv4}
          alt=""
        />
        <div data-aos="zoom-in" data-aos-offset="200" className="service-description">
          <h2>Service 4: Image Colorization</h2>
          <p>
            Bring old black-and-white photos to life with our image colorization
            service. Our AI image generator can intelligently analyze and colorize
            grayscale images, preserving the details and tones of the original
            pictures. Upload your black-and-white images, and our AI will generate
            vibrant and realistic color versions.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Services;
