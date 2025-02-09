"use client"
import React from 'react';
import { motion } from "framer-motion"

const SizeTable = ({ title, sizes }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-royal-gold text-white">
              {Object.keys(sizes[0]).map((key, index) => (
                <th key={index} className="p-2 text-left">
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sizes.map((size, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100 dark:bg-gray-800" : ""}>
                {Object.values(size).map((value, idx) => (
                  <td key={idx} className="p-2 border-t border-gray-200 dark:border-gray-700">
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}

const SizeGuide = () => {
  const ringSizes = [
    { "US Size": "4", "Inside Diameter (mm)": "14.9", "UK Size": "H" },
    { "US Size": "5", "Inside Diameter (mm)": "15.7", "UK Size": "J 1/2" },
    { "US Size": "6", "Inside Diameter (mm)": "16.5", "UK Size": "L 1/2" },
    { "US Size": "7", "Inside Diameter (mm)": "17.3", "UK Size": "N 1/2" },
    { "US Size": "8", "Inside Diameter (mm)": "18.2", "UK Size": "P 1/2" },
    { "US Size": "9", "Inside Diameter (mm)": "19.0", "UK Size": "R 1/2" },
    { "US Size": "10", "Inside Diameter (mm)": "19.8", "UK Size": "T 1/2" },
  ]

  const braceletSizes = [
    { Size: "Small", "Wrist Circumference (cm)": "14-15", "Length (cm)": "17-18" },
    { Size: "Medium", "Wrist Circumference (cm)": "15-16", "Length (cm)": "18-19" },
    { Size: "Large", "Wrist Circumference (cm)": "16-17", "Length (cm)": "19-20" },
    { Size: "X-Large", "Wrist Circumference (cm)": "17-18", "Length (cm)": "20-21" },
  ]

  const necklaceSizes = [
    { Style: "Choker", "Length (inches)": "14-16", "Length (cm)": "35-40" },
    { Style: "Princess", "Length (inches)": "17-19", "Length (cm)": "43-48" },
    { Style: "Matinee", "Length (inches)": "20-24", "Length (cm)": "50-60" },
    { Style: "Opera", "Length (inches)": "28-34", "Length (cm)": "70-86" },
    { Style: "Rope", "Length (inches)": "36-42", "Length (cm)": "90-107" },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Jewelry Size Guide
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
      >
        Use our size guide to find the perfect fit for your LustreLux jewelry. If you're between sizes or unsure, we
        recommend choosing the larger size for comfort.
      </motion.p>
      <div className="max-w-4xl mx-auto">
        <SizeTable title="Ring Sizes" sizes={ringSizes} />
        <SizeTable title="Bracelet Sizes" sizes={braceletSizes} />
        <SizeTable title="Necklace Sizes" sizes={necklaceSizes} />
      </div>
    </div>
  )
}

export default SizeGuide

