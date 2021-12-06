import React from 'react'
import './ItemListContainer.css'
// import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = (props) => {
    return (
        <div className="greet">
            <p>{props.greeting}</p>
            <ItemList />
        </div>
    )
}

export default ItemListContainer
