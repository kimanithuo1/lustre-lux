"use client"
import React from 'react';
import { useState } from "react"
import { motion } from "framer-motion"

const Newsletter = () => {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Implement newsletter subscription logic
    console.log("Subscribed with email:", email)
    setIsSubmitted(true)
    setEmail("")
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-light-steel-blue to-platinum-silver dark:from-gray-800 dark:to-raven-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Join the LustreLux Club</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe for exclusive deals, early access to new collections, and jewelry care tips
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-royal-gold"
                required
              />
              <button
                type="submit"
                className="bg-royal-gold text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition duration-300 shadow-lg hover:shadow-xl"
              >
                Subscribe
              </button>
            </div>
          </form>
          {isSubmitted && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-green-600 dark:text-green-400"
            >
              Thank you for subscribing!
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Newsletter

