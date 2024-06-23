import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'
import Dashboard from '../pages/Dashboard'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Projects from '../pages/Projects'
import PrivateRouting from '../components/PrivateRouting'
import Login from '../pagesMohin/Login'
import Signupp from '../pagesMohin/signup'
import Footer from '../pagesMohin/footer'


function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route element={<PrivateRouting/>}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      <Route path="/signin" element={<SignIn />} /> 
      <Route path="/signup" element={<SignUp />} />  
      <Route path="/projects" element={<Projects />} /> 
      <Route path="/about" element={<AboutUs />} />
      <Route path="/test/login" element={<Login />} />     
      <Route path="/test/signup" element={<Signupp />} />  
      <Route path="/test/footer" element={<Footer />} />        
    </Routes>
  )
}

export default Routing
