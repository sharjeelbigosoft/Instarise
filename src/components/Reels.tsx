import React from 'react'
import reel from './reel.jpg'
export default function Reels() {
  return (
    <>
        <div className='flex justify-center mb-16'>
            <div className='rounded-xl lg:w-1/5 border-slate-200 border-2'>
                <img className='border rounded-xl' src={reel} alt="" />
                <div className='flex justify-around'>
                    <div className=''>
                        <h6 className='font-medium text-lg'>180%</h6>
                        <p className='text-lg'>increase</p>
                        <p className='text-xs'>in gross sales</p>
                    </div>
                    <div className=''>
                        <h6 className='font-medium text-lg'>70%</h6>
                        <p className='text-lg'>increase</p>
                        <p className='text-xs'>in gross sales</p>
                    </div>
                    <div className=''>
                        <h6 className='font-medium text-lg'>151%</h6>
                        <p className='text-lg'>increase</p>
                        <p className='text-xs'>in gross sales</p>
                    </div>
                </div>
                <div className='flex justify-center my-4'>
                    <button className='border rounded-lg border-slate-500 py-2 px-6 font-medium'>This could be you</button>
                </div>
            </div>
            <div className='rounded-xl lg:w-1/5 mx-10 border-slate-200 border-2'>
                <img className='border rounded-xl' src={reel} alt="" />
                <div className='flex justify-around'>
                    <div className=''>
                        <h6 className='font-medium text-lg'>180%</h6>
                        <p className='text-lg'>increase</p>
                        <p className='text-xs'>in gross sales</p>
                    </div>
                    <div className=''>
                        <h6 className='font-medium text-lg'>70%</h6>
                        <p className='text-lg'>increase</p>
                        <p className='text-xs'>in gross sales</p>
                    </div>
                    <div className=''>
                        <h6 className='font-medium text-lg'>151%</h6>
                        <p className='text-lg'>increase</p>
                        <p className='text-xs'>in gross sales</p>
                    </div>
                </div>
                <div className='flex justify-center my-4'>
                    <button className='border rounded-lg border-slate-500 py-2 px-6 font-medium'>This could be you</button>
                </div>
            </div>
            <div className='rounded-xl lg:w-1/5 border-slate-200 border-2'>
                <img className='border rounded-xl' src={reel} alt="" />
                <div className='flex justify-around'>
                    <div className=''>
                        <h6 className='font-medium text-lg'>180%</h6>
                        <p className='text-lg'>increase</p>
                        <p className='text-xs'>in gross sales</p>
                    </div>
                    <div className=''>
                        <h6 className='font-medium text-lg'>70%</h6>
                        <p className='text-lg'>increase</p>
                        <p className='text-xs'>in gross sales</p>
                    </div>
                    <div className=''>
                        <h6 className='font-medium text-lg'>151%</h6>
                        <p className='text-lg'>increase</p>
                        <p className='text-xs'>in gross sales</p>
                    </div>
                </div>
                <div className='flex justify-center my-4'>
                    <button className='border rounded-lg border-slate-500 py-2 px-6 font-medium'>This could be you</button>
                </div>
            </div>
        </div>
    </>
  )
}
