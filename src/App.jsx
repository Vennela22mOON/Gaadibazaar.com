import React from 'react';
import Navbar from './components/Navbar';
import Car from './components/Car';
import Footer from './components/Footer';
import Mobile from './components/Mobile';
import Cart from './components/Cart';
import Road from './components/Road';
import RegisterCar from './components/RegisterCar';
import Cars from './components/Cars';
import Recommended_cars from './components/Recommended_cars';
import Recent_Cars from './components/Recent_Cars';
import Brands from './components/Brands';
import HomeLoan from './components/HomeLoan';
import LoanForm from './components/LoanForm'; // Import LoanForm
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router> {/* Router should wrap the entire app */}
      <div>
        <Navbar />
        <Car />
        <Brands />
        <Routes>
          <Route path="/" element={<HomeLoan />} />
          <Route path="/loan_form" element={<LoanForm />} />
        </Routes>
        <Cart />
        <Mobile />
        <Cars />
        <Recommended_cars />
        <Recent_Cars />
        <RegisterCar />
        <Road />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
