"use client"
import React from 'react'
import { IoIosGlobe } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { useState } from 'react';
import Energys from '../energy/page';
import Vahical from '../vahical/page';
import Charging from '../charging/page';
import Shop from '../shop/page';
import Discover from '../discover/page';
import Link from 'next/link';
import { IoMdClose } from "react-icons/io";






const Hadear = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [energy, setEnergy] = useState(false);
  const [charging, setCharging] = useState(false);
  const [shop, setShop] = useState(false);
  const [discover, setDiscover] = useState(false);
  const [manuOpen,  setManuOpen] = useState(false);
  const [showEnergy,  setShowEnergy] = useState(false);



  return (
   <div className='flex flex-col'>

   
        <navbar className={` w-full fixed top-0 left-0 justify-between text-2xl  z-10 ${manuOpen ? "" : ""}`} >
            <div className={`nav w-full fixeds   flex ${manuOpen ? "flex-col w-screen top-0 min-h-screen  h-full " : "justify-between"} ${showEnergy ? "bg-transparent" : "bg-slate-100"}`}>
      <Link href= '/'>  <div className={`leftnav fixed mt-2 ml-5 cursor-pointer ${ manuOpen ? "hidden" : "flex"}`}>
       Tesla

       </div></Link>       
      

            
        
        <div>
            <ul className= {` md:flex md:z-auto z-[-1] sm:hidden ${ manuOpen ? "flex-col mt-16   ml-2  " : "hidden" } ${showEnergy ? "hidden" : "flex"} `} >
                <li className='cursor-pointer hover:bg-slate-100 rounded-lg p-3 ' onMouseEnter={()=> setIsHovering(true)} onMouseLeave={()=> setIsHovering(false)} onClick={()=> setShowEnergy(true)} >Vehicles  </li>
                <li className='cursor-pointer hover:bg-slate-100 rounded-lg p-3 ' onMouseEnter={()=> setEnergy(true)} onMouseLeave={()=> setEnergy(false)} onClick={()=> setShowEnergy(true)} >Energy  </li>
                <li className='cursor-pointer hover:bg-slate-100 rounded-lg p-3 ' onMouseEnter={()=> setCharging(true)} onMouseLeave={()=> setCharging(false)} onClick={()=> setShowEnergy(true)}>Charging  </li>
                <li className='cursor-pointer hover:bg-slate-100 rounded-lg p-3 ' onMouseEnter={()=> setDiscover(true)} onMouseLeave={()=> setDiscover(false)} onClick={()=> setShowEnergy(true)}>Discover  </li>
                <li className='cursor-pointer hover:bg-slate-100 rounded-lg p-3 ' onMouseEnter={()=> setShop(true)} onMouseLeave={()=> setShop(false)} onClick={()=> setShowEnergy(true)}>Shop  </li>
            </ul>
            </div>
       
        <div>
            <ul className= {` md:flex  pb-12 w-full mr-5 ${manuOpen ? "flex-col" : "hidden"}  ${showEnergy ? "hidden" : "flex"} `}>
                
            <li className='hover:bg-slate-400 hover:rounded p-3   text-3xl cursor-pointer'><span className='md:hidden pl-2 text-xl' >Support</span><span className='hidden md:flex'><IoIosHelpCircleOutline /></span></li>
            <li className='hover:bg-slate-400 hover:rounded p-3   text-3xl cursor-pointer flex'><span><IoIosGlobe /></span><div className='md:hidden flex flex-col text-xl pl-3 ' ><span>United States</span><span className='text-sm'>English</span></div></li>
            <li className='hover:bg-slate-400 hover:rounded p-3   mt-1 text-2xl cursor-pointer flex '><span><FaRegUserCircle /></span><span className='md:hidden text-xl pl-3' >Acount</span></li>
           
           </ul>
           </div>
           <button onClick={() => setManuOpen(true)} className={`md:hidden xs:flex mt-2 right-0 absolute border hover:bg-slate-400 mr-5 ${manuOpen ? "hidden" : "flex"} `} >Manu</button>
           <button onClick={() => setShowEnergy(false) & setManuOpen(false)  }    className={`md:hidden p-2 mr-5 right-0 top-5  border hover:bg-slate-400  ${manuOpen ? "absolute z-40 " : "hidden"}  `} >Close</button>
           <button onClick={() => setShowEnergy(false) }    className={`md:hidden p-2 pl-10 left-0 top-5 ml-5  border hover:bg-slate-400   ${showEnergy ? "absolute z-40" : "hidden"}  `} >Back</button>
        </div>
     
        </navbar>
        <div className="main" onMouseEnter={()=> setIsHovering(true)} onMouseLeave={()=> setIsHovering(false)} >
       
        <div className={`MainLeft flex top-0 right-0 left-0 pb-10 pt-32 ease-in-out end-auto fixed z-5  bg-white ${
            isHovering ? "bg-white w-screen h-screen" : "-m-[900px] ease-in-out delay-300 "
        } ${showEnergy ? " w-screen h-screen " : "-m-[700px] ease-in-out delay-300"}`}>
            <Vahical />
        </div>
        </div>

        <div className="main" onMouseEnter={()=> setEnergy(true)} onMouseLeave={()=> setEnergy(false)}  >
        <div className={ `MainLeft flex top-0 right-0 left-0   pb-10 pt-32 ease-in-out end-auto fixed  bg-white ${
            energy ? "" : "-m-[700px] ease-in-out delay-300  "
        } ${showEnergy ? " w-screen h-screen md:h-fit z-auto " : "-m-[900px] ease-in-out delay-300"} `}>
        <Energys />
        </div>
        </div>


        <div className="main" onMouseEnter={()=> setCharging(true)} onMouseLeave={()=> setCharging(false)}  >
        <div className={ `MainLeft flex top-0 right-0 left-0   pb-10 pt-32 ease-in-out end-auto fixed  bg-white ${
            charging ? "" : "-m-[700px] ease-in-out delay-300  "
        } ${showEnergy ? " w-screen h-screen md:h-fit " : "-m-[900px] ease-in-out delay-300"} `}>
        <Charging />
        </div>
        </div>

        <div className="main" onMouseEnter={()=> setDiscover(true)} onMouseLeave={()=> setDiscover(false)} >
        <div className={ `MainLeft flex top-0 right-0 left-0   h-1/2 ease-in-out end-auto fixed  bg-white ${
            discover ? "" : "-m-[700px] ease-in-out delay-300   "
        } ${showEnergy ? " w-screen h-screen md:h-2/3 " : "-m-[900px] ease-in-out delay-300"}`}>
        <Discover />
        </div>
        </div>



        <div className="main" onMouseEnter={()=> setShop(true)} onMouseLeave={()=> setShop(false)} >
        <div className={ `MainLeft flex top-0 right-0 left-0   h-1/2 ease-in-out end-auto fixed  bg-white ${
            shop ? "" : "-m-[700px] ease-in-out delay-300   "
        } ${showEnergy ? " w-screen h-screen md:h-1/2 " : "-m-[900px] ease-in-out delay-300"}`}>
        <Shop />
        </div>
        </div>

        


        

       
        </div>
  )
}

export default Hadear




