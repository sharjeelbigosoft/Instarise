import React from 'react'
import logo from './logo.jpg'
export default function Header() {
  return (
    // <!-- Fixed header -->
    <div className="fixed z-50 flex justify-center max-md:mt-4 mt-8 w-full top-0 bg-white">
      <div className='flex justify-between py-4 max-md:px-4 px-12 w-4/5 max-md:w-full shadow-md'>
        <div className="flex items-center space-x-2">
            <img className='h-8' src={logo} alt="" />
            <h1 className="uppercase font-medium">instarise</h1>
        </div>
        <div className='bg-teal-300 rounded-lg'>
            <button className="bg-black text-white py-2 px-4 rounded-lg -translate-y-1 -translate-x-1">Book a Call</button>
        </div>
      </div>
    </div>
  )
}
