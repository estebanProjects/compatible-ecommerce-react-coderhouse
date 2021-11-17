import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = (props) => {
    return (
        <div>
            {props.greeting}
            <ItemCount stock="5" initial="1" nameProducto="Camisa Tiwi" />
        </div>
    )
}

export default ItemListContainer
