import React from 'react'
import Image from 'next/image';


const Vahicalmouse = ({title, left, right, img }) => {
  return (
    <div className="vahical w-full h-72 fixed flex top-0 left-0 right-0">
          <div className="left bg-white w-2/3 flex    ">
          <div className=" flex flex-col justify-center text-center mt-52 ml-10   ">
           <div className=" flex justify-center">
            <Image
            src = {img}
            alt='models'
            height={250}  
            className='justify-center'       

            /></div>
            <h1 className='text-4xl'>{title}</h1>
           <div className=" flex justify-center text-2xl mt-3 button gap-5">
            <span>{left}</span>
            <span>{right}</span>
           </div>           
          </div>

          
          
          </div>
          <div className="right bg-slate-100 w-1/3 ">right</div>
        </div>
        
    
  
  )
}

export default Vahicalmouse
