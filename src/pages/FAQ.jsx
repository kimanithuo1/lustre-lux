"use client"
import React from 'react';
import { motion } from "framer-motion"

const FAQItem = ({ question, answer }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-6"
    >
      <h3 className="text-xl font-semibold mb-2">{question}</h3>
      <p className="text-gray-600 dark:text-gray-300">{answer}</p>
    </motion.div>
  )
}

const FAQ = () => {
  const faqs = [
    {
      question: "What is the return policy?",
      answer:
        "We offer a 30-day return policy for all our products. If you're not satisfied with your purchase, you can return it for a full refund or exchange within 30 days of receiving your order.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping times vary depending on your location. Typically, domestic orders are delivered within 3-5 business days, while international orders may take 7-14 business days.",
    },
    {
      question: "Do you offer custom jewelry design services?",
      answer:
        "Yes, we offer custom jewelry design services. You can work with our experienced designers to create a unique piece that perfectly matches your vision.",
    },
    {
      question: "What materials do you use in your jewelry?",
      answer:
        "We use high-quality materials in all our jewelry, including 14k and 18k gold, sterling silver, and ethically sourced gemstones. All our diamonds are conflict-free.",
    },
    {
      question: "How do I care for my jewelry?",
      answer:
        "We recommend storing your jewelry in a cool, dry place and cleaning it regularly with a soft cloth. For more detailed care instructions, please visit our Care Instructions page.",
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
        Frequently Asked Questions
      </motion.h1>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  )
}

export default FAQ

