"use client"
import React from 'react';
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const BlogPost = ({ post, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 bg-royal-gold/10 text-royal-gold rounded-full text-sm font-medium mb-4">
          {post.category}
        </span>
        <h3 className="text-xl font-semibold mb-3 group-hover:text-royal-gold transition-colors duration-300">
          {post.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{post.excerpt}</p>
        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center text-royal-gold hover:text-royal-gold/80 transition-colors duration-300"
        >
          Read More
          <svg
            className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </motion.div>
  )
}

const BlogSection = () => {
  const blogPosts = [
    {
      title: "2024 Jewelry Trends: What's Hot This Year",
      excerpt:
        "From bold statement pieces to delicate minimalist designs, discover the jewelry trends that are defining style in 2024. Learn how to incorporate these trends into your personal collection.",
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Trends",
      slug: "2024-jewelry-trends",
    },
    {
      title: "The Complete Guide to Diamond Selection",
      excerpt:
        "Understanding the 4 Cs - cut, clarity, color, and carat weight - is essential when choosing the perfect diamond. Our comprehensive guide helps you make an informed decision.",
      image:
        "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Education",
      slug: "diamond-selection-guide",
    },
    {
      title: "Caring for Your Fine Jewelry Collection",
      excerpt:
        "Learn professional tips and techniques for maintaining the beauty and integrity of your precious jewelry pieces, ensuring they last for generations to come.",
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Care Guide",
      slug: "jewelry-care-guide",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-platinum-silver to-white dark:from-raven-black dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Jewelry Education</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Explore our curated collection of articles and guides to enhance your jewelry knowledge
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPost key={post.slug} post={post} index={index} />
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
            to="/blog"
            className="inline-flex items-center justify-center bg-royal-gold text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition duration-300 text-lg font-semibold shadow-lg hover:shadow-royal-gold/20"
          >
            Explore All Articles
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogSection

