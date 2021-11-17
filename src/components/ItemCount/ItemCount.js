import React, {useState} from 'react'
import './ItemCount.css'

const ItemCount = ({stock, initial}) => {

    let [counter, setCounter] = useState(`${initial}`)
    counter = Number(counter)
    const onAdd = () => {
        if(`${stock}` > counter) {
            setCounter(counter + 1)
        } 
    }

    const onDecrese = () => {
        if(counter > 0) {
            setCounter(counter - 1)
        }
    }

    return (
        <div className="Card">
            <p className="prod">Camisa Tiwi</p>
            <div className="Control_button">
                <button onClick={onDecrese}>-</button>
                <p>{counter}</p>
                <button onClick={onAdd}>+</button>
            </div>
            <div className="addCart">Agregar al carrito</div>
        </div>
    )
}

export default ItemCount
