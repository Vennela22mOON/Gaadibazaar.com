import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeLoan from './components/HomeLoan';
import LoanForm from './components/LoanForm';
import View_cars from './components/View_cars';
import Cart from './components/Cart';
import Brands from './components/Brands';
import Recommended_cars from './components/Recommended_cars';
import Recent_Cars from './components/Recent_Cars';
import RegisterCar from './components/RegisterCar';
import Road from './components/Road';
import Cars from './components/Cars';
import Mobile from './components/Mobile';
import Car from './components/Car';
import Bike from './bikeComponents/Bike';
import Bike_page from './bikeComponents/Bike_page';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
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
            </>
          } 
        />
        <Route path="/loan_form" element={<LoanForm />} />
        <Route path="/view-cars" element={<View_cars />} />
        <Route path="/bikes" element={<Bike_page />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
