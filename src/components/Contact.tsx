import React from 'react'

export default function Contact() {
  return (
    <>
      <div className='flex items-center flex-col md:flex-row justify-center gap-[1.25rem]'>
        <div className="gap-[24px]">
          <div className='grid gap-[50px]'>
            {/* form headline */}
            <div className='w-[22.88rem]'>
              <h6 className='text-[2.19rem] font-[lato] font-[500] leadig-[3.75rem]'>Let's level up your social reach, together<h6 className='text-[#FF44EC] font-[inter] inline'>!</h6></h6>
              <p className='font-[poppins] font-[500] text-[1rem] leading-[1.88rem] text-[#606060]'>You can reach us anytime via <p className='font-[inter] font-[400] text-[1rem] leading-[1.88rem] inline text-[#005FEE]'>Instarise</p></p>
            </div>
            {/* form */}
            <form className='w-[21.94] grid gap-[1.5rem]'>
              <div className='w-[20.63] grid'>
                <label className='text-[#535353] font-[poppins] font-[500] leading-[1.25rem] text-[0.88rem]' htmlFor="name">Name</label>
                <input className='text-[#667085] mt-[6px] px-[1rem] py-[0.75rem] border border-[#D0D5DD] rounded-[0.5rem]' id='name' placeholder='Your name' type="text" />
              </div>
              <div className='w-[20.63] grid'>
                <label className='text-[#535353] font-[poppins] font-[500] leading-[1.25rem] text-[0.88rem]' htmlFor="email">Email</label>
                <input className='text-[#667085] mt-[6px] px-[1rem] py-[0.75rem] border border-[#D0D5DD] rounded-[0.5rem]' id='email' placeholder='Work email' type="email" />
              </div>
              <div className='w-[20.63] grid'>
                <label className='text-[#535353] font-[poppins] font-[500] leading-[1.25rem] text-[0.88rem]' htmlFor="company">Company</label>
                <input className='text-[#667085] mt-[6px] px-[1rem] py-[0.75rem] border border-[#D0D5DD] rounded-[0.5rem]' id='company' placeholder='Company name' type="text" />
              </div>
              <div className='w-[20.63] grid'>
                <label className='text-[#535353] font-[poppins] font-[500] leading-[1.25rem] text-[0.88rem]' htmlFor="website">Website (optional)</label>
                <input className='text-[#667085] mt-[6px] px-[1rem] py-[0.75rem] border border-[#D0D5DD] rounded-[0.5rem]' id='website' placeholder='Current website, if one exists.' type="email" />
              </div>
              <div className='w-[20.63] grid'>
                <label className='text-[#535353] font-[poppins] font-[500] leading-[1.25rem] text-[0.88rem]' htmlFor="phone">Phone number</label>
                <input className='text-[#667085] mt-[6px] px-[1rem] py-[0.75rem] border border-[#D0D5DD] rounded-[0.5rem]' id='phone' placeholder='090078601' type="tel" />
              </div>
              <div className='w-[20.63] grid'>
                <label className='text-[#535353] font-[poppins] font-[500] leading-[1.25rem] text-[0.88rem]' htmlFor="time">Time for a call (optional)</label>
                <input className='text-[#667085] mt-[6px] px-[1rem] py-[0.75rem] border border-[#D0D5DD] rounded-[0.5rem]' id='time' placeholder='What time can we call you?' type="datetime-local" />
              </div>
              <div className='w-[20.63] grid'>
                <label className='text-[#535353] font-[poppins] font-[500] leading-[1.25rem] text-[0.88rem]' htmlFor="project">How can we help?</label>
                <textarea className='text-[#667085] mt-[6px] px-[1rem] py-[0.75rem] border border-[#D0D5DD] rounded-[0.5rem]' id='project' name="project" rows={4} placeholder="Tell us a little about the project..."></textarea>
              </div>
              <div className='w-full flex justify-center h-[3rem] mt-[2.5rem]'>
                <div className='w-[20rem] relative'>
                  <div className='absolute rounded-[0.5rem] bg-[#00EBEE] w-full h-[3rem] py-[0.75rem] px-[1.25rem] top-[5px] left-[5px]'></div>
                  <button className='absolute rounded-[0.5rem] bg-black text-white w-full py-[0.75rem] px-[1.25rem]' type="submit">Get started</button>
                </div>
              </div>
            </form>
          </div>
        </div>


        {/* contact info */}
        <div className="w-[23.25rem]">
          {/* frame 33 */}
          <div className='flex flex-col gap-[1.25rem]'>
            <h6 className='font-[500] font-[lato] text-[1.63rem] leading-[2.5rem]'>Directly schedule a Meeting</h6>
            <div className='font-[poppins] font-[300] text-[1.13rem] text-[#555555]'>
              <p className='leading-[1.69rem]'>Want to skip the boring form?<p className='font-[400] text-black'>We don't blame you!</p></p>
              <br />
              <p className='leading-[1.69rem]'>Schedule a single very quick 15-minute meeting with us to talk about your project and get a 100% free prototype strategy without any risk!</p>
              <br />
              <p className='leading-[1.69rem]'>We'll only ask you a few questions to get started. It's quick, easy, and a fun way to jumpstart your project!</p>
            </div>
          </div>
          {/* actions */}
          <div className='w-[full] my-[1.88rem]'>
            <button className='w-full py-[0.75rem] px-[1.25rem] bg-[#005FEE] text-white rounded-[0.5rem] font-[poppins] font-[700] leading-[1.5rem] text-[1.62rem]'>Schedule a Meeting</button>
          </div>
          {/* text */}
          <div className='font-[poppins] font-[300] text-[1.13rem] text-[#555555]'>
            <p className='leading-[1.88rem]'>You can't wait any longer for a good design agency and want to get in touch with us ASAP? <p className='inline text-[#FF44EC]'>Awesome!</p></p>
            <p className='leading-[1.88rem]'>Just give us a call</p>
            <br />
            <p className='leading-[1.88rem] font-[300] text-black'>+1 (567) 386 3155!</p>
          </div>
        </div>
      </div>
        {/* <div className='flex justify-center'>
          <div className='max-lg:w-11/12 lg:w-10/12 flex flex-wrap'>

            <div className='lg:w-1/2 px-4 space-y-4  max-lg:my-4'>
              <h3 className='text-3xl font-medium'>Let's level up your social reach, together<span className='text-pink-500'>!</span></h3>
              <p className='font-light text-gray-500'>You can reach us anytime via <a className='text-blue-700' href="/">Instarise</a></p>
              <form className='flex flex-wrap justify-between text-sm space-y-5' action="#">
                <div className='grid max-md:w-full max-lg:w-[40%] lg:w-[45%] mt-5'>
                  <label className='' htmlFor="name">Name</label>
                  <input className='p-2 border border-slate-400 rounded' id='name' placeholder='Your name' type="text" />
                </div>
                <div className='grid max-md:w-full max-lg:w-[40%] lg:w-[45%]'>
                  <label className='' htmlFor="email">Email</label>
                  <input className='p-2 border border-slate-400 rounded' id='email' placeholder='Work email' type="email" />
                </div>
                <div className='grid max-md:w-full max-lg:w-[40%] lg:w-[45%]'>
                  <label className='' htmlFor="company">Company</label>
                  <input className='p-2 border border-slate-400 rounded' id='company' placeholder='Company name' type="text" />
                </div>
                <div className='grid max-md:w-full max-lg:w-[40%] lg:w-[45%]'>
                  <label className='' htmlFor="website">Website (optional)</label>
                  <input className='p-2 border border-slate-400 rounded' id='website' placeholder='Current website, if one exists.' type="email" />
                </div>
                <div className='grid max-md:w-full max-lg:w-[40%] lg:w-[45%]'>
                  <label className='' htmlFor="phone">Phone number</label>
                  <input className='p-2 border border-slate-400 rounded' id='phone' placeholder='090078601' type="tel" />
                </div>
                <div className='grid max-md:w-full max-lg:w-[40%] lg:w-[45%]'>
                  <label className='' htmlFor="time">Time for a call (optional)</label>
                  <input className='p-2 border border-slate-400 rounded' id='time' placeholder='What time can we call you?' type="datetime-local" />
                </div>
                <div className='grid w-full'>
                  <label className='' htmlFor="project">How can we help?</label>
                  <textarea className='p-2 border border-slate-400 rounded' id='project' name="project" rows={4} placeholder="Tell us a little about the project..."></textarea>
                </div>
                <button className='w-full text-base bg-black md:py-1 rounded font-semibold text-white max-md:py-2.5' type="submit">Get started</button>
              </form>
            </div>

            <div className='lg:w-1/2 self-center px-4 space-y-4 max-lg:my-4'>
              <h3 className='font-medium text-xl'>Directly schedule a Meeting</h3>
              <p className='font-extralight'>Want to skip the boring form? <span>We don't blame you!</span></p>
              <p className='font-extralight'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus rem minus molestias nisi, soluta voluptate praesentium vitae sed, quos corrupti architecto sapiente sequi. Numquam, sunt. Maiores ex officia animi odio.</p>
              <p className='font-extralight'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus rem minus molestias nisi, soluta voluptate praesentium vitae sed, quos corrupti architecto sapiente sequi. Numquam, sunt. Maiores ex officia animi odio.</p>
              <button className='w-full text-base bg-blue-700 md:py-1 rounded font-semibold text-white max-md:py-2.5'>Schedule a Meeting</button>
              <p className='font-extralight'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident minus quis possimus eveniet numquam laudantium non est quam similique voluptates, porro totam asperiores nesciunt labore ab explicabo ea aspernatur culpa.</p>
              <p className='font-extralight'>Just give a call at <span className='font-medium'>090078601</span></p>
            </div>

          </div>
        </div> */}
    </>
  )
}
