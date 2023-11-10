import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './component/Navbar.js';
import Landing from './component/Landing.js'
import Footer from './component/Footer.js'
import About from './component/About.js'
import Login from './component/Login.js'
import Signin from './component/Signin.js'
import Contact from './component/Contact.js'
import Services from './component/Services.js'
import Mainpage from './component/Mainpage.js'
import Team from './component/Teams.js'
import Tc from './component/Tc.js'
import Policy from './component/Policy.js'
import Navbars from './component/Navbars.js'
const App = () => {
  const user = localStorage.getItem('token');
  return (
    <>
    <BrowserRouter>
    {/* <Navbar /> */}
    {user?<Navbars/>:<Navbar/>}
    <Routes>
      <Route path='/' element={<Landing/>}/>
      {/* <Route path='/Mainpage' element={<Mainpage/>}/> */}
      {user && <Route path='/Mainpage' exact element={<Mainpage/>}></Route>}
      <Route path='/About' element={<About/>}/>
      <Route path='/Services' element={<Services />}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Team' element={<Team/>}/>
      <Route path='/Tc' element={<Tc/>}/>
      <Route path='/Ppolicy' element={<Policy/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Signin' element={<Signin/>}/>
      <Route path='/Mainpage' exact element={<Navigate replace to='/login'/>}></Route>
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
