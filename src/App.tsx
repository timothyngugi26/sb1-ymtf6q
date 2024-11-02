import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Package, ShoppingBag, Calculator, Wallet } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import Calculator from './components/Calculator';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
            </>
          } />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;