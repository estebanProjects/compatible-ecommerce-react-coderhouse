import React from 'react'
import './ItemListContainer.css'
// import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemListContainer = (props) => {
    return (
        <div className="greet">
            <p>{props.greeting}</p>
            <ItemDetail />
            <ItemList />
            {/* <ItemCount stock="5" initial="1" nameProducto="Camisa Tiwi" /> */}
        </div>
    )
}

export default ItemListContainer
