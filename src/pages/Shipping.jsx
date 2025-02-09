"use client"
import React from 'react';
import { motion } from "framer-motion"
import { FiTruck, FiPackage, FiClock, FiGlobe } from "react-icons/fi"

const ShippingMethod = ({ icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex items-start space-x-4 mb-8"
    >
      <div className="text-3xl text-royal-gold">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </motion.div>
  )
}

const Shipping = () => {
  const shippingMethods = [
    {
      icon: <FiTruck />,
      title: "Standard Shipping",
      description: "Free for orders over $100. Delivery within 5-7 business days.",
    },
    {
      icon: <FiPackage />,
      title: "Express Shipping",
      description: "$15 flat rate. Delivery within 2-3 business days.",
    },
    {
      icon: <FiClock />,
      title: "Next Day Delivery",
      description: "Available for select areas. Order by 2 PM for next-day delivery.",
    },
    {
      icon: <FiGlobe />,
      title: "International Shipping",
      description: "Available to most countries. Delivery times and rates vary by location.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Shipping Information
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
      >
        We offer various shipping options to ensure your LustreLux jewelry reaches you safely and on time. Choose the
        method that best suits your needs.
      </motion.p>
      <div className="max-w-3xl mx-auto">
        {shippingMethods.map((method, index) => (
          <ShippingMethod key={index} icon={method.icon} title={method.title} description={method.description} />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-12 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg"
      >
        <h3 className="text-2xl font-semibold mb-4">Returns and Exchanges</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          We want you to be completely satisfied with your LustreLux purchase. If for any reason you're not happy with
          your order, we offer a 30-day return or exchange policy for unworn items in their original condition.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          To initiate a return or exchange, please contact our customer service team, and they will guide you through
          the process.
        </p>
      </motion.div>
    </div>
  )
}

export default Shipping

