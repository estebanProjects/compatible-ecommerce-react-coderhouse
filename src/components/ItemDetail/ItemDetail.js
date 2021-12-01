import React from 'react'
import './ItemDetail.css'

const ItemDetail = () => {
    return (
        <div className="Container_Detail">
            <img className="Image_Main" src="https://www.thecocktaildb.com//images//media//drink//rrtssw1472668972.jpg" alt="imagen"/>
            <section className="Detalles">
                <div className="info_extra">
                    <p>Bebida premium</p><p>14520 vendidos</p>
                </div>
                <div className="title_d">
                <h2>Mile Long Island Iced Tea</h2>
                <p className="description">Esta bebida tiene uno de los mejores sabores que podrá probar, hecho con mucha dedicacion por parte de nuestros chefs.</p>
                </div>
                <div className="precio">
                    <p className="price">MXN$15300</p> 
                    <p className="descuento">15% Descuento</p>
                </div>
                <p className="fecha_limite">fecha límite del descuento: 17/12/2021</p>
                <div className="other_images_similares"><p>Otras bebidas similares: </p>
                    <img src="https://www.thecocktaildb.com//images//media//drink//rrtssw1472668972.jpg" alt="image1" />
                    <img src="https://www.thecocktaildb.com//images//media//drink//rrtssw1472668972.jpg" alt="image2" />
                    <img src="https://www.thecocktaildb.com//images//media//drink//rrtssw1472668972.jpg" alt="image3" />
                </div>
            </section>
        </div>
    )
}

export default ItemDetail
