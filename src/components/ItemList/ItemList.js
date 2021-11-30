import React, {useEffect, useState} from 'react'
import './ItemList.css'

import Item from '../Item/Item'

const ItemList = () => {
    const [productos, setUsers] = useState([])

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
         .then((response) => response.json())
         .then((json) => {
            json = json.drinks
            setUsers(json)
         })
    }, [])

    return (
        <div className="Container_All">
            <div className="Container">
                    {
                        productos.map((producto) => {
                            producto.stock = Math.floor(Math.random()*35)
                            return <Item data={producto} key={producto.idDrink} btnStr="Ver detalles del producto" alt="Img-Producto"/>
                        })
                    }
            </div>
        </div>
    )
}

export default ItemList
    

