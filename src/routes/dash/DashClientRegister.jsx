import React from 'react'
import DashTitle from '../../components/DashTitle'
import DashInput from '../../components/DashInput'
import Button from '../../components/Button'

const DashClientRegister = () => {
    return (
        <>
            <DashTitle titlename='Registro de usuario'/>
            <DashInput input_name='Nombre' input_type='text'/>
            <DashInput input_name='Nit' input_type='text'/>
            <DashInput input_name='Telefono' input_type='text'/>
            <DashInput input_name='Dirreccion' input_type='text'/>
            <Button namebutton='Crear Cliente'/>
        </>
    )
}

export default DashClientRegister