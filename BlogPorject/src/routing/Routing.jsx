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
import SD from '../pagesMohin/info-sd'
import Lux from '../pagesMohin/info-lux'
import Fam from '../pagesMohin/info-fam'
import Villa from '../pagesMohin/info-villa.jsx'
import Homes from '../pagesMohin/info-homes.jsx'
import Sdenq from '../pagesMohin/sd-enq.jsx'
import Luxenq from '../pagesMohin/lux-enq.jsx'
import Famenq from '../pagesMohin/fam-enq.jsx'
import Villaenq from '../pagesMohin/villa-enq.jsx'
import Homesenq from '../pagesMohin/homes-enq.jsx'





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
      <Route path="/infosd" element={<SD />} />  
      <Route path="/infolux" element={<Lux />} /> 
      <Route path="/infofam" element={<Fam />} />     
      <Route path="/infovilla" element={<Villa />} />  
      <Route path="/infohomes" element={<Homes />} /> 
      <Route path="/sdenq" element={<Sdenq />} /> 
      <Route path="/luxenq" element={<Luxenq />} />
      <Route path="/famenq" element={<Famenq />} /> 
      <Route path="/villaenq" element={<Villaenq />} /> 
      <Route path="/homesenq" element={<Homesenq />} />        
    </Routes>
  )
}

export default Routing
