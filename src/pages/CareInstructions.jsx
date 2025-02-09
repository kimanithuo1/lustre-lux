"use client"
import React from 'react';
import { motion } from "framer-motion"

const CareInstructionItem = ({ title, instructions }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <ul className="list-disc list-inside space-y-2">
        {instructions.map((instruction, index) => (
          <li key={index} className="text-gray-600 dark:text-gray-300">
            {instruction}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

const CareInstructions = () => {
  const careInstructions = [
    {
      title: "General Care",
      instructions: [
        "Store your jewelry in a cool, dry place away from direct sunlight.",
        "Keep your jewelry in separate compartments to prevent scratching.",
        "Remove jewelry before swimming, bathing, or engaging in physical activities.",
        "Apply perfume, lotion, and hairspray before putting on your jewelry.",
      ],
    },
    {
      title: "Cleaning Gold Jewelry",
      instructions: [
        "Mix a few drops of mild dish soap with warm water.",
        "Soak the jewelry for 10-15 minutes.",
        "Gently brush with a soft-bristled toothbrush.",
        "Rinse thoroughly with clean water and pat dry with a soft cloth.",
      ],
    },
    {
      title: "Cleaning Silver Jewelry",
      instructions: [
        "Use a silver polishing cloth for regular maintenance.",
        "For tarnished pieces, use a silver cleaner following the product instructions.",
        "Rinse thoroughly after cleaning and dry with a soft cloth.",
      ],
    },
    {
      title: "Caring for Gemstones",
      instructions: [
        "Clean gemstones with a soft, damp cloth after each wear.",
        "For deep cleaning, use a solution of mild soap and warm water.",
        "Avoid using ultrasonic cleaners on soft or porous gemstones.",
        "Have your gemstone jewelry professionally cleaned and inspected annually.",
      ],
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
        Jewelry Care Instructions
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
      >
        Proper care ensures your LustreLux jewelry remains beautiful for generations. Follow these guidelines to keep
        your pieces in pristine condition.
      </motion.p>
      <div className="max-w-3xl mx-auto">
        {careInstructions.map((item, index) => (
          <CareInstructionItem key={index} title={item.title} instructions={item.instructions} />
        ))}
      </div>
    </div>
  )
}

export default CareInstructions

