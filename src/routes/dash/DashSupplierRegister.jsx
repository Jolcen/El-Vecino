import React from 'react'
import DashTitle from '../../components/DashTitle'
import DashInput from '../../components/DashInput'
import Button from '../../components/Button'

const DashSupplierRegister = () => {
    return (
        <>
            <DashTitle titlename='Registro de proveedor'/>

            <DashInput input_name='Proveedor' input_type='text'/>
            <DashInput input_name='Contacto' input_type='text'/>
            <DashInput input_name='Telefono' input_type='text'/>
            <DashInput input_name='Dirreccion' input_type='text'/>
            <DashInput input_name='Email' input_type='text'/>
            <Button namebutton='Crear Cliente'/>
        </>
    )
}

export default DashSupplierRegister