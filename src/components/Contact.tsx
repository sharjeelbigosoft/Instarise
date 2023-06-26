import React from 'react'

export default function Contact() {
  return (
    <>
        <div className='flex justify-center my-16'>
          <div className=' lg:w-10/12 flex'>

            <div className='lg:w-1/2 px-4 space-y-4'>
              <h3 className='text-3xl font-medium'>Let's level up your social reach, together<span className='text-pink-500'>!</span></h3>
              <p className='font-light text-gray-500'>You can reach us anytime via <a className='text-blue-700' href="/">Instarise</a></p>
              <form className='flex flex-wrap justify-between text-sm space-y-5' action="#">
                <div className='grid lg:w-[45%]'>
                  <label className='' htmlFor="name">Name</label>
                  <input className=' p-2 border border-slate-400 rounded' id='name' placeholder='Your name' type="text" />
                </div>
                <div className='grid lg:w-[45%]'>
                  <label className='' htmlFor="email">Email</label>
                  <input className='p-2 border border-slate-400 rounded' id='email' placeholder='Work email' type="email" />
                </div>
                <div className='grid lg:w-[45%]'>
                  <label className='' htmlFor="company">Company</label>
                  <input className='p-2 border border-slate-400 rounded' id='company' placeholder='Company name' type="text" />
                </div>
                <div className='grid lg:w-[45%]'>
                  <label className='' htmlFor="website">Website (optional)</label>
                  <input className='p-2 border border-slate-400 rounded' id='website' placeholder='Current website, if one exists.' type="email" />
                </div>
                <div className='grid lg:w-[45%]'>
                  <label className='' htmlFor="phone">Phone number</label>
                  <input className='p-2 border border-slate-400 rounded' id='phone' placeholder='090078601' type="tel" />
                </div>
                <div className='grid lg:w-[45%]'>
                  <label className='' htmlFor="time">Time for a call (optional)</label>
                  <input className='p-2 border border-slate-400 rounded' id='time' placeholder='What time can we call you?' type="datetime-local" />
                </div>
                <div className='grid lg:w-full'>
                  <label className='' htmlFor="project">How can we help?</label>
                  <textarea className='p-2 border border-slate-400 rounded' id='project' name="project" rows={4} placeholder="Tell us a little about the project..."></textarea>
                </div>
                <button className='w-full bg-black py-1.5 rounded text-white' type="submit">Get started</button>
              </form>
            </div>

            <div className='lg:w-1/2 self-center px-4 space-y-4'>
              <h3 className='font-medium text-xl'>Directly schedule a Meeting</h3>
              <p className='font-extralight'>Want to skip the boring form? <span>We don't blame you!</span></p>
              <p className='font-extralight'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus rem minus molestias nisi, soluta voluptate praesentium vitae sed, quos corrupti architecto sapiente sequi. Numquam, sunt. Maiores ex officia animi odio.</p>
              <p className='font-extralight'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus rem minus molestias nisi, soluta voluptate praesentium vitae sed, quos corrupti architecto sapiente sequi. Numquam, sunt. Maiores ex officia animi odio.</p>
              <button className='w-full bg-blue-700 rounded-sm'>Schedule a Meeting</button>
              <p className='font-extralight'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident minus quis possimus eveniet numquam laudantium non est quam similique voluptates, porro totam asperiores nesciunt labore ab explicabo ea aspernatur culpa.</p>
              <p className='font-extralight'>Just give a call at <span className='font-medium'>090078601</span></p>
            </div>

          </div>
        </div>
    </>
  )
}
