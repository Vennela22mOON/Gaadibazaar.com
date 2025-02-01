import React from 'react'
import Navbar from './components/Navbar'
import Car from './components/car'
import Footer from './components/Footer'
import Mobile from './components/Mobile'
import Cart from './components/Cart'
import Road from './components/Road'
import RegisterCar from './components/RegisterCar'
import Cars from './components/Cars'

function App() {
  return (
    <div>
      <Navbar />
      <Car />
      <Cart />
      <Mobile />
      <Cars />
      <RegisterCar />
      <Road />
      <Footer/>
    </div>
    
  )
}

export default App
