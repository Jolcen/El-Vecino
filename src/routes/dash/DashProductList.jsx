import React, { useState } from 'react'
import DashTitle from '../../components/DashTitle';
import ListHead from '../../components/ListHead';
import ListItem from '../../components/ListItem';

import productos from '../../../public/Productos copy.json'

const DashProductList = () => {
    
    const [producto, setProducto] = useState(productos);

    return (
        <div className=''>
        <DashTitle titlename='Lista productos'/>
        <ListHead heads={['Cod','Producto','Descripcion','Categoria','Precio','Puntos']}/>
        {productos.map((producto, index) => (
                <ListItem key={index} data={producto} />
            ))}
        </div>
    )
}

export default DashProductList