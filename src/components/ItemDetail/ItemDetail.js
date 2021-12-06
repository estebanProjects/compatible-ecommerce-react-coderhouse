import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({ item }) => {
    return (
        <div className="Container_Detail">
            <img className="Image_Main" src={item.strDrinkThumb} alt={item.strGlass}/>
            <section className="Detalles">
                <div className="info_extra">
                    <p>Bebida premium</p><p>{Math.floor(Math.random()*(25000 - 10000) + 10000)} vendidos</p>
                </div>
                <div className="title_d">
                <h2>{item.strDrink}</h2>
                <p className="description">{item.strInstructions}</p>
                </div>
                <div className="precio">
                    <p className="price">MXN${item.idDrink}</p> 
                    <p className="descuento">{Math.floor(Math.random()*(15 - 10) + 10)}% Descuento</p>
                </div>
                <p className="fecha_limite">fecha límite del descuento: {Math.floor(Math.random()*31)}/12/2021</p>
                <div className="other_images_similares"><p>Otras bebidas similares: </p>
                    <img src={item.strDrinkThumb} alt="image1" />
                    <img src={item.strDrinkThumb} alt="image2" />
                    <img src={item.strDrinkThumb} alt="image3" />
                </div>
            </section>
        </div>
    )
}

export default ItemDetail
