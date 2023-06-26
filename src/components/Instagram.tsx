import React from 'react'
import logo from './logo.jpg'
import Posts from './Posts.tsx'
import Reels from './Reels.tsx';
import Guides from './Guides.tsx';

export default function Instagram() {
    const [show, setShow]=React.useState('Posts');
    // React.useEffect(()=>{
    //     console.log(show)
    // }, [show])
  return (
    <>
        <div className='flex justify-center'>
            <h3 className='font-medium text-3xl max-md:text-xl lg:w-1/3 text-center'>Switch to <span>Instarise</span>. See the impact.</h3>
        </div>
        <div className='flex justify-center w-full lg:my-16 max-lg:my-6'>
            <div className='flex xl:w-5/12 max-md:space-x-4 max-md:px-1'>
                <div className='flex w-full'>
                    <img className=' rounded-full xl:h-[70%] self-center' src={logo} alt="Logo" />
                </div>
                <div className=''>
                    <div className='flex'>
                        <h6 className='font-medium text-lg max-md:text-base mr-6'>instarise.io</h6>
                        <button className='max-md:text-sm font-medium bg-gray-200 rounded-lg px-4 py-1 mx-1'>Following</button>
                        <button className='max-md:text-sm font-medium bg-gray-200 rounded-lg px-4 py-1 mx-1'>Message</button>
                    </div>
                    <div className='flex lg:my-4 justify-between w-[95%]'>
                        <h6 className='max-md:text-sm font-medium '><span className='max-md:font-semibold max-md:text-base md:font-medium md:text-lg'>60</span> posts</h6>
                        <h6 className='max-md:text-sm font-medium lg:mx-6'><span className='max-md:font-semibold max-md:text-base md:font-medium md:text-lg'>3535</span> followers</h6>
                        <h6 className='max-md:text-sm font-medium '><span className='max-md:font-semibold max-md:text-base md:font-medium md:text-lg'>6</span> following</h6>
                    </div>
                    <h5 className='uppercase font-semibold max-md:text-sm'>new account</h5>
                    <p className='md:text-sm max-md:text-xs'>We help creative entrepreneurs figure out #socialmedia effectively.</p>
                    <p className='md:text-sm max-md:text-xs'>Branding</p>
                    <p className='md:text-sm max-md:text-xs'>Ads that convert</p>
                    <p className='md:text-sm max-md:text-xs'>Tell your story</p>
                    <p className='md:text-sm max-md:text-xs'>Influenser | Marketing | Campaigns</p>
                    <a className='md:text-sm max-md:text-xs font-semibold text-blue-800' onClick={e=>e.preventDefault()} href="/">www.instarise.com</a>
                    {/* <p className='md:text-sm max-md:text-xs font-semibold text-blue-800'>www.instarise.com</p> */}
                </div>
            </div>
        </div>
        <div className='flex justify-center'>
            <div className='lg:w-7/12 max-lg:w-[95%] lg:border max-lg:border-b border-blue-800'></div>
        </div>
        <div className='flex justify-center'>
            <button onClick={e=>{
                e.preventDefault();
                setShow(show=>"Posts");
            }} className='uppercase text-2xl font-semibold py-2'>Posts</button>
            <button onClick={e=>{
                e.preventDefault();
                setShow(show=>"Reels");
            }} className='uppercase text-2xl font-semibold py-2 mx-10'>Reels</button>
            <button onClick={e=>{
                e.preventDefault();
                setShow(show=>"Guides");
            }} className='uppercase text-2xl font-semibold py-2'>Guides</button>
        </div>
        {show==='Posts'?<Posts/>:show==="Reels"?<Reels/>:<Guides/>}
    </>
  )
}
