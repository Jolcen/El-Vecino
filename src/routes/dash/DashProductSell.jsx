import "./DashProductSell.css"
import products from '../../../public/Productos.json'

import React, { useState } from 'react'
import Product from '../../components/Product'
import DashTitle from '../../components/DashTitle';

const DashProductSell = () => {

    const [producto, setProducto] = useState(products);

    return (
        <div>
            <DashTitle titlename='Lista productos'/>
            <div className="products-list-container">
                {/* Mapeamos el array de productos */}
                {producto.map((item, index) => (
                    <Product 
                        key={index} 
                        id={item.id}
                        name={item.nombre} 
                        imgsrc={item.imagen} 
                        price={item.precio} 
                        points={item.puntos} 
                    />
                ))}
            </div>
        </div>
    )
}

export default DashProductSell