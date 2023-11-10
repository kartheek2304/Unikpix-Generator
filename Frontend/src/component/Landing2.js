import React from 'react'
import './Landing2.css'
import step1 from '../images/step1.png'
import step2 from '../images/step2.jpg'
import step3 from '../images/step3.jpg'
import step4 from '../images/step4.webp'
import card1 from '../images/card1.jpg'
import card2 from '../images/card2.jpg'
import card3 from '../images/card3.png'
import bigcard1 from '../images/bigcard1.jpg'
import bigcard2 from '../images/bigcard2.webp'
import { Link } from 'react-router-dom'
const Landing2 = () => {
  return (
    <>
    <div>
        <h1 className='maintitle'>Convert your imagination into real in few clicks .</h1>
    <div className='Landing2body'>
      <div className="container">
        <div className='sub-container'>
        <div data-aos="fade-up" data-aos-offset="300" className="step">
                <img className='step-icon' src={step1} alt="Step 1"/>
            <div className="step-content">
                <h2 className="step-title">Step 1</h2>
                <p className="step-description">Create account or login with u r existing account.</p>
            </div>
        </div>
        <div  data-aos="fade-up" data-aos-offset="300" className="step">
                <img className="step-icon" src={step2} alt="Step 2"/>
            <div className="step-content">
                <h2 className="step-title">Step 2</h2>
                <p className="step-description">Type your innovate thinking here and click on Generate.</p>
            </div>
        </div>
        </div>
        <div className='sub-container'>
        <div data-aos="fade-up" data-aos-offset="300" className="step">
                <img className="step-icon" src={step3} alt="Step 3"/>
            <div className="step-content">
                <h2 className="step-title">Step 3</h2>
                <p className="step-description">Your innovation will be generated in few minutes.</p>
            </div>
        </div>
        <div data-aos="fade-up" data-aos-offset="300" className="step">
                <img className="step-icon" src={step4} alt="Step 4"/>
            <div className="step-content">
                <h2 className="step-title">Step 4</h2>
                <p className="step-description">Select the quality of image and get your image for free.</p>
            </div>
        </div>
        </div>
        {/* Cards */}
        <div  className='downimages'>
        <div class="card" id='cards'  data-aos="zoom-in" data-aos-offset="400" style={{width: "20rem",margin:'20px'}}>
  <img src={card1} id='img3' class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title" id='h5'>Endless Possibilities</h5>
    <p class="card-text" id='h5sub'>Create an infinite number of images with just Link few clicks.</p>
    <center><Link to="/Login" class="btn btn-primary">Explore more</Link></center>
  </div>
</div>
<div  id='cards' data-aos="zoom-in" data-aos-offset="400"   class="card" style={{width: "20rem",margin:'20px'}}>
  <img src={card3} id='img3' class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title" id='h5'>Fast and Efficient</h5>
    <p class="card-text" id='h5sub'>Generate high-quality and high-resolution images in seconds.</p>
    <center><Link to="/Login" variant='outline' class="btn btn-primary">Explore more</Link></center>
  </div>
</div>
<div  id='cards' data-aos="zoom-in" data-aos-offset="400"  class="card" style={{width: "20rem",margin:'20px'}}>
  <img src={card2} id='img3' class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title" id='h5'>Customizable Options</h5>
    <p class="card-text" id='h5sub'>Fine-tune your image generation with Link wide range.</p>
    <center><Link to="/Login" class="btn btn-primary">Explore more</Link></center>
  </div>
</div>
</div>


<div data-aos="zoom-in" data-aos-offset="300" className='bigcards'>
<div>
  <img className='bigcards-img' src={bigcard2} alt="" />
</div>
<div>
  <h2 style={{marginLeft:'20px',color:'red',fontSize:'2rem',fontWeight:'700'}}>What is Λɪ ?</h2>
  <p style={{marginLeft:'20px',color:'black',fontSize:'1.2rem',fontWeight:'550'}}>Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision.</p>
</div>
</div>
<div data-aos="zoom-in" data-aos-offset="250" className='bigcards'>
<div>
  <h2 style={{color:'red',fontSize:'2rem',fontWeight:'700'}}>Λɪ Image Generator :</h2>
  <p style={{color:'black',fontSize:'1.2rem',fontWeight:'550'}}>An AI image generator uses an advanced machine learning algorithm known as artificial neural networks (ANN) to generate new images. The ANN, which is modeled on biological neural networks, is trained on Link large number of image-text pairs.</p>
</div>
<div>
  <img className='bigcards-img' src={bigcard1} alt="" />
</div>
</div>
      
    </div>
    </div>
    
    </div>
    </>
  )
}

export default Landing2;

