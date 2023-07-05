import React from 'react'

export default function Action() {
  return (
    <>
    {/* box-shadow: 0px -6px 7px 0px rgba(0, 0, 0, 0.15); */}

    <div className='w-full relative h-[35.44rem] grid mt-[21px] shadow-[0px_-6px_7px_0px_rgba(0, 0, 0, 0.15)] border-2'>
        <div className='z-40 mt-[34px] w-[23.75rem] grid justify-self-center border rounded-[10px] border-[#D9D9D9]'>
          <div className='w-[23.25rem] grid justify-self-center'>
            <div className='w-[21rem] justify-self-center grid mb-[0.75rem]'>
              <h3 className='justify-self-center font-[lato] font-[600] text-center text-[1.8rem] leading-[2.44rem] tracking-[1px]'>You're here  
                <svg className='inline' width="33" height="30" viewBox="0 0 33 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.5 0L20.2045 11.4012H32.1924L22.494 18.4476L26.1985 29.8488L16.5 22.8024L6.80154 29.8488L10.506 18.4476L0.807568 11.4012H12.7955L16.5 0Z" fill="black"/>
                </svg>
                 Don't waste time. Take Action.<br/><br/>START NOW</h3>
              <p className='mt-[30px] font-[poppins] justify-self-center font-[300] w-[18.25rem] text-[#676767] text-center text-[1rem] leading-[1.5rem]'>Schedule a 15 minute call with an expert. We will guide you in the right direction!</p>
            </div>
          </div>

          {/* buttons */}
          <div className='relative w-[22.5rem] h-[2.25rem] mb-[1rem] mt-[1.5rem] flex justify-between justify-self-center'>
            <button className='z-30 rounded-[3px] text-white bg-black h-[2rem] w-[10.94rem] text-[1.13rem] font-[poppins] font-[500] leading-[0.5rem] py-[0.5rem] px-[0.31rem]'>Book a Call</button>
            <button className='border-[#A1A1AA] border rounded-[3px] h-[2rem] gap-[3px] w-[10.94rem] text-[1.13rem] font-[poppins] font-[500] leading-[0.5rem] py-[0.5rem] px-[0.31rem]'>
              <svg className='inline' width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.87398 5.48905C2.42944 5.8139 1.8042 5.49641 1.8042 4.94583V2.80203C1.8042 2.25145 2.42944 1.93396 2.87398 2.25881L4.34079 3.33071C4.70857 3.59948 4.70857 4.14838 4.34079 4.41715L2.87398 5.48905Z" stroke="#18181B" stroke-width="0.672808" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              See Instagram
            </button>
            <button className='z-20 absolute bg-[#00EBEE] rounded-[3px] left-[6px] top-[6px] w-[10.81rem] h-[1.88rem]'></button>
          </div>
        </div>

        <div className='z-10 absolute justify-self-center top-[11.19rem] w-[24rem] h-[21.25rem]'>
            <div className='relative w-full'>
              <svg className='absolute' width="380" height="384" viewBox="0 0 380 384" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.3" filter="url(#filter0_f_401_683)">
                  <path d="M79.5649 193.629C47.973 139.181 -38.0653 131.845 36.2318 93.6338C110.529 55.423 312.773 136.726 344.364 191.175C375.956 245.623 224.933 252.598 150.636 290.809C76.3391 329.019 111.157 248.078 79.5649 193.629Z" fill="url(#paint0_linear_401_683)"/>
                  </g>
                  <defs>
                  <filter id="filter0_f_401_683" x="-76.2873" y="0.671349" width="508.028" height="383.131" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feGaussianBlur stdDeviation="41.5459" result="effect1_foregroundBlur_401_683"/>
                  </filter>
                  <linearGradient id="paint0_linear_401_683" x1="358.405" y1="215.374" x2="84.7119" y2="324.578" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#6DDCFF"/>
                  <stop offset="1" stop-color="#FF44EC"/>
                  </linearGradient>
                  </defs>
              </svg>

              <svg className='absolute top-[16rem] right-0' width="253" height="84" viewBox="0 0 253 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.999756 72.1826C16.7523 70.6708 32.4349 67.9041 43.8524 46.925C51.234 33.3618 49.7517 14.1213 40.3318 4.84463C31.7449 -3.61166 22.3337 2.49046 17.9428 17.1938C10.9375 40.6514 19.4398 59.9225 32.9605 67.0565C49.7293 75.9045 69.4603 71.9662 85.3848 60.1596C90.2114 56.5811 95.3887 51.133 99.3573 45.1542C101.529 41.8821 106.462 33.8305 106.344 27.8188C106.198 20.4129 96.8245 19.4811 95.3526 31.2841C93.439 43.8636 125.753 53.4843 128.32 53.9151C142.064 56.2223 158.074 55.1706 169.825 41.1932C173.698 36.5858 176.785 31.4659 177.306 23.1587C177.965 12.6661 172.189 6.9258 166.799 6.10285C155.377 4.35861 142.641 17.9073 143.75 39.0961C145.259 67.9208 164.972 82.5777 180.002 82.994C192.183 83.3314 205.905 69.5001 211.412 50.8395C211.599 50.208 213.002 45.3865 210.945 45.76C208.075 46.281 205.42 53.2662 204.921 57.4568C203.149 72.3524 214.305 77.001 220.654 76.0971C231.767 74.5148 242.573 66.6903 253 60.4392" stroke="#FF44EC" stroke-width="0.932243" stroke-linecap="round" stroke-dasharray="5.28 5.28"/>
              </svg>
            </div>

        </div>

    </div>
    </>
  )
}
