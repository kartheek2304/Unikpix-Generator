import React from 'react'
import './Teams.css'
import kar from '../images/kartheek.jpg'
import vinod from '../images/vinod.jpg'
import rajesh from '../images/rajesh.jpg'
import vani from '../images/vani.jpg'
import navya from '../images/navya.jpg'
import Team from '../images/team.jpg'
// import Navbar from './Navbar'
const Teams = () => {
  return (
    <>
    {/* <Navbar/> */}
    <div className='mainteams'>
      <img style={{marginBottom:'20px'}} src={Team} alt="" />
      <div data-aos="flip-up" data-aos-offset="400" className="card" style={{width:'18rem'}}>
  <img src={kar} id='teamimg' className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Kartheek Karamsetti</h5>
    <p className="card-text"><span style={{fontWeight:'900',fontSize:'18px'}}>Role :</span> Team Lead</p>
    <p className="card-text"><span style={{fontWeight:'900',fontSize:'18px'}}>Design :</span> All Pages</p>
    <p className="card-text"><span style={{fontWeight:'900',fontSize:'18px'}}>Phone No :</span> 8897479004</p>
  </div>
</div>
      <div data-aos="flip-up" data-aos-offset="400" className="card" style={{width:'18rem'}}>
  <img src={vinod} id='teamimg' className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Vinod Ediresi</h5>
    <p className="card-text"><span style={{fontWeight:'900',fontSize:'18px'}}>Role :</span> Team Support</p>
    <p className="card-text"><span style={{fontWeight:'900',fontSize:'18px'}}>Design :</span> About Us, Footer</p>
    <p className="card-text"><span style={{fontWeight:'900',fontSize:'18px'}}>Phone No :</span> 6300202273</p>
  </div>
</div>
      <div data-aos="flip-up" data-aos-offset="400" className="card" style={{width:'18rem'}}>
  <img src={rajesh} id='teamimg' className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Rajesh Gandikota</h5>
    <p className="card-text"><span style={{fontWeight:'900',fontSize:'18px'}}>Role :</span> Team Support</p>
    <p className="card-text"><span style={{fontWeight:'900',fontSize:'18px'}}>Design :</span> Our Team Page</p>
    <p className="card-text"><span style={{fontWeight:'900',fontSize:'18px'}}>Phone No :</span> 7013656866</p>
  </div>
</div>
      <div data-aos="flip-up" data-aos-offset="400" className="card" style={{width:'18rem'}}>
  <img src={vani} id='teamimg' className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Vani Tangella</h5>
    <p className="card-text"><span style={{fontWeight:'900',fontSize:'18px'}}>Role :</span> Team Support</p>
    <p className="card-text"><span style={{fontWeight:'900',fontSize:'18px'}}>Design :</span> T & C Page </p>
    <p className="card-text"><span style={{fontWeight:'900',fontSize:'18px'}}>Phone No :</span>9948774221</p>
  </div>
</div>
      <div data-aos="flip-up" data-aos-offset="400" className="card" style={{width:'18rem'}}>
  <img src={navya} id='teamimg' className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Navya</h5>
    <p className="card-text"><span style={{fontWeight:'900',fontSize:'18px'}}>Role :</span> Team Support</p>
    <p className="card-text"><span style={{fontWeight:'900',fontSize:'18px'}}>Design :</span> Privacy Policy Page</p>
    <p className="card-text"><span style={{fontWeight:'900',fontSize:'18px'}}>Phone No :</span>9346908171</p>
  </div>
</div>
    </div>
    </>
  )
}

export default Teams
