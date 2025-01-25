import React from 'react'
import NavBar from '../components/NavBar'
import { womanData } from '../data/woman'

const WomenPage = () => {
  return (
   <>
    <NavBar/>

<div className='pageSection'>
    {womanData.map((item)=>{
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

export default WomenPage