"use client"
import React from 'react'
import styled from 'styled-components'




const Section = ({title, Dec, leftbtn, rightbtn, downdec, subdec, downd, backgroundimg,  h1, h2, h3, h4, h5, h6, h7  }) => {

  return (
        <Wrap className=' w-screen min-h-screen overflow-x-hidden ' bgImage ={backgroundimg}>
          <ItemText>
            <h1 className='text-4xl'>{title}</h1>
            <p className='text-xl '> {Dec} </p>
            <p> {subdec}</p>
          </ItemText>
          <ButtonGroup>
            <Button className='md:flex z-1  ' >
            <LeftButton> {leftbtn}</LeftButton>
            {rightbtn && 
            <RightButton>
            {rightbtn}
            </RightButton>
            }

          </Button>
          <h1 className='text-center justify-center '> {downdec}</h1>
          <h2 className='text-center justify-center cursor-pointer '>{downd} </h2>
          <div className="nav mb-1">
            <ul className='flex justify-center gap-5  '>
              <li className='cursor-pointer hover:underline text-white'>{h1}</li>
              <li className='cursor-pointer hover:underline text-white'>{h2}</li>
              <li className='cursor-pointer hover:underline text-white'>{h3}</li>
              <li className='cursor-pointer hover:underline text-white'>{h4}</li>
              <li className='cursor-pointer hover:underline text-white'>{h5}</li>
              <li className='cursor-pointer hover:underline text-white'>{h6}</li>
              <li className='cursor-pointer hover:underline text-white'>{h7}</li>
            </ul>
          </div>
          </ButtonGroup>

          

            

          
        </Wrap>
        
  )
}

export default Section

const Wrap = styled.div`
background-size: cover;
background-position: center;
backgroundRepeat: no-repeat;
display: flex;
flex-direction: column;
justify-content: space-between;
background-image: ${props => `url('images/${props.bgImage}')`} };

`

const ItemText = styled.div`
text-align: center;
padding-top: 15vh;

`

const Button = styled.div`

align-item: center;
justify-content: center;
`

const ButtonGroup = styled.div`
justify-content: center;
padding: 55px ;
display: flex;
flex-direction: column;
align-item: center;

`

const LeftButton = styled.div`
padding: 10px;
background-color: rgba(23, 26, 32, 0.8);
margin: 10px ;

height: 40px;
width: 250px;
border-radius: 5px;
display: flex;
justify-content: center;
align-item: center;
color: black;
opacity: 0.65;
font-size: 12px;
background-color: white;
font-size: 15px;


`
const RightButton = styled(LeftButton)`
background-color: black;
color: white;
opacity: 0.4;

`

