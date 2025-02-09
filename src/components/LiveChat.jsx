"use client"
import React from 'react';
import { useState } from "react"
import { FiMessageSquare } from "react-icons/fi"

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <div className="bg-white dark:bg-raven-black rounded-lg shadow-lg p-4 mb-4 w-80">
          <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">How can we help you today?</p>
          <textarea
            className="w-full h-32 p-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-royal-gold"
            placeholder="Type your message here..."
          ></textarea>
          <button className="mt-2 bg-royal-gold text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition duration-300">
            Send
          </button>
        </div>
      )}
      <button
        onClick={toggleChat}
        className="bg-royal-gold text-white p-4 rounded-full shadow-lg hover:bg-opacity-90 transition duration-300"
      >
        <FiMessageSquare className="text-2xl" />
      </button>
    </div>
  )
}

export default LiveChat

