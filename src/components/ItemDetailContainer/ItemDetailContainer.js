import React, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [items, setItems] =  useState([])

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007')
         .then((response) => response.json())
         .then((json) => {
            json = json.drinks
            json = json[0]
            setItems(json)
         })
    }, [])

    return (
        <div>
            <ItemDetail item={items}  />
        </div>
    )
}

export default ItemDetailContainer
