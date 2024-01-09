"use client"
import React from 'react'
import styled from 'styled-components'
import Section from '../section/page'

const Homes = () => {
  
  return (
    
      <Contenor>
       <Section 
        title = "Model Y"
        Dec = "Leaase Starting at $399/mo*"
        subdec =" "
        backgroundVideo='/images/modely1.mp4'
        leftbtn = "Explore inventory"
        rightbtn = " Drive Demo"
        downdec = "*Excludes taxes and fees with price subject to change. Available in select states. See Details"
        />
      <Section 
        title = "Model 3"
        Dec = "Leaase Starting at $329/mo*"
        subdec =" "
        backgroundimg = "model-3.jpg"
        leftbtn = "Explore inventory"
        rightbtn = "Demo Drive"
        downdec = "*Excludes taxes and fees with price subject to change. Available in select states. See Details"
        />
         <Section 
        title = "Model X"
        Dec = "From $68,590*"
        subdec ="After Federal Tax Credit & Est. Gas Savings "
        backgroundimg = "model-x.jpg"
        leftbtn = "Explore inventory"
        rightbtn = "Demo Drive"
        downdec = "*Price before incentives and savings is $79,990, excluding taxes and fees. Subject to change."
        downd = "Learn about est. gas savings."
        />
        <Section 
        title = "Model S"
        Dec = "From $71090*"
        subdec =" After Est. Gas Saving"
        backgroundimg = "model-s.jpg"
        leftbtn = "Explore inventory"
        rightbtn = "Demo Drive"
        downdec = " *Price before savings is $74,990, excluding taxes and fees. Subject to change "
        downd = "Learn about est. gas savings."

        />
        <Section 
       
        backgroundimg = "cybertruck.avif"
        leftbtn = "Order Now"
        rightbtn = "Learn More"
        
        />
                <Section 
        title = "Experience Tesla"
        Dec = "Schedule a Demo Drive Today"
        subdec =""
        backgroundVideo='/images/modely1.mp4'
        leftbtn = "Demo Drive"
        rightbtn = ""
        
               />
       
        <Section 
        title = "Soler Panels"
        Dec = "Schedule a Virtual Consultation*"
        subdec =" "
        backgroundimg = "solar-panel.jpg"
        leftbtn = "Order Now"
        rightbtn = "Learn More"
        downdec = ""
                      
        />
        <Section 
        title = "Soler Roof"
        Dec = "Produce Clean Energy From Your Roof*"
        subdec =" "
        backgroundimg = "solar-roof.jpg"
        leftbtn = "Order Now"
        rightbtn = "Learn More"
        downdec = ""
                      
        />
        <Section 
        title = "Power Wall"
        Dec = ""
        subdec =" "
        backgroundimg = "powerwall.webp"
        leftbtn = "Order Now"
        rightbtn = "Learn More"
        downdec = ""
                      
        />

        <Section 
        title = "Accessories"
        Dec = " "
        subdec =" "
        backgroundimg = "aacces.webp"
        leftbtn = "Shop Now"
        rightbtn = ""
        downd = " "
        h1= "Tesla ©2024"
        h2="Privacy &Legal"
        h3= "Vehicle Recalls"
        h4="Contact    "
        h5="News"
        h6= "Get Updates"
        h7="Locations"
                      
        />
        </Contenor>
   
  )
}

export default Homes

const Contenor = styled.div`
height: 100vh;
width: 90vw;
scrollBehavior: 'smooth',

`
