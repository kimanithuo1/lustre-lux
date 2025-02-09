"use client"
import React from 'react';
import { useState } from "react"
import { Link } from "react-router-dom"
import { FiSearch, FiHeart, FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi"

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-black/25 dark:bg-raven-black/95 shadow-lg sticky top-0 z-50 backdrop-filter backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/logo.svg" alt="LustreLux Logo" className="h-12 w-auto" />
          <span className="ml-2 text-3xl font-bold text-royal-gold">LustreLux</span>
        </Link>
        <nav className="hidden md:flex space-x-8 text-royal-gold" >
          {[
            { name: "Home", path: "/" },
            { name: "Shop", path: "/shop" },
            { name: "Custom Jewelry", path: "/custom-jewelry" },
            { name: "About Us", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-raven-black dark:text-white hover:text-royal-gold dark:hover:text-royal-gold transition duration-300 font-semibold text-lg tracking-wide"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-6">
          <button
            onClick={toggleDarkMode}
            className="text-raven-black dark:text-white hover:text-royal-gold transition duration-300 text-xl"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          <FiSearch className="w-6 h-6 text-raven-black dark:text-white hover:text-royal-gold cursor-pointer transition duration-300" />
          <FiHeart className="w-6 h-6 text-raven-black dark:text-white hover:text-royal-gold cursor-pointer transition duration-300" />
          <div className="relative">
            <FiShoppingCart className="w-6 h-6 text-raven-black dark:text-white hover:text-royal-gold cursor-pointer transition duration-300" />
            <span className="absolute -top-2 -right-2 bg-royal-gold text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </div>
          <FiUser className="w-6 h-6 text-raven-black dark:text-white hover:text-royal-gold cursor-pointer transition duration-300" />
          <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? (
              <FiX className="w-6 h-6 text-raven-black dark:text-white" />
            ) : (
              <FiMenu className="w-6 h-6 text-raven-black dark:text-white" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-raven-black border-t border-gray-200 dark:border-gray-800">
          <nav className="flex flex-col space-y-4 p-6">
            {[
              { name: "Home", path: "/" },
              { name: "Shop", path: "/shop" },
              { name: "Custom Jewelry", path: "/custom-jewelry" },
              { name: "About Us", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-raven-black dark:text-white hover:text-royal-gold transition duration-300 text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header

