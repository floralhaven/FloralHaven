import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Bat from './components/pages/Bat';
import Butterfly from './components/pages/Butterfly';
import Bee from './components/pages/Bee';
import Hummingbird from './components/pages/Hummingbird';
import ContactUs from './components/pages/ContactUs';
import GardenLayout from './components/pages/GardenLayout';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import './Main.css'; // Global CSS

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bat" element={<Bat /> } />
          <Route path="/butterfly" element={<Butterfly />} />
          <Route path="/bee" element={<Bee />} />
          <Route path="/hummingbird" element={<Hummingbird />} />
          <Route path="/contactus" element={<ContactUs /> } />
          <Route path="/gardenlayout" element={<GardenLayout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;