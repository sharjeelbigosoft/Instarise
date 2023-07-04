import React from 'react'
import logo from './Resources/logo.png'
// import frame52 from './Resources/Frame 52.png'
import arrow from './Resources/Icon.png'
export default function Header() {
  return (
    // <!-- Fixed header -->
    <>
    <header className='flex fixed w-full justify-center top-[5px] rounded-[0.31rem]'>
      <div className='flex justify-between w-[24.38rem] h-[3.06rem] py-[0.38rem] px-[0.81rem]'>
        <div className='flex items-center justify-between w-[6.19rem]'>
          <img src={logo} alt="Instarise" />
          <p className='uppercase text-[0.63rem] font-[700] font-[poppins]'>instarise</p>
        </div>
        <div className='flex justify-between w-[9rem]'>
          <div className='flex flex-col self-center max-h-[0.81rem] '>
            <svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.797119 1.2124H22.1498" stroke="#FF44EC" stroke-width="1.88406"/>
              <path d="M6.13529 7.49268H22.1498" stroke="#FF44EC" stroke-width="1.88406"/>
              <path d="M11.1594 13.7729H22.1498" stroke="#FF44EC" stroke-width="1.88406"/>
            </svg>
          </div>

          <div className='relative flex content-center bg-[#00EBEE] rounded-[0.38rem] w-[6.13rem] h-[1.75rem]'>
            <div className='z-20 absolute flex items-center justify-between self-center bg-black text-white w-[6.31rem] h-[1.75rem] p-[0.63rem] rounded-[0.38rem]'>
              <button className='text-[0.63rem] flex font-[700] font-[poppins]'>Book a Call</button>
              <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.31422 1.62598L9.61132 4.92308M9.61132 4.92308L6.31422 8.22018M9.61132 4.92308L1.13306 4.92308" stroke="#F9FAFB" stroke-width="1.25604" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div className='z-10 absolute bg-[#00EBEE] translate-x-[6px] translate-y-[3px] rounded-[0.38rem] w-[6.13rem] h-[1.75rem]'></div>
          </div>
        </div>
      </div>
    </header>
    
    {/* <div className="fixed flex justify-center max-md:my-[5px] max-md:py-[6px] max-md:px-[13px] max-md:w-[390px] xl:w-[1240px] top-0 bg-[#FFFFFF]">
      <div className='flex justify-between shadow-md'>
        <div className="flex items-center space-x-2">
            <img className='h-8' src={logo} alt="" />
            <h1 className="uppercase font-medium">instarise</h1>
        </div>
        <div className='bg-teal-300 rounded-lg flex'>
          <button className="bg-black text-white py-2 px-4 rounded-lg -translate-y-1 -translate-x-1 flex">Book a Call
          </button>
        </div>
      </div>
    </div> */}
    </>
  )
}
