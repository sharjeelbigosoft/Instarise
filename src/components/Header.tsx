import React from 'react'

export default function Header() {
  return (
    // <!-- Fixed header -->
    <div className="fixed flex justify-center mt-8 w-full top-0 bg-white">
      <div className='flex justify-between py-4 px-12 w-4/5 shadow-md'>
        <div className="flex items-center">
            <h1 className="uppercase font-medium">instarise</h1>
        </div>
        <div>
            <button className="bg-black text-white py-2 px-4 rounded-lg">Book a Call</button>
        </div>
      </div>
    </div>
  )
}
