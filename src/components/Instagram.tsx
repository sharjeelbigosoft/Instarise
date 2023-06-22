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
            <h3 className='font-medium text-3xl lg:w-1/3 text-center'>Switch to <span>Instarise</span>. See the impact.</h3>
        </div>
        <div className='flex justify-center w-full my-16'>
            <div className='flex w-5/12'>
                <div className='flex w-full'>
                    <img className='mr-20 rounded-full lg:h-48 self-center' src={logo} alt="Logo" />
                </div>
                <div className=''>
                    <div className='flex'>
                        <h6 className='font-medium text-lg mr-6'>instarise.io</h6>
                        <button className='font-medium bg-gray-200 rounded-lg px-4 py-1 mx-1'>Following</button>
                        <button className='font-medium bg-gray-200 rounded-lg px-4 py-1 mx-1'>Message</button>
                    </div>
                    <div className='flex lg:my-4'>
                        <h6 className='font-medium '><span className='font-medium text-lg'>60</span> posts</h6>
                        <h6 className='font-medium lg:mx-6'><span className='font-medium text-lg'>3535</span> followers</h6>
                        <h6 className='font-medium '><span className='font-medium text-lg'>6</span> following</h6>
                    </div>
                    <h5 className='uppercase font-semibold'>new account</h5>
                    <p className='text-sm'>We help creative entrepreneurs figure out #socialmedia effectively.</p>
                    <p className='text-sm'>Branding</p>
                    <p className='text-sm'>Ads that convert</p>
                    <p className='text-sm'>Tell your story</p>
                    <p className='text-sm'>Influenser | Marketing | Campaigns</p>
                    <p className='text-sm font-semibold text-blue-800'>www.instarise.com</p>
                </div>
            </div>
        </div>
        <div className='flex justify-center'>
            <div className='lg:w-7/12 border border-blue-800'></div>
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
