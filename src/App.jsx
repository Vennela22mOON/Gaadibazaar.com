import React from 'react'
import Navbar from './components/Navbar'
import Car from './components/car'
import Footer from './components/Footer'
import Mobile from './components/Mobile'
import Cart from './components/Cart'
import Road from './components/Road'
import RegisterCar from './components/RegisterCar'
import Cars from './components/Cars'
import Recommended_cars from './components/Recommended_cars'
import Recent_Cars from './components/Recent_Cars'
import Brands from './components/Brands'
import HomeLoan from './components/HomeLoan'

function App() {
  return (
    <div>
      <Navbar />
      <Car />
      <Brands />
      <HomeLoan />
      <Cart />
      <Mobile />
      <Cars />
      <Recommended_cars />
      <Recent_Cars />
      <RegisterCar />
      <Road />
      <Footer/>
    </div>
    
  )
}

export default App
