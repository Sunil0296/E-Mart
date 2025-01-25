import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/cartContext'

const NavBar = () => {

const {cartItems}  = useCart()

  return (
    <>
        <div className="navSection">
                <div className="title">
                    <h2>E-mart</h2>
                </div>
                <div className="search">
                    <input type="text" placeholder='search...' />
                </div>
                <div className="user">
                    <div className="user-details">
                        signIN/SignUP
                    </div>
                <Link to='/cart'>
                <div className="cart">CART 
                    <span>
                        {cartItems.length}
                    </span>
                </div>
                
                </Link>

                </div>
        </div>

        <div className="subMenu">
            <ul>
                <Link to="/ac">
                <li>AC</li>
                </Link>

                <Link to="/computer">
                <li>COMPUTER</li>
                </Link>                

                <Link to="/furniture">
                <li>FURNITURE</li>
                </Link>


               <Link to="/men">
               <li>MEN</li>
               </Link>


                <Link to="/mobile">             
                   <li>MOBILE</li>
                </Link>

                <Link to="/watch">
                <li>WATCHES</li>
                </Link>

                <Link to="/women">
                <li>WOMENS </li> 
                </Link>

                <Link to="/speaker">
                <li>SPEAKERS</li>
                </Link>
               
               
                <Link to="/tv">
                <li>TV</li>
                </Link>                

                <Link to="/kitchen">
                <li>KITCHEN</li>       
                </Link>
            </ul>
        </div>



        </>
  )
}

export default NavBar