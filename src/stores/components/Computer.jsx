import React from 'react'
import { computerData } from '../data/computers'

const Computer = () => {
    const firstFiveImages = computerData.slice(0,5)
  return (
    <>
    <div className="proTitle">
    <h1>COMPUTER</h1>
  </div>
    <div className='proSection'>
{
    computerData.map((item)=>{
        return (
            <div className='imageBox'>
                <img  className='proImage' src={item.image} alt="" />
            </div>
        )
    })
}

    </div>
    </>
  )
}

export default Computer