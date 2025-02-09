"use client"
import React from 'react';
import { useState } from "react"
import { Link } from "react-router-dom"

const CustomizationSection = () => {
  const [metal, setMetal] = useState("gold")
  const [gemstone, setGemstone] = useState("diamond")
  const [engraving, setEngraving] = useState("")

  const customizationImages = {
    gold: {
      diamond:
        "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      sapphire:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      ruby: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=810&q=80",
      emerald:
        "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    silver: {
      diamond:
        "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      sapphire:
        "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      ruby: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      emerald:
        "https://images.unsplash.com/photo-1608042314453-ae338d80c427?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=810&q=80",
    },
    "rose-gold": {
      diamond:
        "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      sapphire:
        "https://images.unsplash.com/photo-1608042314453-ae338d80c427?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=810&q=80",
      ruby: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      emerald:
        "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
  }

  return (
    <section className="py-16 bg-gradient-to-r from-white to-light-steel-blue dark:from-raven-black dark:to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center font-serif">Design Your Own Jewelry</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img
              src={customizationImages[metal][gemstone] || "/placeholder.svg"}
              alt="Customized Jewelry Preview"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Select Metal</h3>
              <div className="flex space-x-4">
                {["gold", "silver", "rose-gold"].map((option) => (
                  <button
                    key={option}
                    onClick={() => setMetal(option)}
                    className={`px-4 py-2 rounded-full ${
                      metal === option ? "bg-royal-gold text-white" : "bg-gray-200 text-raven-black hover:bg-gray-300"
                    } transition duration-300`}
                  >
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Select Gemstone</h3>
              <div className="flex space-x-4">
                {["diamond", "sapphire", "ruby", "emerald"].map((option) => (
                  <button
                    key={option}
                    onClick={() => setGemstone(option)}
                    className={`px-4 py-2 rounded-full ${
                      gemstone === option
                        ? "bg-royal-gold text-white"
                        : "bg-gray-200 text-raven-black hover:bg-gray-300"
                    } transition duration-300`}
                  >
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Add Engraving</h3>
              <input
                type="text"
                value={engraving}
                onChange={(e) => setEngraving(e.target.value)}
                placeholder="Enter your engraving text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal-gold"
              />
            </div>
            <Link
              to="/custom-jewelry"
              className="bg-royal-gold text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition duration-300 inline-block"
            >
              Start Customizing
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomizationSection

