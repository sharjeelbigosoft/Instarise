import React from 'react'

export default function Action() {
  return (
    <>
    <div className='w-full flex justify-center my-10'>
        <div className='grid w-3/5 border rounded-md border-black justify-items-center justify-self-center py-12'>
            <h3 className='text-2xl font-semibold'>You're here <span>&#9733;</span> Don't waste time. .</h3>
            <h3 className='text-2xl font-semibold my-2'>Take Action.</h3>
            <h3 className='text-2xl font-semibold uppercase'>Start Now</h3>
            <p  className='py-4'>Schedule a 15 minute call with an expert. We will guide you in the right direction!</p>
            <div className='flex w-7/12 justify-between'>
                <button className='rounded-lg bg-black text-white py-2 px-16'>Book a Call</button>
                <button className='rounded-lg bg-white text-black py-2 px-16 border-2'>See Instagram</button>

            </div>
        </div>
    </div>
    </>
  )
}
