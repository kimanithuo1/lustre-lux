"use client"
import React from 'react';
import { motion } from "framer-motion"
import { FiAward, FiTool, FiTruck, FiLock, FiHeart } from "react-icons/fi"

const FeatureCard = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105"
    >
      <div className="text-4xl text-royal-gold mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  )
}

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FiAward />,
      title: "High-Quality Craftsmanship",
      description: "Each piece is meticulously crafted by skilled artisans using premium materials.",
    },
    {
      icon: <FiTool />,
      title: "Customization Options",
      description: "Create your perfect piece with our wide range of customization choices.",
    },
    {
      icon: <FiTruck />,
      title: "Free Shipping & Returns",
      description: "Enjoy free shipping on all orders and hassle-free returns within 30 days.",
    },
    {
      icon: <FiLock />,
      title: "Secure Payment",
      description: "Shop with confidence using our secure and encrypted payment options.",
    },
    {
      icon: <FiHeart />,
      title: "Ethical Sourcing",
      description: "We're committed to sustainable and ethical sourcing practices for all our materials.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-platinum-silver dark:from-raven-black dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Why Choose LustreLux?</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Discover the reasons why our customers trust us for their precious jewelry needs
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs

