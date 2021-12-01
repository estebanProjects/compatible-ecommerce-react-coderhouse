import React from 'react'
import './Item.css'

const Item = ({ data, btnStr }) => {
    return (
        <div className="card_product">
            <h3>{data.strDrink}</h3>
            <div>
                <img src={data.strDrinkThumb} alt="bebida" />
                <p>MXN${data.idDrink}</p>
                <p>Stock disponible: {data.stock}</p>
                <button>{btnStr}</button>
            </div>
        </div>
    )
}

export default Item
