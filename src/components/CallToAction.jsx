"use client"
import React from 'react';
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const CallToAction = () => {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60) // 24 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time % 3600) / 60)
    const seconds = time % 60
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    <section className="py-20 bg-gradient-to-r from-royal-gold to-light-steel-blue text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Limited Time Offer</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Get 20% off on all custom jewelry orders. Don't miss this opportunity to create your dream piece!
          </p>
          <div className="text-6xl font-bold mb-8 font-mono">{formatTime(timeLeft)}</div>
          <Link
            to="/shop"
            className="inline-block bg-white text-royal-gold px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300 shadow-lg hover:shadow-xl"
          >
            Claim Your Offer
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction

