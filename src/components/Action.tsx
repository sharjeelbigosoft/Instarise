import React from 'react'

export default function Action() {
  return (
    <>
    <div className='w-full flex justify-center my-10 px-4'>
        <div className='grid xl:w-3/5 lg:w-4/5 max-md:w-full max-lg:w-[90%] border rounded-md border-black justify-items-center justify-self-center py-12'>
            <h3 className='md:text-2xl max-md:text-xl md:font-semibold'>You're here <span>&#9733;</span> Don't waste time.</h3>
            <h3 className='md:text-2xl max-md:text-xl md:font-semibold my-2'>Take Action.</h3>
            <h3 className='md:text-2xl max-md:text-xl md:font-semibold uppercase'>Start Now</h3>
            <p  className='py-4 max-md:text-sm max-md:px-6'>Schedule a 15 minute call with an expert. We will guide you in the right direction!</p>
            <div className='flex md:w-[80%] max-md:w-full justify-center space-x-6 max-md:text-sm'>
                <button className='rounded-lg bg-black text-white py-2 md:px-16 max-md:px-6 max-md:w-[40%] md:w-[50%]'>Book a Call</button>
                <button className='rounded-lg bg-white text-black py-2 md:px-16 max-md:px-6 max-md:w-[40%] md:w-[50%] border-2'>See Instagram</button>

            </div>
        </div>
    </div>
    </>
  )
}
