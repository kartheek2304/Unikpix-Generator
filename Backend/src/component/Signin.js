import React from 'react'
import './Signin.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import Sign from '../images/Signin.webp';
// import Navbar from './Navbar'
const Signin = () => {
   const [data,setData] = useState({
      firstName:'',
      lastName:'',
      email:'',
      password:''
  });
const [error,setError] = useState("");
const navigate = useNavigate();
const handleChange=(e)=>{
  setData({...data,[e.target.name]: e.target.value})
}
const handleSubmit=async (e)=>{
  e.preventDefault();
  try{
      const url = 'http://localhost:5000/api/users';
      const {data:result} = await axios.post(url,data);
      console.log(result.message);
      navigate('/Mainpage');
  }catch(error){
      setError('Already Email Exists'+error);
  }
}
  return (
   <>
   {/* <Navbar/> */}
    <div>
            <div class="login">
         <img src={Sign} alt="" class="login__img"/>

         <form action="" onSubmit={handleSubmit} class="login__form">
            <h1 class="login__title">SignUp</h1>

            <div class="login__content">
               <div class="login__box">
                  <i class="ri-user-3-line login__icon"></i>

                  <div class="login__box-input">
                     <input type="text" name="firstName" value={data.firstName} id="" onChange={handleChange} required class="login__input" placeholder=" "/>
                     <label for="" class="login__label">First Name</label>
                  </div>
               </div>
               <div class="login__box">
                  <i class="ri-user-3-line login__icon"></i>

                  <div class="login__box-input">
                     <input type="text" required name="lastName" value={data.lastName} id="" onChange={handleChange}  class="login__input" placeholder=" "/>
                     <label for="" class="login__label">Last Name</label>
                  </div>
               </div>
               <div class="login__box">
                  <i class="ri-user-3-line login__icon"></i>

                  <div class="login__box-input">
                     <input type="email" name="email" value={data.email} id="" onChange={handleChange}  required class="login__input" placeholder=" "/>
                     <label for="" class="login__label">Email</label>
                  </div>
               </div>
               {error && <div>{error}</div>} 
               <div class="login__box">
                  <i class="ri-lock-2-line login__icon"></i>

                  <div class="login__box-input">
                     <input type="password" name="password" value={data.password}  onChange={handleChange} required class="login__input" id="login-pass" placeholder=" "/>
                     <label for="" class="login__label">Password</label>
                     <i class="ri-eye-off-line login__eye" id="login-eye"></i>
                  </div>
               </div>
               {/* <div class="login__box">
                  <i class="ri-lock-2-line login__icon"></i>

                  <div class="login__box-input">
                     <input type="password" required class="login__input" id="login-pass" placeholder=" "/>
                     <label for="" class="login__label">Confirm Password</label>
                     <i class="ri-eye-off-line login__eye" id="login-eye"></i>
                  </div>
                  
               </div> */}
            </div>

            <button type="submit"  class="login__button">Signup</button>

            <p class="login__register">
             Existing Account ? <Link to="/Login">Login</Link>
            </p>
         </form>
      </div>     
    </div>
    </>
  )
}

export default Signin;
