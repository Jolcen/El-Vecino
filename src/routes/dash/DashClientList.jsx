import { useState } from "react"
import DashTitle from '../../components/DashTitle'
import ListHead from '../../components/ListHead'
import ListItem from '../../components/ListItem'
import clientes from '../../../public/Clientes.json'

const DashClientList = () => {
    
    const [cliente, setClientes] = useState(clientes); 

    return (
        <div className=''>
        <DashTitle titlename='Lista Clientes'/>
        <ListHead heads={['ID','Nombre','Nit','Telefono','Direccion','Puntos acumulados']}/>
        {clientes.map((cliente, index) => (
            <ListItem key={index} data={cliente} />
        ))}
        </div>
    )
}

export default DashClientList