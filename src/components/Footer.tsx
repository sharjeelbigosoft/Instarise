import React from 'react'
import logo from './Resources/logo.png'

// import insta from './Resources/Instagram -logo.png'
// import facebook from './Resources/Facebook-logo.png'
// import twitter from './Resources/twitter-logo.png'
// import linkedin from './Resources/Linkedin-logo.png'
// import tiktok from './Resources/Tiktok-logo.png'

export default function Footer() {
  return (
    <>
        <div className='flex justify-center h-[40rem]'>
            {/* Main Centered */}
            <div className=' mt-[14px] py-[1rem]'>
                <div className='w-[24.31]'>
                    <svg width="389" height="2" viewBox="0 0 389 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.157227" y1="1.42676" x2="389" y2="1.42676" stroke="url(#paint0_linear_401_841)"/>
                        <defs>
                        <linearGradient id="paint0_linear_401_841" x1="0.157227" y1="1.92676" x2="0.297694" y2="9.83284" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#6DDCFF"/>
                        <stop offset="1" stop-color="#FF44EC"/>
                        </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* frame 90 */}
                <div className='flex justify-center mt-[2rem]'>
                    <div className='grid gap-[40px] w-[20.6rem]'>
                        {/* frame 85 */}
                        <div className='grid w-[19.13rem] gap-[10px]'>
                            <div className='flex w-[7.8rem] justify-between'>
                                <img className='w-[2.88rem] h-[2.88rem]' src={logo} alt="Instarise" />
                                <p className='uppercase self-center text-[0.63rem] font-[700] font-[poppins]'>instarise</p>
                            </div>
                            <p className='text-[0.88rem] font-[poppins] font-[300] leading-[1.3rem]'>We make you Stand Out in a Crowded Market</p>
                            <p className='font-[poppins] font-[700] text-[0.75rem] leading-[1.13rem]'><strong>Dr. / Li. /In.</strong></p>
                        </div>
                        {/* group 4175 */}
                        <div className='grid gap-[15px] text-[0.88rem]'>
                            <div className='grid gap-[5px]'>
                                <h6 className='font-[poppins] font-[700]'>Work inquiries</h6>
                                <p className='font-[poppins] font-[300]'>Interested in working with us?</p>
                            </div>
                            <div className='grid gap-[5px]'>
                                <p className='font-[poppins] font-[500]'>heyengage.io</p>
                                <p className='font-[poppins] font-[500]'>+120 1220 1210 10</p>
                            </div>
                        </div>
                        {/* group 4174 */}
                        <div className='grid gap-[15px]'>
                            <h6 className='font-[poppins] font-[700] text-[0.94rem]'>Do you want special offers?</h6>
                            <div className='flex justify-between border rounded-[0.5rem] px-[1rem] py-[0.75rem]'>
                                <input className='' placeholder='Your email address' type="email" />
                                <button className='' type="submit">Subscribe</button>
                            </div>
                            <p className='font-[poppins] font-[300] text-[0.88rem]'>This is totally free. We'll only send you coupon codes and special offers</p>
                        </div>
                    </div>
                </div>

                {/* social */}
                <div className='flex justify-center'>
                    <div className='w-[13.25rem] flex justify-between mt-[27px] mb-[21px]'>
                        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="16" cy="16.1387" rx="16" ry="16.1387" fill="#FF44EC"/>
                            <path d="M16.0008 9.7372C18.0679 9.7372 18.3127 9.74501 19.1293 9.78256C19.6203 9.78862 20.1066 9.87956 20.5671 10.0514C20.9011 10.1813 21.2043 10.3803 21.4574 10.6356C21.7105 10.8909 21.9078 11.1968 22.0366 11.5337C22.207 11.9981 22.2971 12.4887 22.3032 12.9839C22.34 13.8076 22.3481 14.0545 22.3481 16.1395C22.3481 18.2245 22.3404 18.4714 22.3032 19.2951C22.2971 19.7903 22.207 20.2809 22.0366 20.7454C21.9078 21.0822 21.7105 21.3881 21.4574 21.6434C21.2043 21.8987 20.9011 22.0977 20.5671 22.2276C20.1066 22.3995 19.6203 22.4904 19.1293 22.4965C18.3131 22.5336 18.0683 22.5418 16.0008 22.5418C13.9334 22.5418 13.6886 22.534 12.8724 22.4965C12.3814 22.4904 11.8951 22.3995 11.4346 22.2276C11.1006 22.0977 10.7973 21.8987 10.5443 21.6434C10.2912 21.3881 10.0939 21.0822 9.96509 20.7454C9.7947 20.2809 9.70455 19.7903 9.69854 19.2951C9.66168 18.4714 9.65357 18.2245 9.65357 16.1395C9.65357 14.0545 9.66131 13.8076 9.69854 12.9839C9.70455 12.4887 9.7947 11.9981 9.96509 11.5337C10.0939 11.1968 10.2912 10.8909 10.5443 10.6356C10.7973 10.3803 11.1006 10.1813 11.4346 10.0514C11.8951 9.87956 12.3814 9.78862 12.8724 9.78256C13.689 9.74538 13.9338 9.7372 16.0008 9.7372ZM16.0008 8.33008C13.8995 8.33008 13.6348 8.339 12.809 8.37693C12.1664 8.38982 11.5307 8.51254 10.9288 8.73987C10.4125 8.93609 9.94481 9.24358 9.55845 9.64088C9.1642 10.0307 8.85909 10.5027 8.66444 11.0238C8.43907 11.6309 8.31741 12.2722 8.30463 12.9203C8.26776 13.7525 8.25891 14.0195 8.25891 16.1391C8.25891 18.2587 8.26776 18.5257 8.30536 19.3587C8.31814 20.0068 8.43981 20.6481 8.66518 21.2552C8.85961 21.7762 9.16447 22.2482 9.55845 22.6381C9.94502 23.0355 10.4129 23.343 10.9295 23.5392C11.5314 23.7665 12.1671 23.8892 12.8097 23.9021C13.6355 23.9393 13.8991 23.9489 16.0016 23.9489C18.1041 23.9489 18.3677 23.94 19.1935 23.9021C19.836 23.8892 20.4718 23.7665 21.0737 23.5392C21.5878 23.3381 22.0547 23.0311 22.4444 22.6377C22.8342 22.2443 23.1383 21.7732 23.3373 21.2544C23.5626 20.6473 23.6843 20.0061 23.6971 19.358C23.7339 18.5257 23.7428 18.2587 23.7428 16.1391C23.7428 14.0195 23.7339 13.7525 23.6963 12.9196C23.6836 12.2714 23.5619 11.6302 23.3365 11.0231C23.1421 10.502 22.8372 10.0301 22.4432 9.64014C22.0567 9.24274 21.5888 8.93525 21.0722 8.73912C20.4703 8.5118 19.8346 8.38908 19.192 8.37619C18.3669 8.339 18.1022 8.33008 16.0008 8.33008Z" fill="white"/>
                            <path d="M16.0024 12.1309C15.2161 12.1309 14.4474 12.3661 13.7936 12.8067C13.1398 13.2473 12.6303 13.8736 12.3294 14.6064C12.0285 15.3391 11.9497 16.1454 12.1031 16.9233C12.2565 17.7012 12.6352 18.4158 13.1912 18.9766C13.7472 19.5374 14.4556 19.9194 15.2268 20.0741C15.998 20.2288 16.7974 20.1494 17.5238 19.8459C18.2503 19.5424 18.8712 19.0284 19.3081 18.3689C19.7449 17.7094 19.9781 16.9341 19.9781 16.141C19.9781 15.0774 19.5592 14.0574 18.8136 13.3054C18.068 12.5534 17.0568 12.1309 16.0024 12.1309ZM16.0024 18.744C15.492 18.744 14.9931 18.5914 14.5687 18.3053C14.1443 18.0193 13.8135 17.6128 13.6182 17.1371C13.4229 16.6615 13.3718 16.1381 13.4713 15.6332C13.5709 15.1282 13.8167 14.6644 14.1776 14.3004C14.5385 13.9363 14.9983 13.6884 15.4989 13.588C15.9995 13.4876 16.5184 13.5391 16.99 13.7361C17.4615 13.9331 17.8646 14.2668 18.1481 14.6948C18.4317 15.1229 18.583 15.6262 18.583 16.141C18.583 16.8314 18.3112 17.4935 17.8272 17.9816C17.3432 18.4698 16.6868 18.744 16.0024 18.744Z" fill="white"/>
                            <path d="M20.1344 12.9084C20.6474 12.9084 21.0634 12.4888 21.0634 11.9713C21.0634 11.4537 20.6474 11.0342 20.1344 11.0342C19.6213 11.0342 19.2053 11.4537 19.2053 11.9713C19.2053 12.4888 19.6213 12.9084 20.1344 12.9084Z" fill="white"/>
                        </svg>
                        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="16" cy="16.1387" rx="16" ry="16.1387" fill="#1E293B"/>
                            <path d="M14.5243 23.4054L14.5243 17.0035H12.3884L12.3884 14.5085H14.5243V12.6686C14.5243 10.5333 15.8172 9.37061 17.7057 9.37061C18.6102 9.37061 19.3877 9.43854 19.6142 9.4689V11.7004L18.3045 11.701C17.2775 11.701 17.0786 12.1932 17.0786 12.9156V14.5085H19.528L19.2091 17.0035H17.0786V23.4054H14.5243Z" fill="white"/>
                        </svg>
                        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="16" cy="16.1387" rx="16" ry="16.1387" fill="#1E293B"/>
                            <path d="M23.0916 12.6612C22.6127 12.8759 22.1072 13.0101 21.5752 13.0906C22.1072 12.7685 22.5329 12.2587 22.7191 11.6415C22.2137 11.9366 21.655 12.1513 21.0431 12.2855C20.5642 11.7756 19.8725 11.4536 19.1275 11.4536C17.6909 11.4536 16.5203 12.6344 16.5203 14.0835C16.5203 14.2982 16.5469 14.486 16.6001 14.6738C14.4451 14.5665 12.503 13.5199 11.1994 11.9098C10.9865 12.3123 10.8535 12.7417 10.8535 13.2247C10.8535 14.1371 11.3058 14.9422 12.0241 15.4252C11.5984 15.3984 11.1994 15.2911 10.8269 15.1032V15.13C10.8269 16.4181 11.7315 17.4915 12.9287 17.7331C12.7158 17.7867 12.4764 17.8136 12.2369 17.8136C12.0773 17.8136 11.8911 17.7867 11.7315 17.7599C12.0773 18.8065 13.0351 19.5847 14.1791 19.5847C13.2745 20.2824 12.1571 20.7118 10.9333 20.7118C10.7205 20.7118 10.5076 20.7118 10.3214 20.6849C11.492 21.4363 12.8488 21.8657 14.3387 21.8657C19.1541 21.8657 21.788 17.8404 21.788 14.3518C21.788 14.2445 21.788 14.1103 21.788 14.003C22.2935 13.6541 22.7458 13.1979 23.0916 12.6612Z" fill="white"/>
                        </svg>
                            <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="16" cy="16.1387" rx="16" ry="16.1387" fill="#1E293B"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6958 8.33008C12.5918 8.33008 9.29016 11.6604 9.29016 15.7999C9.29016 19.099 11.4193 21.9002 14.3507 22.8962C14.7209 22.9584 14.8444 22.7406 14.8444 22.5227C14.8444 22.336 14.8444 21.8691 14.8444 21.2466C12.777 21.7135 12.345 20.2506 12.345 20.2506C12.0055 19.3792 11.5118 19.1613 11.5118 19.1613C10.833 18.6944 11.5736 18.6944 11.5736 18.6944C12.3141 18.7567 12.7152 19.4725 12.7152 19.4725C13.3632 20.6241 14.4432 20.2818 14.8752 20.095C14.9369 19.597 15.1221 19.2858 15.3381 19.099C13.7027 18.9123 11.9747 18.2587 11.9747 15.3953C11.9747 14.586 12.2524 13.9013 12.7461 13.4033C12.6844 13.2166 12.4067 12.4696 12.8078 11.4114C12.8078 11.4114 13.425 11.2246 14.8444 12.1895C15.4306 12.0339 16.0786 11.9405 16.6958 11.9405C17.3129 11.9405 17.9609 12.0339 18.5472 12.1895C19.9666 11.2246 20.5837 11.4114 20.5837 11.4114C20.9848 12.4385 20.738 13.1855 20.6454 13.4033C21.1083 13.9324 21.4168 14.586 21.4168 15.3953C21.4168 18.2587 19.6889 18.8812 18.0226 19.0679C18.3003 19.2858 18.5163 19.7527 18.5163 20.4374C18.5163 21.4334 18.5163 22.2426 18.5163 22.4916C18.5163 22.6783 18.6397 22.9273 19.0409 22.8651C21.9722 21.9002 24.1014 19.099 24.1014 15.7999C24.1014 11.6604 20.7997 8.33008 16.6958 8.33008Z" fill="white"/>
                        </svg>
                    </div>
                </div>

                {/* line */}
                <div className='flex justify-center'>
                    <svg width="263" height="2" viewBox="0 0 263 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.228516" y1="1.14941" x2="262.929" y2="1.14941" stroke="url(#paint0_linear_401_840)"/>
                        <defs>
                        <linearGradient id="paint0_linear_401_840" x1="0.228516" y1="1.64941" x2="0.436354" y2="9.55252" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#6DDCFF"/>
                        <stop offset="1" stop-color="#FF44EC"/>
                        </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* copyright */}
                <div className='flex justify-center my-[1rem] mb-[1rem]'>
                    <p className='w-[11.88rem] text-center text-[0.88rem] font-[poppins] font-[400] leading-[1.25rem] text-[#767676]'>©Instarise 2023, All Rights Reserved by Instarise</p>
                </div>
            </div>
        



        </div>
        {/* <div className='flex flex-wrap justify-center mt-20 max-md:border-teal-400 max-md:border-t'>
            <div className='py-10 max-lg:hidden w-[15%]'></div>
            <div className='md:border-t md:border-teal-400 py-10 md:border-b space-y-4 max-md:w-[80%] md:w-[20%] px-6 text-sm'>
                <div className='flex space-x-2'>
                    <img className='h-8 rounded-lg' src="./logo.jpg" alt="" />
                    <p className='self-center uppercase font-medium text-sm'>instarise</p>
                </div>
                <p>We make you stand out in a crowded market.</p>
                <p className='font-medium'>Dr./Li./In.</p>
            </div>

            <div className='md:border-t md:border-teal-400 max-md:py-0 py-10 md:border-b space-y-4 text-sm max-md:w-[80%] md:w-[20%] px-6'>
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

            <div className='py-10 md:border-t md:border-teal-400 max-md:border-teal-400 max-md:border-b grid justify-items-center max-md:w-[80%] max-md:space-x-4 max-md:justify-center max-md:flex max-lg:w-[10%] lg:w-[15%] max-md:pt-2 px-6'>
                <img className='max-md:w-[15%] md:h-5' src={insta} alt="" />
                <img className='max-md:w-[15%] md:h-5' src={linkedin} alt="" />
                <img className='max-md:w-[15%] md:h-5' src={facebook} alt="" />
                <img className='max-md:w-[15%] md:h-5' src={twitter} alt="" />
                <img className='max-md:w-[15%] md:h-5' src={tiktok} alt="" />
            </div>
        </div>

        <p className='text-center text-xs text-slate-500 mb-6 mt-4'>Instarise 2023. All rights reserved by Instarise.</p> */}
        {/* <div className='flex just'></div> */}
    </>
  )
}
