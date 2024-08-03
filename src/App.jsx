import React from "react";
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'

function App() {


  return (
    <>
    <Navbar/>
    
    <div className='min-h-[100%]'>
    <Manager/>
    </div>

    <Footer/>
    </>
  )
}

export default App
