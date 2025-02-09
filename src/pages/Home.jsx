"use client"
import React from 'react';
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import FeaturedCollections from "../components/FeaturedCollections"
import CustomizationSection from "../components/CustomizationSection"
import CustomerReviews from "../components/CustomerReviews"
import WhyChooseUs from "../components/WhyChooseUs"
import CallToAction from "../components/CallToAction"
import BlogSection from "../components/BlogSection"
import Newsletter from "../components/Newsletter"

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-platinum-silver to-white dark:from-raven-black dark:to-gray-900">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
           src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Luxury Pearl Necklace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white font-serif leading-tight">
            Exquisite Elegance,
            <br />
            <span className="text-royal-gold">Crafted for You</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-royal-gold/90 font-light max-w-2xl mx-auto">
            Discover timeless beauty and unparalleled craftsmanship in every piece
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/shop"
             className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full hover:bg-black hover:text-raven-black transition duration-300 text-lg font-semibold"
            >
              Explore Collections
            </Link>
            <Link
              to="/custom-jewelry"
              className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full hover:bg-black hover:text-raven-black transition duration-300 text-lg font-semibold"
            >
              Design Your Jewelry
            </Link>
          </div>
        </motion.div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="text-white/80"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </section>
      <FeaturedCollections />
      <CustomizationSection />
      <CustomerReviews />
      <WhyChooseUs />
      <CallToAction />
      <BlogSection />
      <Newsletter />
    </div>
  )
}

export default Home

