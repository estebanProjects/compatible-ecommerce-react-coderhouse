import React from 'react'
import { AiOutlineShoppingCart  } from 'react-icons/ai';

import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className="icono-car">
            <AiOutlineShoppingCart /> 
            <p>5</p>
        </div>
    )
}

export default CartWidget
