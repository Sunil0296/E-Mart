import React from 'react'

import { mobileData } from '../data/mobiles'


const Mobile = () => {

const firstFiveImages = mobileData.slice(0,6)

  return (
    <>
<div className="proTitle">
    <h1>MOBILE</h1>
  </div>   
  
   <div className='proSection'>
        {
            firstFiveImages.map((item)=>{
                return (
                        <div className='imageBox'>
                            <img className='proImage'  src={item.image} alt="" />
                        </div>
                )
            })
        }



    </div>
    </>
  )
}

export default Mobile