"use client"
import React from 'react';
import { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import LiveChat from "./components/LiveChat"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import CustomJewelry from "./pages/CustomJewelry"
import About from "./pages/About"
import Contact from "./pages/Contact"
import FAQ from "./pages/FAQ"
import CareInstructions from "./pages/CareInstructions"
import SizeGuide from "./pages/SizeGuide"
import Shipping from "./pages/Shipping"

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
        <div className="bg-gradient-to-br from-platinum-silver to-white dark:from-raven-black dark:to-gray-900 text-raven-black dark:text-white">
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/custom-jewelry" element={<CustomJewelry />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/care-instructions" element={<CareInstructions />} />
              <Route path="/size-guide" element={<SizeGuide />} />
              <Route path="/shipping" element={<Shipping />} />
            </Routes>
          </main>
          <Footer />
          <LiveChat />
        </div>
      </div>
    </Router>
  )
}

export default App

