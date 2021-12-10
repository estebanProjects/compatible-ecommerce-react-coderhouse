import React from 'react'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'

const Home = ({ bebidaCtg, AoC }) => {
    return (
        <div>
            {console.log(bebidaCtg)}
            <ItemListContainer greeting="¡Bienvenido al mejor Ecommerce!" categoryId={bebidaCtg} AoC={AoC}/>
        </div>
    )
}

export default Home
