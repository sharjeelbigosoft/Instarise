import React from 'react'

export default function Pricing() {
  return (
    <>
      <div className='grid justify-items-center my-24'>
        <h3 className='text-2xl font-semibold'>Pricing</h3>
        <h3 className='text-2xl font-semibold'>Made <span className='text-pink-500'>Super</span> Simple</h3>
        <div className='flex w-full my-10'>

          <div className='lg:w-1/5 px-6 py-6'></div>

          <div className='relative lg:w-1/5 px-6 py-6 h-[120%] space-y-3'>
            <div className='space-y-3 lg:h-2/5 border-b border-slate-400'>
              <h2>Micro</h2>
              <p className='lg:text-5xl'>$399<span className='lg:text-sm'> /month</span></p>
              <p>Not sure how to start?</p>
            </div>
            <p>8 Post per month | 1 Platform</p>
            <p>5 Stories per month</p>
            <p>Project Manager</p>
            <p>Jr. Creative designer</p>
            <button className='px-4 border border-purple-400 rounded-lg hover:text-white hover:bg-purple-400pb-4  py-2 absolute bottom-1.5' >Book a Call</button>
          </div>

          <div className='relative lg:w-1/5 px-6 py-6 h-[120%] space-y-3'>
            <div className='space-y-3 lg:h-2/5 border-b border-slate-400'>
              <h2>Personal</h2>
              <p className='lg:text-5xl'>$749<span className='lg:text-sm'> /month</span></p>
              <p>Everything you need to maintain & boost your brand</p>
            </div>
            <div className=' space-y-3'>
              <p>15 Post per month | 1 Platform</p>
              <p>12 Stories per month</p>
              <p>Project M. & Social Media M.</p>
              <p>Basic Strategy | Hashtag | SEO</p>
              <p>Jr. Creative designer</p>
            </div>
            <button className='px-4 border border-purple-400 rounded-lg hover:text-white hover:bg-purple-400pb-4  py-2 absolute bottom-1.5' >Book a Call</button>
          </div>

          <div className='relative lg:w-1/5 px-6 py-6 h-[120%] space-y-3'>
            <div className='space-y-3 lg:h-2/5 border-b border-slate-400'>
              <h2>Business</h2>
              <p className='lg:text-5xl'>$1499<span className='lg:text-sm'> /month</span></p>
              <p>This is where we start to get serious. This plan gets you to the point where you can scale</p>
            </div>
            <p>34 Post per month | 2 Platforms</p>
            <p>19 Stories per month</p>
            <p>Jr. Creative Team</p>
            <p>Basic Strategy | Hashtag | SEO</p>
            <p>Branding Strategy (Basic)</p>
            <p>Boost Incl</p>
            <button className='px-4 border border-purple-400 rounded-lg hover:text-white hover:bg-purple-400pb-4  py-2 absolute bottom-1.5' >Get 3 Days free Trial</button>
          </div>

          <div className='lg:w-1/5 px-6 py-6'></div>
        </div>
      </div>
    </>
  )
}
