import { useState } from "react"
import DashTitle from '../../components/DashTitle'
import ListItem from '../../components/ListItem'
import ListHead from '../../components/ListHead'

import proveedores from '../../../public/Proveedores.json'

const DashSupplierList = () => {

    const [proveedor, setProveedor] = useState(proveedores);

    return (
        <div className=''>
        <DashTitle titlename='Lista Proveedores'/>
        <ListHead heads={['ID','Proveedor','Contacto','Telefono','Direccion','Correo de contacto']}/>
        {proveedores.map((proveedor, index) => (
            <ListItem key={index} data={proveedor} />
        ))}
        </div>
    )
}

export default DashSupplierList