import { createContext, useContext, useState } from "react";


const CartContext = createContext()

 export const CartProvider = ({children})=>{

const [cartItems,setCartItems] = useState([])



const addtoCart=(item)=>{
setCartItems([...cartItems,item])
}

const removeCartItems=(item)=>{
setCartItems(cartItems.filter((apple)=> apple!== item))
}

return (
    <CartContext.Provider value={{cartItems,addtoCart,removeCartItems}}>
        {children}
    </CartContext.Provider>
)

}

export const useCart=()=>{
    return useContext(CartContext)
}