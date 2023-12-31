import React from 'react'

export default function Slogan() {
  return (
    <>
    {/*  sm:w-[30.5rem] md:w-[37rem] lg:w-[50rem] */}
    {/* fram 51 */}
      <div className='grid justify-items-center mt-[7.31rem] sm:mt-[8rem] lg:mt-[10rem] w-full'>
        {/* frame 46 */}
        <div className='flex flex-col items-center w-[20.56rem] sm:w-[30rem] md:w-[35rem] lg:w-[40rem] justify-center'>
          {/* frame 45 */}
          <div className='grid justify-items-center'>
            <h1 className='text-center font-[lato] font-[400] tracking-[4px] w-[20.44rem] sm:w-[29rem] md:w-[33rem] lg:w-[38rem] capitalize text-[3.13rem] sm:text-[4rem] leading-[60px] sm:leading-[70px] lg:leading-[80px]'>we grow your brand on a budget friendly solution!</h1>
            <p className='mt-[30px] mb-[10px] sm:mt-[40px] sm:mb-[15px] lg:mt-[50px] lg:mb-[20px] font-[poppins] font-[400] capitalize text-[1rem] w-[18.69rem] h-[3.38] text-gray-500 text-center leading-[27px]'>high-standard, high-performing work that don't cost a fortune.</p>
          </div>
          {/* Buttons */}
          <button className='font-[poppins] sm:w-[28rem] lg:w-[35rem] mt-[30px] font-[600] text-[1.13rem] leading-[0.81rem] bg-black rounded-[0.5rem] p-[0.56rem] text-white'>Book a Discovery Call</button>
        </div>

        {/* Offerings */}
        <div className='w-[22.81rem] sm:w-[28rem] lg:w-[35rem] h-[1.31rem] mt-[2.5rem] mb-[3.5rem]'>
          <div className='flex justify-between leading-[0.94rem] gap-[15px]'>
            {/* Social Media */}
            <div className='gap-[8px] flex'>
              <div className='relative self-center'>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6.72504" cy="6.49982" r="5.76935" fill="black"/>
                </svg>
                <svg className='absolute top-[3px] left-[4px]' width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.80188 3.49992L3.82392 6.7967L9.31855 1.02734" stroke="#00EBEE" stroke-width="1.09892" stroke-linecap="round"/>
                </svg>
              </div>
              <p className='font-[poppins] font-[400] text-[0.75rem] left-[21px]'>Social Media Management</p>
            </div>
            {/* Web design */}
            <div className='gap-[8px] flex'>
              <div className='relative self-center'>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6.72504" cy="6.49982" r="5.76935" fill="black"/>
                </svg>
                <svg className='absolute top-[3px] left-[4px]' width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.80188 3.49992L3.82392 6.7967L9.31855 1.02734" stroke="#00EBEE" stroke-width="1.09892" stroke-linecap="round"/>
                </svg>
              </div>
              <p className='font-[poppins] font-[400] text-[0.75rem] left-[21px]'>Web Design</p>
            </div>
            {/* Tiktok */}
            <div className='gap-[8px] flex'>
              <div className='relative self-center'>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6.72504" cy="6.49982" r="5.76935" fill="black"/>
                </svg>
                <svg className='absolute top-[3px] left-[4px]' width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.80188 3.49992L3.82392 6.7967L9.31855 1.02734" stroke="#00EBEE" stroke-width="1.09892" stroke-linecap="round"/>
                </svg>
              </div>
              <p className='font-[poppins] font-[400] text-[0.75rem] left-[21px]'>Tik Tok</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
