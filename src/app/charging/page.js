import React from 'react'
import MainLeft from '../mainleft/page';
import Mainright from '../mainright/page';
import charging from '../../../public/images/ccharging.webp';
import homecharging from '../../../public/images/chomecharging.webp';

import supercharging from '../../../public/images/csupercharging.webp';

const Charging = () => {
  return (
    <div className='md:flex'>
      
        <div className="mouse flex flex-wrap md:w-3/4 h-auto md:ml-40  ">
        <MainLeft
        title = "Charging"
        left = "Learn"
        right = "order"
        img = {charging}      
        />  
        <MainLeft
        title = "Home-Charging"
        left = "Learn"
        right = "order"
        img = {homecharging}        
        /> 
         <MainLeft
        title = "Super-Charging"
        left = "Learn"
        right = "order"
        img = {supercharging}        
        />   
        
        
       
</div>
<hr className='mt-5 w-screen md:hidden' />
<div className="right">
       <Mainright 
        h1 = "Schedule a Consultation"
        h2 = "Why Solar"
        h3 = "Demo -Drive"
              
       /></div>
  </div>
   
  )
}

export default Charging
