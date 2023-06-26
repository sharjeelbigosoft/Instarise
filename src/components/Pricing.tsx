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
            <button className='w-[80%] px-4 border border-purple-400 rounded-lg hover:text-white hover:bg-purple-400 py-2 absolute bottom-1.5' >Book a Call</button>
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
            <button className='w-[80%] px-4 border border-purple-400 rounded-lg hover:text-white hover:bg-purple-400 py-2 absolute bottom-1.5' >Book a Call</button>
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
            <button className='w-[80%] px-4 border border-purple-400 rounded-lg hover:text-white hover:bg-purple-400 py-2 absolute bottom-1.5' >Get 3 Days free Trial</button>
          </div>

          <div className='lg:w-1/5 px-6 py-6'></div>
        </div>
      </div>


      <div className='display flex justify-center my-6'>
        <div className='w-3/5'>
          <h3 className='font-medium text-lg'>Customize your plan with perks that make a difference</h3>
          <div className='w-full flex justify-between p-10 border border-black '>
            <div>
              <p className='font-medium'>Time to Scale!</p>
              <p className='font-medium'>From <span className='text-5xl'>$3,799</span> /month</p>
            </div>
            <div className='w-7/12'>
              <p className=''>For fast-moving businesses in need of a design & marketing team to scale-up even faster.</p>
              <div className='flex justify-center'>
                {/* Logos */}
                <div>

                </div>
                <ul className='list-disc '>
                  <li>Social Media</li>
                  <li>Website</li>
                  <li>SEO</li>
                  <li>FB Ads | Google Ads</li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center my-10'>
        <div className='w-3/5 flex justify-around'>
          <div className='w-1/3 px-6 space-y-2'>
            <h4 className='font-medium'>Coordinate each step</h4>
            <p className='text-sm text-slate-500'>The annual cost of a full-time, top quality designer now exceeds $84,000. Subscribe for less than a fraction of this!</p>
          </div>
          <ul className='w-1/3 px-6 space-y-2 text-sm font-medium list-image-{url(https://vhv.rs/dpng/d/409-4094705_blue-tick-png-transparent-png-blue-tick-white.png)}'>
            <li>UGC videos</li>
            <li>Brand Identity</li>
            <li>Attractive UI/UX</li>
            <li>Packaging Design</li>
            <li>Organic & Paid Growth</li>
          </ul>
          <ul className='w-1/3 px-6 space-y-2 text-sm font-medium list-image-{url(htvhttps://.rs/dpng/d/409-4094705_blue-tick-png-transparent-png-blue-tick-white.png)}'>
            <li>$1.80 Community Engagement</li>
            <li>Video Editing</li>
            <li>Content Creation</li>
            <li>Unboxing Videos</li>
            <li>Product Model Production</li>
          </ul>
        </div>
      </div>
    </> 
  )
}
