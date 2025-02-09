"use client"
import React from 'react';
import { useState } from "react"

const CustomJewelry = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    type: "",
    metal: "",
    gemstone: "",
    style: "",
  })

  const options = {
    type: ["Ring", "Necklace", "Earrings", "Bracelet"],
    metal: ["Yellow Gold", "White Gold", "Rose Gold", "Platinum"],
    gemstone: ["Diamond", "Sapphire", "Ruby", "Emerald"],
    style: ["Classic", "Modern", "Vintage", "Minimalist"],
  }

  const handleOptionChange = (category, value) => {
    setSelectedOptions((prev) => ({ ...prev, [category]: value }))
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Create Your Custom Jewelry</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src="https://images.unsplash.com/photo-1616166330003-8a12f9e5b7fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Custom Jewelry"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div>
          <p className="text-lg mb-6">
            Design your perfect piece of jewelry by selecting from our curated options below:
          </p>
          {Object.entries(options).map(([category, values]) => (
            <div key={category} className="mb-6">
              <h3 className="text-xl font-semibold mb-2 capitalize">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {values.map((value) => (
                  <button
                    key={value}
                    onClick={() => handleOptionChange(category, value)}
                    className={`px-4 py-2 rounded-full ${
                      selectedOptions[category] === value
                        ? "bg-royal-gold text-white"
                        : "bg-gray-200 text-raven-black hover:bg-gray-300"
                    } transition duration-300`}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button className="mt-6 bg-royal-gold text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition duration-300">
            Start Your Custom Design
          </button>
        </div>
      </div>
    </div>
  )
}

export default CustomJewelry

