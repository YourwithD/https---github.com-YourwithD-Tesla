import React from 'react'
import MainLeft from '../mainleft/page';
import charging from '../../../public/images/sscharging.webp';
import vahile from '../../../public/images/ssvahile.webp';
import apprel from '../../../public/images/ssapprel.webp';
import lifestyle from '../../../public/images/sslifestyle.jpeg';

const Shop = () => {
  return (
    <div>
      
        <div className="mouse flex absolute mb-10 mt-32  top-0 left-0 right-0    justify-center text-center    ">
        <MainLeft
        title = "Solar Panal"
       
        img = {charging}      
        />  
        <MainLeft
        title = "Solar Roof"
        
        img = {vahile}        
        /> 
         <MainLeft
        title = "Power Wall"
       
        img = {apprel}        
        />
        <MainLeft
        title = "Power Wall"
       
        img = {lifestyle}        
        />
        </div>
  </div>
   
  )
}

export default Shop
