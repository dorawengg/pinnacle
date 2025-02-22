import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import Home from './Home';
import Consulting from './Consulting';
import Tutoring from './Tutoring';
import Team from './Team';
import Contact from './Contact';
import Footer from './components/Footer';
function App() {

  return (
    <>
      <Router>
        <Navbar />
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Consulting" element={<Consulting />} />
            <Route path="/Tutoring" element={<Tutoring />} />
            <Route path="/Team" element={<Team />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>

        </div>
        <Footer />
      </Router>
    </>
  )
}

export default App
