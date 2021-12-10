import React from 'react'
import './ItemListContainer.css'
// import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = (props) => {
    return (
        <div className="greet">
            <p>{props.greeting}</p>
            {console.log(props.categoryId)}
            <ItemList bebidaCtg={props.categoryId} AoC={props.AoC} />
        </div>
    )
}

export default ItemListContainer
