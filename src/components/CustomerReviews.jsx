"use client"
import React from 'react';
import { useState } from "react"
import { motion } from "framer-motion"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

const ReviewCard = ({ review }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
    >
      <div className="flex items-center mb-4">
        <img
          src={review.avatar || "/placeholder.svg"}
          alt={review.name}
          className="w-16 h-16 rounded-full mr-4 object-cover"
        />
        <div>
          <h3 className="font-semibold text-lg">{review.name}</h3>
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i}>{i < review.rating ? "★" : "☆"}</span>
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 italic mb-4">{review.text}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">{review.date}</p>
    </motion.div>
  )
}

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const reviews = [
    {
      id: 1,
      name: "Emily Johnson",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      rating: 5,
      text: "I absolutely love my custom-made engagement ring from LustreLux. The attention to detail and craftsmanship are exceptional. It's exactly what I dreamed of!",
      date: "March 15, 2024",
    },
    {
      id: 2,
      name: "Michael Smith",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      rating: 4,
      text: "The customization process was so easy and fun. I created a unique necklace for my wife's birthday, and she adores it. Great quality and service!",
      date: "April 2, 2024",
    },
    {
      id: 3,
      name: "Sophia Lee",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      rating: 5,
      text: "LustreLux's jewelry is simply stunning. I've received so many compliments on my bracelet. The customer service is top-notch too!",
      date: "April 18, 2024",
    },
    {
      id: 4,
      name: "David Chen",
      avatar:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      rating: 5,
      text: "I purchased a pair of diamond earrings for my anniversary, and they exceeded my expectations. The quality is outstanding, and the packaging was beautiful.",
      date: "May 5, 2024",
    },
    {
      id: 5,
      name: "Olivia Taylor",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      rating: 4,
      text: "The vintage-inspired ring I bought is a true work of art. It's become my favorite piece of jewelry. Thank you, LustreLux!",
      date: "May 22, 2024",
    },
  ]

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-platinum-silver to-white dark:from-gray-900 dark:to-raven-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">What Our Customers Say</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Hear from our valued customers about their experiences with LustreLux
          </p>
        </motion.div>
        <div className="relative">
          <div className="flex overflow-hidden">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={`w-full flex-shrink-0 transition-all duration-300 ease-in-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
          <button
            onClick={prevReview}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md text-royal-gold hover:bg-royal-gold hover:text-white transition duration-300"
            aria-label="Previous review"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={nextReview}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md text-royal-gold hover:bg-royal-gold hover:text-white transition duration-300"
            aria-label="Next review"
          >
            <FiChevronRight size={24} />
          </button>
        </div>
        <div className="flex justify-center mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === currentIndex ? "bg-royal-gold" : "bg-gray-300 dark:bg-gray-600"
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CustomerReviews

