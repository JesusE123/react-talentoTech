import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
const Cart = () => {
  return (
    <div className='flex justify-end px-4'>
        
        <FaShoppingCart size={30} className='hover:opacity-55 transition cursor-pointer'/>
        
    </div>
  )
}

export default Cart