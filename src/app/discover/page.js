import React from 'react'
import Mainright from '../mainright/page'

const Discover = () => {
  return (
    <div>
      <div className="mainn md:flex absolute gap-16 justify-center top-0  w-full">
        <div className="mouse flex flex-col  md:mb-10  mt-32 align-top    justify-center  ">
        <h1 className=' text-sm align-center hidden md:flex mr-10  justify-center mb-2 text-blue-300  '>Resources</h1>
        <ul className='  '>
            <li className='cursor-pointer text-sm hover:underline p-3 text-black'>Demo Drive</li>
            <li className='cursor-pointer text-sm hover:underline p-3 text-black'>Insorance</li>
            <li className='cursor-pointer text-sm hover:underline p-3 text-black'>Video Guides</li>
            <li className='cursor-pointer text-sm hover:underline p-3 text-black'>Custumer Stories</li>
            <li className='cursor-pointer text-sm hover:underline p-3 text-black'>Events</li>
        </ul> 
        </div>
        <div className="mouse flex flex-col md:mb-10 md:mt-32 align-top ">
        <h1 className=' text-sm align-center hidden md:flex mr-10 justify-center mb-2 text-blue-300 '>Location Services</h1>
        <ul className='  '>
            <li className='cursor-pointer text-sm hover:underline p-3 text-black'>Find Us</li>
            <li className='cursor-pointer text-sm hover:underline p-3 text-black'>Trip Planner</li>
            <li className='cursor-pointer text-sm hover:underline p-3 text-black'>FInd a Collision Center</li>
            <li className='cursor-pointer text-sm hover:underline p-3 text-black'>FInd a Certified installer</li>
        </ul> 
        </div>
        <div className="mouse flex flex-col md:mb-10 md:mt-32   ">
        <h1 className=' text-sm align-center hidden mr-14  md:flex justify-center mb-2 text-blue-300 '>Company</h1>
        <ul className='  '>
            <li className='cursor-pointer text-sm hover:underline p-3 text-black'>About</li>
            <li className='cursor-pointer text-sm hover:underline p-3 text-black'>Careers</li>
            <li className='cursor-pointer text-sm hover:underline p-3 text-black'>Investor Relations</li>
        </ul> 
        </div>
        </div> 
     <Mainright 
     />

</div>
   
  )
}

export default Discover
