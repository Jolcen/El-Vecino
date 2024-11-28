import './Product.css'
import React from 'react'

const Product = ({name, imgsrc, price, points}) => {
    return (
        <div className='product-container'>
            <p className='product-name'>{name}</p>
            <img className="product-img" src={imgsrc} alt="" />
            <div className="product-details">
                <p className='details-price'>Bs: {price}</p>
                <p className='details-points'>{points}pt</p>
            </div>
            <button className='product-btn'>Anadir al carrito</button>
        </div>
    )
}

export default Product