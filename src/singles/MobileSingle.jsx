import React from 'react'
import { mobileData } from '../stores/data/mobiles'
import { useParams } from 'react-router-dom'
import NavBar from '../stores/components/NavBar'
import { useCart } from '../context/cartContext'
const MobileSingle = () => {

    const {addToCart , cartItems} = useCart()

    const {id} = useParams()

    const product = mobileData.find((item)=>item.id ===id)

    console.log(id);

    
  return (
   <>
   <NavBar/>

   
   <div className="ind-page">

<div className="ind-image">
    <img src={product.image} alt="" />
</div>

<div className="ind-details">

<div className="ind-company">
    <h2>{product.company}</h2>
</div>

<div className="ind-model space">
    <h3>{product.model}</h3>
</div>

<div className="ind-price space">
    <h3>{product.price}</h3>
</div>

<div className="ind-desc space">
    <p>
        {product.description}
    </p>
</div>
<button onClick={()=>addToCart(product)}>Add to Cart</button>

</div>

   </div>
   </>
  )
}

export default MobileSingle