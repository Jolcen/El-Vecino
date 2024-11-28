import React from 'react'
import DashTitle from '../../components/DashTitle'
import DashInput from '../../components/DashInput'
import Button from '../../components/Button'
import DashSelect from '../../components/DashSelect'

const DashProductRegister = () => {
    return (
        <>
            <DashTitle titlename='Registro de usuario'/>
            <DashInput input_name='Producto' input_type='text'/>
            <DashInput input_name='Descripcion' input_type='text'/>
            <DashSelect selectTitle='Categoria' options={['Bebida','Consumo']}/>
            <DashInput input_name='Precio' input_type='number'/>
            <DashInput input_name='Puntos' input_type='number'/>
            <Button namebutton='Crear Producto'/>
        </>
    )
}

export default DashProductRegister