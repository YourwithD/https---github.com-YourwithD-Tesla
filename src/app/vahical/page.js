import React from 'react'
import MainLeft from '../mainleft/page'
import Mainright from '../mainright/page'
import model from '../../../public/images/model-sv.avif';
import model3v from '../../../public/images/model-3v.avif';
import modelxv from '../../../public/images/model-xv.avif';
import modelyv from '../../../public/images/model-yv.avif';
import help from '../../../public/images/help.png';

const Vahical = () => {
  return (
    <div className='md:flex'>
      
        <div className="mouse flex flex-wrap md:ml-40 md:mr-0  ">
        <MainLeft 
        title = "Model-S"
        left = "Learn"
        right = "order"
        img = {model} 
               
        />
        
        <MainLeft
        title = "Model-3"
        left = "Learn"
        right = "order"
        img = {model3v}        
        />
         <MainLeft
        title = "Model-X"
        left = "Learn"
        right = "order"
        img = {modelxv}        
        />
         <MainLeft
        title = "Model-Y"
        left = "Learn"
        right = "order"
        img = {modelyv}        
        />
         <MainLeft
        title = "Help"
        left = "Learn"
        right = "order"
        img = {help}        
        />      
        </div>
        <hr className='mt-5 md:hidden'  />
        <div className="right p-2">
       <Mainright 
        h1 = "Inventry"
        h2 = "Used Car"
        h3 = "Demo -Drive"
        h4 = "Traid In"
        h5 = "Help Me Chose"
        h6 = "Compare"
        h7 = "Fleet"
        h8 = "Cuber-Truck"
        h9 = "Semi"
        h10 = "Roadster"
       /></div>
    </div>
  )
}

export default Vahical