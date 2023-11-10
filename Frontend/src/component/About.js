import React from 'react';
import './About.css';
import Aboutpic from '../images/abou1.jpg';
import about1 from '../images/logo1.png'
import about2 from '../images/about2 (2).png'
import about3 from '../images/about3.png'
import about4 from '../images/about4.jpg'
// import Navbar from './Navbar'
const About = () => {
  return (
    <>
    {/* <Navbar/> */}
    <div  className='about'>
      <img className='aboutimage' src={Aboutpic}alt="" />
      <div data-aos="zoom-in" data-aos-offset="400" className='firstside'>
        <div className='titletext'>
          <h1>UnikPix</h1>
          <h3>We provide an image that is impossible to draw.</h3>
          <h5>We UnikPix - convert impossible to possible.</h5>
        </div>
        <div >
        <img className='titleimg' src={about1} alt="" />
        </div>
      </div>
      <div data-aos="zoom-in" data-aos-offset="400" className='secondside'>
        <div >
        <img className='titleimg2' src={about2} alt="" />
        </div>
        <div className='titletext2'>
          <h1> WHY UnikPix ?</h1>
          <h3>We introduce the power of AI in image creation.</h3>
          <h5>Artificial intelligence art is any artwork, particularly images </h5>
          <h5>and musical compositions, created through the use of artificial intelligence (AI) programs,</h5>
          <h5> such as text-to-image models and musical generators</h5>
        </div>
      </div>
      <div data-aos="zoom-in" data-aos-offset="400" className='thirdside'>
        <div className='titletext3'>
          <h1>Our Aim</h1>
          <h3>UnikPix not only decodes images </h3>
          <h3>but also have a predictive ability.</h3>
          <h5>You can even create images of things that would never be found in reality.</h5>
          <h5> Higher productivity: You can create beautiful images and graphics </h5>
          <h5>without having to learn the complex art of editing.</h5>
        </div>
        <div >
        <img className='titleimg3' src={about3} alt="" />
        </div>
      </div>
      <div data-aos="zoom-in" data-aos-offset="400" className='fourside'>
        <div >
        <img className='titleimg4' src={about4} alt="" />
        </div>
        <div className='titletext4'>
          <h1>Types of images</h1>
          <h3>We generate the images in various types.</h3>
          <h5>We generate images in 3D, Oil Painting, Cartoon, Anime, etc...</h5>
        </div>
      </div>
    </div>
    </>
  )
}

export default About;
