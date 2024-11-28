import Button from "../../components/Button"
import DashInput from "../../components/DashInput"
import DashSelect from "../../components/DashSelect"
import DashTitle from "../../components/DashTitle"

const DashUserRegister = () => {
  return (
    <>
      <DashTitle titlename='Registro de usuario'/>
      <DashInput input_name='Nombre' input_type='text'/>
      <DashInput input_name='Apellido' input_type='text'/>
      <DashInput input_name='Usuario' input_type='text'/>
      <DashInput input_name='Contrasena' input_type='text'/>
      <DashInput input_name='Repite la contrasena' input_type='text'/>
      <DashInput input_name='Tipo de Usuario' input_type='text'/>
      <DashSelect selectTitle='Rol' options={['Administrador','Vendedor']}/>
      <Button namebutton='Crear Usuario'/>
    </>
  )
}

export default DashUserRegister 