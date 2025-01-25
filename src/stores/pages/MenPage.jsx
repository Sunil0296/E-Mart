import React from 'react'
import NavBar from '../components/NavBar'
import { menData } from '../data/men'

const MenPage = () => {
  return (
    <>
     <NavBar/>

<div className='pageSection'>
    {menData.map((item)=>{
return(
    <div>
<div className="pageImg">
<img src={item.image} alt="" />
</div>
    <div className="proModel">
        {item.company}, {item.model}
    </div>

    </div>
)
})

    }
    
    </div>
    </>
  )
}

export default MenPage