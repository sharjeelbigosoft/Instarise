import React from 'react'
import image from './Resources/Group 4125 1.png'
import image_full from './Resources/Group 4125 1 full.png'
export default function Statement() {
  return (
    <>
        <div className='flex justify-center w-full'>
            <div className='relative flex flex-col md:flex-row-reverse md:items-center md:justify-between md:w-[40rem] lg:w-[55rem]'>
                {/* image */}

                <img className='md:hidden ' src={image} alt="" />
                <img className='max-md:hidden md:w-[20rem] lg:w-[25rem]' src={image_full} alt="" />
                {/* vector */}
                <svg className='absolute top-[19.81rem] right-0 md:hidden' width="236" height="74" viewBox="0 0 236 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 63.9156C15.6899 62.5793 30.3145 60.134 40.9618 41.5914C47.8454 29.6033 46.4631 12.5974 37.6787 4.39812C29.6711 -3.07607 20.8948 2.31736 16.8 15.3131C10.2674 36.0463 18.1961 53.0793 30.8046 59.3848C46.4422 67.2052 64.8422 63.7243 79.6924 53.2889C84.1934 50.126 89.0215 45.3106 92.7223 40.0262C94.7478 37.1341 99.3476 30.0176 99.2373 24.7041C99.1014 18.1583 90.3604 17.3347 88.9877 27.7669C87.2033 38.8855 117.338 47.3888 119.731 47.7696C132.548 49.8089 147.478 48.8793 158.436 36.5252C162.048 32.4529 164.926 27.9276 165.413 20.5852C166.027 11.3112 160.64 6.23759 155.615 5.51021C144.963 3.96855 133.086 15.9437 134.12 34.6717C135.528 60.1487 153.911 73.1033 167.926 73.4713C179.286 73.7695 192.083 61.5446 197.218 45.0512C197.392 44.4931 198.701 40.2315 196.782 40.5617C194.106 41.0222 191.63 47.196 191.165 50.9C189.513 64.0656 199.916 68.1744 205.836 67.3754C216.2 65.9769 226.277 59.0611 236 53.536" stroke="#00EBEE" stroke-width="0.823598" stroke-linecap="round" stroke-dasharray="4.67 4.67"/>
                </svg>
                {/* frame 60 */}
                <div className='justify-self-center'>
                    <h3 className='font-[lato] font-[500] leading-[2rem] text-[1.44rem] w-[20.06rem]'>Tired of unreliable freelancers, and expensive hires?<br/>So are we.</h3>
                    <p className='font-[poppins] font-[400] text-[0.75rem]'>Build an engaged community on <p className='inline bg-gradient-to-r from-[#6DDCFF] to-[#FF44EC] text-transparent'>Instagram</p></p>
                </div>
            </div>
        </div>
    </>
  )
}
