import React from 'react'
import Image from 'next/image';


const MainLeft = ({title, left, right, img }) => {
 
  return (
          <div className=" flex flex-col ml-6 ">
           <div className="hidden md:flex justify-center">
            <Image
            src = {img}
            alt='models'
            height={300 }
            width={200}
            className='justify-center '        

            /></div>
             <div className=" justify-center flex flex-col md:hidden">
            <Image
            src = {img}
            alt='models'
            height={100 }
            width={80}
            className='justify-center '        

            /></div>
            <h1 className='md:text-2xl text-sm text-black text-center'>{title}</h1>
           <div className=" flex justify-center text-xs md:text-xl mt-1 button gap-5 underline
            ">
            <span className='cursor-pointer' >{left}</span>
            <span className='cursor-pointer' >{right}</span>
           </div>           
          </div>
  )
}

export default MainLeft
