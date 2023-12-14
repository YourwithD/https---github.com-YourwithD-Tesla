import React from 'react'
import MainLeft from '../mainleft/page';
import Mainright from '../mainright/page';
import solarpanal from '../../../public/images/esolar.webp';
import solarroof from '../../../public/images/esolarroof.webp';
import powerwall from '../../../public/images/epowerwall.webp';
import megapack from '../../../public/images/emegapack.webp';

const Energys = () => {
  return (
    <div className='md:flex'>
      
        <div className="mouse flex flex-wrap md:w-3/4 h-auto md:ml-40  ">
        <MainLeft
        title = "Solar Panal"
        left = "Learn"
        right = "order"
        img = {solarpanal}      
        />  
        <MainLeft
        title = "Solar Roof"
        left = "Learn"
        right = "order"
        img = {solarroof}        
        /> 
         <MainLeft
        title = "Power Wall"
        left = "Learn"
        right = "order"
        img = {powerwall}        
        />   
        <MainLeft
        title = "Mega Pack"
        left = "Learn"
        right = "order"
        img = {megapack}        
        />   
        
       
</div>
<hr className='mt-5' />
<div className="right text-sm">
       <Mainright 
        h1 = "Schedule a Consultation"
        h2 = "Why Solar"
        h3 = "Demo -Drive"
        h4 = "Traid In"
        h5 = "Help Me Chose"
        h6 = "Compare"
        
       /></div>
  </div>
   
  )
}

export default Energys
