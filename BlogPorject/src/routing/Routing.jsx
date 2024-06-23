import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'
import Dashboard from '../pages/Dashboard'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Projects from '../pages/Projects'
import PrivateRouting from '../components/PrivateRouting'
import SignInDemo from '../pages/SignInDemo'


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
    </Routes>
  )
}

export default Routing
