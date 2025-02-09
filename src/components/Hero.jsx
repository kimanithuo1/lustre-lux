"use client"
import React from 'react';
const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/hero-image.jpg" alt="Premium Jewelry" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-raven-black bg-opacity-50"></div>
      </div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Bespoke Elegance, Crafted for You</h1>
        <p className="text-xl md:text-2xl mb-8">Discover the perfect piece that tells your unique story</p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            className="bg-royal-gold text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition duration-300"
          >
            Shop Now
          </a>
          <a
            href="#"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-raven-black transition duration-300"
          >
            Customize Your Jewelry
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

