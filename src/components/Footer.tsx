import React from 'react'
import insta from './Resources/Instagram -logo.png'
import facebook from './Resources/Facebook-logo.png'
import twitter from './Resources/twitter-logo.png'
import linkedin from './Resources/Linkedin-logo.png'
import tiktok from './Resources/Tiktok-logo.png'

export default function Footer() {
  return (
    <>
        <div className='flex flex-wrap justify-center mt-20 max-md:border-teal-400 max-md:border-t'>
            <div className='py-10 max-lg:hidden w-[15%]'></div>
            <div className='md:border-t md:border-teal-400 py-10 md:border-b space-y-4 max-md:w-[80%] md:w-[20%] px-6 text-sm'>
                <div className='flex space-x-2'>
                    <img className='h-8 rounded-lg' src="./logo.jpg" alt="" />
                    <p className='self-center uppercase font-medium text-sm'>instarise</p>
                </div>
                <p>We make you stand out in a crowded market.</p>
                <p className='font-medium'>Dr./Li./In.</p>
            </div>

            <div className='md:border-t md:border-teal-400 py-10 md:border-b space-y-4 text-sm max-md:w-[80%] md:w-[20%] px-6'>
                <p className='font-bold'>Work inquiries</p>
                <p className='font-thin'>Interested in working with us?</p>
                <div>
                    <p className='font-medium'>heyengage.io</p>
                    <p className='font-medium'>090078601</p>
                </div>
            </div>

            <div className='md:border-t md:border-teal-400 py-10 md:border-b space-y-4 text-sm max-md:w-[80%] max-lg:w-[40%] lg:w-[20%] px-6'>
                <p className='font-bold'>Do you want special offers?</p>
                <div className='flex border rounded w-min max-md:w-full'>
                    <input className='max-md:w-[80%] p-2' placeholder='Your email address' type="email" />
                    <button className='font-medium'>Subscribe</button>
                </div>
                <p>This is totally free. We will only send you coupen codes and offers.</p>
            </div>

            <div className='py-10 md:border-t md:border-teal-400 max-md:border-teal-400 max-md:border-b grid justify-items-center max-md:w-[80%] max-md:space-x-4 max-md:justify-center max-md:flex max-lg:w-[10%] lg:w-[15%] px-6'>
                <img className='max-md:w-[15%] md:h-5' src={insta} alt="" />
                <img className='max-md:w-[15%] md:h-5' src={linkedin} alt="" />
                <img className='max-md:w-[15%] md:h-5' src={facebook} alt="" />
                <img className='max-md:w-[15%] md:h-5' src={twitter} alt="" />
                <img className='max-md:w-[15%] md:h-5' src={tiktok} alt="" />
            </div>
        </div>

        <p className='text-center text-xs text-slate-500 mb-6 mt-4'>Instarise 2023. All rights reserved by Instarise.</p>
        {/* <div className='flex just'></div> */}
    </>
  )
}
