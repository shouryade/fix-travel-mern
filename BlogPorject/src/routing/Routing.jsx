import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'
import Dashboard from '../pages/Dashboard'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Projects from '../pages/Projects'
import PrivateRouting from '../components/PrivateRouting'
import Properties from '../pagesMohin/properties'
import Kasol from '../pagesMohin/landing-kasol'
import Manali from '../pagesMohin/landing-manali'





import Landing from '../pagesMohin/landing'
import Host from '../components/host'


function Routing() {
  return (
    <Routes>
      

      <Route element={<PrivateRouting/>}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      <Route path="/signin" element={<SignIn />} /> 
      <Route path="/signup" element={<SignUp />} />  
      <Route path="/projects" element={<Projects />} /> 
      <Route path="/about" element={<AboutUs />} />    
 
             

      <Route path="/about" element={<AboutUs />} /> 
      <Route path="/test/landing" element={<Landing />} /> 
      <Route path="/host" element={<Host />} /> 
      <Route path="/properties" element={<Properties />} />  
      <Route path="/kasol" element={<Kasol />} />    
      <Route path="/manali" element={<Manali />} />        
    </Routes>
  )
}

export default Routing
