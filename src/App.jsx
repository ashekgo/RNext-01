// import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Body from "./components/Body";
import Footer from "./components/Footer";
import React from 'react'

export default function App() {
  return (
    <>
    <div className='bg-[#172227] font-[Inter] text-white'>
      <Navbar/>
      <Hero/>
      <Body/>
      <Footer/>
    </div>
    </>

  )
}

