import React from 'react'

export default function Performance() {
  return (
    <>
        <div className='flex md:justify-center max-md:justify-between'>
            <div className='lg:w-1/5 max-lg:w-3/12 max-md:w-[30%] md:p-10 max-md:px-4'>
                <h3 className='md:font-medium max-md:font-semibold md:text-5xl max-md:text-3xl pb-4'>96%</h3>
                <h4 className='md:w-4/5 max-md:text-xs'>Those who view product/service videos are 96% more likely to buy</h4>
            </div>
            <div className='lg:w-1/5 max-lg:w-3/12 max-md:w-[30%] md:p-10 max-md:px-4 border-r-2 border-l-2'>
                <h3 className='md:font-medium max-md:font-semibold md:text-5xl max-md:text-3xl pb-4'>#1</h3>
                <h4 className='md:w-4/5 max-md:text-xs'>Rated #1 in agencies who help small businesses grow. Among the worlds top 3%</h4>
            </div>
            <div className='lg:w-1/4 max-lg:w-4/12 max-md:w-[40%] md:p-10 max-md:px-4'>
                <h3 className='md:font-medium max-md:font-semibold md:text-5xl max-md:text-3xl pb-4'>78%</h3>
                <h4 className='md:w-4/5 max-md:text-xs'>78% of small businesses don't have the money to compete with big business top-tier talent. 90% of them don't know where to start...</h4>
            </div>
        </div>
    </>
  )
}
