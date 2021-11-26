import React, {useEffect, useState} from 'react'
import './ItemList.css'

import Item from '../Item/Item'

const ItemList = () => {
    const [productos, setUsers] = useState([])

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
         .then((response) => response.json())
         .then((json) => setUsers(json))
    }, [])

    return (
        <div className="Container_All">
            <div className="Container">
                    {
                        productos.drinks.map((producto) => {
                            producto.stock = Math.floor(Math.random()*35)
                        })
                    }
                    {
                        productos.drinks.map((producto) => {
                            return <Item data={producto} key={producto.idDrink} btnStr="Ver detalles del producto" alt="Img-Producto"/>
                        })
                    }
            </div>
        </div>
    )
}

export default ItemList
    

