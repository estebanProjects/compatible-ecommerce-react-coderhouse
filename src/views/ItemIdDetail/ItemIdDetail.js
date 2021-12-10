import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './ItemIdDetail.css';
import { useParams } from 'react-router';

const ItemIdDetail = () => {
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
            {console.log(item)}
        </div>
    )
}

export default ItemIdDetail
