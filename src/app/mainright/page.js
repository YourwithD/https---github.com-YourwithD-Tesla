import React from 'react'

const Mainright = ({h1, h2, h3, h4, h5, h6, h7, h8, h9, h10  }) => {
  return (
    <div>

<div className="right  border-l-2  ">
          <ul className='text-2xl p-10   '>
            <li className='cursor-pointer hover:underline text-sm p-2' >{h1}</li>
            <li className='cursor-pointer hover:underline text-sm p-2' >{h2}</li>
            <li className='cursor-pointer hover:underline text-sm p-2' > {h3}</li>
            <li className='cursor-pointer hover:underline text-sm p-2' >{h4}</li>
            <li className='cursor-pointer hover:underline text-sm p-2' >{h5}</li>
            <li className='cursor-pointer hover:underline text-sm p-2' >{h6}</li>
            <li className='cursor-pointer hover:underline text-sm p-2' >{h7}</li>
            <li className='cursor-pointer hover:underline text-sm p-2' >{h8}</li>
            <li className='cursor-pointer hover:underline text-sm p-2' >{h9}</li>
            <li className='cursor-pointer hover:underline text-sm p-2' >{h10}</li>
          </ul>
        
        </div>
      
    </div>
  )
}

export default Mainright
