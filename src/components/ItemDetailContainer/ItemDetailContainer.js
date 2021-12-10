// import React, {useEffect, useState} from 'react'
// import ItemDetail from '../ItemDetail/ItemDetail'

// const ItemDetailContainer = ({ idBebida }) => {
//     const [item, setItems] =  useState([])

//     useEffect(() => {
//         fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idBebida}`)
//          .then((response) => response.json())
//          .then((json) => {
//             json = json.drinks
//             json = json[0]
//             console.log(json)
//             setItems(json)
//          })
//     }, [idBebida])

//     return (
//         <div>
//             <ItemDetail item={item}  />
//         </div>
//     )
// }

// export default ItemDetailContainer

import React, {useEffect, useState} from 'react';
import axios from 'axios';
// import './ItemDetailContainer.css';
import { useParams } from 'react-router';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    let id = useParams()
    let itemId = id.id

    const [item, setItem] = useState([])

    useEffect(() => {
        axios(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${itemId}`).then((res) => {
            setItem(res.data.drinks[0])
        })
    }, [itemId])

    return (
        <div>
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer
