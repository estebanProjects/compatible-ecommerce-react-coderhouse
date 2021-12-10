import React from 'react'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'

// import axios from 'axios'
import { useParams } from 'react-router'

const Category = ({AoC}) => {
    let id = useParams()
    let categoryId = id.id
    console.log(categoryId)

    return (
        <div>
            {console.log(categoryId)}
            <ItemListContainer categoryId={categoryId} AoC={AoC} />
        </div>
    )
}

export default Category
