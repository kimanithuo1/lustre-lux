"use client"
import React from 'react';
import { Link } from "react-router-dom"
import { FiInstagram, FiFacebook, FiTwitter, FiYoutube } from "react-icons/fi"

const FooterLink = ({ to, children }) => (
  <Link to={to} className="text-gray-300 hover:text-royal-gold transition duration-300">
    {children}
  </Link>
)

const Footer = () => {
  return (
    <footer className="bg-raven-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">About LustreLux</h3>
            <p className="text-gray-400 mb-4">
              Crafting bespoke elegance for the discerning individual. Luxury jewelry, tailored to your unique style.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-royal-gold transition duration-300">
                <FiInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-royal-gold transition duration-300">
                <FiFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-royal-gold transition duration-300">
                <FiTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-royal-gold transition duration-300">
                <FiYoutube size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <FooterLink to="/shop">Shop</FooterLink>
              </li>
              <li>
                <FooterLink to="/custom-jewelry">Custom Jewelry</FooterLink>
              </li>
              <li>
                <FooterLink to="/about">About Us</FooterLink>
              </li>
              <li>
                <FooterLink to="/contact">Contact</FooterLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <FooterLink to="/faq">FAQ</FooterLink>
              </li>
              <li>
                <FooterLink to="/shipping">Shipping & Returns</FooterLink>
              </li>
              <li>
                <FooterLink to="/care-instructions">Care Instructions</FooterLink>
              </li>
              <li>
                <FooterLink to="/size-guide">Size Guide</FooterLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-royal-gold"
              />
              <button
                type="submit"
                className="bg-royal-gold text-white px-4 py-2 rounded-r-md hover:bg-opacity-90 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} LustreLux. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

