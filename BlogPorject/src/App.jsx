import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Routing from './routing/Routing'
import Header from './components/Header'


function App() {


  return (
    <>
      <div >
        <Header></Header>
        <Routing></Routing>

      </div>
      
    </>
  )
}

export default App
