"use client"
import React from 'react'

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">About LustreLux</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1531995811006-35cb42e1a022?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Jewelry Craftsmanship"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="mb-4">
            Founded in 2010, LustreLux has been at the forefront of luxury jewelry design and craftsmanship. Our passion
            for creating exquisite pieces that stand the test of time has made us a trusted name in the industry.
          </p>
          <p className="mb-4">
            We believe that every piece of jewelry tells a story, and we're here to help you create yours. From timeless
            classics to modern masterpieces, our collections are designed to celebrate life's most precious moments.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Ethically sourced materials</li>
            <li>Exceptional craftsmanship</li>
            <li>Personalized customer service</li>
            <li>Lifetime warranty on all pieces</li>
          </ul>
          <p>
            At LustreLux, we're not just selling jewelry; we're creating heirlooms that will be cherished for
            generations to come.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About

