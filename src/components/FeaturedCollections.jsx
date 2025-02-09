"use client"
import React from 'react';
import { useState } from "react"
import { Link } from "react-router-dom"
import { FiHeart, FiShoppingCart, FiEye } from "react-icons/fi"
import { motion } from "framer-motion"

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        {isHovered && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 transition-opacity duration-300">
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="bg-white p-3 rounded-full hover:bg-royal-gold hover:text-white transition duration-300"
            >
              <FiEye className="w-5 h-5" />
            </motion.button>
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-3 rounded-full hover:bg-royal-gold hover:text-white transition duration-300"
            >
              <FiShoppingCart className="w-5 h-5" />
            </motion.button>
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-3 rounded-full hover:bg-royal-gold hover:text-white transition duration-300"
            >
              <FiHeart className="w-5 h-5" />
            </motion.button>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2 hover:text-royal-gold transition-colors duration-300">
          {product.name}
        </h3>
        <div className="flex items-center justify-between mb-3">
          <p className="text-royal-gold font-bold text-xl">${product.price.toLocaleString()}</p>
          <div className="flex items-center">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i}>{i < product.rating ? "★" : "☆"}</span>
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-500">({product.reviews})</span>
          </div>
        </div>
        <Link
          to={`/product/${product.id}`}
          className="block w-full text-center bg-royal-gold text-white py-3 rounded-full hover:bg-opacity-90 transition duration-300"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  )
}

const FeaturedCollections = () => {
  const products = [
    {
      id: 1,
      name: "Vintage Diamond Engagement Ring",
      price: 3999,
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 5,
      reviews: 24,
      category: "Rings",
    },
    {
      id: 2,
      name: "Pearl & Diamond Drop Necklace",
      price: 2499,
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 5,
      reviews: 18,
      category: "Necklaces",
    },
    {
      id: 3,
      name: "Sapphire Tennis Bracelet",
      price: 1899,
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4,
      reviews: 32,
      category: "Bracelets",
    },
    {
      id: 4,
      name: "Diamond Stud Earrings",
      price: 1299,
      image:
        "https://images.unsplash.com/photo-1589207242455-c6d8fb1f8d3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 5,
      reviews: 41,
      category: "Earrings",
    },
    {
      id: 5,
      name: "Rose Gold Infinity Ring",
      price: 899,
      image:
        "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4,
      reviews: 15,
      category: "Rings",
    },
    {
      id: 6,
      name: "Emerald Pendant Necklace",
      price: 2199,
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 5,
      reviews: 27,
      category: "Necklaces",
    },
    {
      id: 7,
      name: "Diamond Tennis Bracelet",
      price: 4999,
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 5,
      reviews: 36,
      category: "Bracelets",
    },
    {
      id: 8,
      name: "Pearl Drop Earrings",
      price: 799,
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4,
      reviews: 22,
      category: "Earrings",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-platinum-silver dark:from-gray-900 dark:to-raven-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Featured Collections</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Discover our handpicked selection of exquisite pieces, each crafted with precision and passion
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/shop"
            className="inline-flex items-center justify-center bg-royal-gold text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition duration-300 text-lg font-semibold shadow-lg hover:shadow-royal-gold/20"
          >
            View All Collections
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedCollections

