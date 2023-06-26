import React from 'react'
import insta from './Resources/Instagram -logo.png'
import facebook from './Resources/Facebook-logo.png'
import twitter from './Resources/twitter-logo.png'
import linkedin from './Resources/Linkedin-logo.png'
import tiktok from './Resources/Tiktok-logo.png'

export default function Footer() {
  return (
    <>
        <div className='flex justify-center mt-20'>
            <div className='py-10 w-[15%]'></div>
            <div className='border-t border-teal-400 py-10 border-b space-y-4 w-[20%] px-6 text-sm'>
                <div className='flex space-x-2'>
                    <img className='h-8 rounded-lg' src="./logo.jpg" alt="" />
                    <p className='self-center uppercase font-medium text-sm'>instarise</p>
                </div>
                <p>We make you stand out in a crowded market.</p>
                <p>Dr./Li./In.</p>
            </div>

            <div className='border-t border-teal-400 py-10 border-b space-y-4 text-sm w-[20%] px-6'>
                <p className='font-semibold'>Work inquiries</p>
                <p className='font-thin'>Interested in working with us?</p>
                <div>
                    <p className='font-normal'>heyengage.io</p>
                    <p className='font-normal'>090078601</p>
                </div>
            </div>

            <div className='border-t border-teal-400 py-10 border-b space-y-4 text-sm w-[20%] px-6'>
                <p className='font-semibold'>Do you want special offers?</p>
                <div className='flex border p-2 rounded w-min'>
                    <input placeholder='Your email address' type="email" />
                    <button>Subscribe</button>
                </div>
                <p>This is totally free. We will only send you coupen codes and offers.</p>
            </div>

            <div className='py-10 border-t border-teal-400 grid justify-items-center w-[15%] px-6'>
                <img className='h-5' src={insta} alt="" />
                <img className='h-5' src={linkedin} alt="" />
                <img className='h-5' src={facebook} alt="" />
                <img className='h-5' src={twitter} alt="" />
                <img className='h-5' src={tiktok} alt="" />
            </div>
        </div>

        <p className='text-center text-xs text-slate-500 mb-6 mt-4'>Instarise 2023. All rights reserved by Instarise.</p>
        {/* <div className='flex just'></div> */}
    </>
  )
}
