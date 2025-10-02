import React from 'react'
import Navbar from '../components/Navbar'
const Landing = () => {
  return (
    <div className='pt-20'>
       <Navbar />

        <div className="hero bg-base-0 min-h-screen px-4">
          <div className="hero-content flex-col lg:flex-row-reverse bg-gray-900 p-6 lg:p-30 rounded-2xl max-w-6xl">
            <img
              src="/assets/mock1.jpg"
              className="w-full max-w-xs lg:max-w-sm rounded-lg shadow-2xl mb-6 lg:mb-0"
            />
            <div className="text-center lg:text-left">
              <h1 className="text-3xl lg:text-5xl font-bold underline">Track your Expenses</h1>
              <p className="py-6 text-sm lg:text-base">
                Easily track your outgoing expenses, sorted and categorized for better financial management.
              </p>
            </div>
          </div>
        </div>







    </div>
  )
}

export default Landing