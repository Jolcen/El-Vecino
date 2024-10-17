import DashTitle from "../../components/DashTitle"
import ListHead from "../../components/ListHead"
import ListItem from "../../components/ListItem"

const DashUserList = () => {
  return (
    <div className='userlist'>
      <DashTitle titlename='Lista usuarios'/>
      <ListHead/>
      <ListItem id={'1'} 
                nombre={'Daniela Alejandra Miranda Ramirez'} 
                correo={'danmirandar26@gmail.com'}
                usuario={'Admin'}
                rol={'Administrador'}
                acciones={''}
      />
      <ListItem id={'1'} nombre={'Daniela Alejandra Miranda Ramirez'} correo={'danmirandar26@gmail.com'} usuario={'Admin'} rol={'Administrador'} acciones={''}/>
      <ListItem id={'1'} nombre={'Daniela Alejandra Miranda Ramirez'} correo={'danmirandar26@gmail.com'} usuario={'Admin'} rol={'Administrador'} acciones={''}/>
      <ListItem id={'1'} nombre={'Daniela Alejandra Miranda Ramirez'} correo={'danmirandar26@gmail.com'} usuario={'Admin'} rol={'Administrador'} acciones={''}/>
      <ListItem id={'1'} nombre={'Daniela Alejandra Miranda Ramirez'} correo={'danmirandar26@gmail.com'} usuario={'Admin'} rol={'Administrador'} acciones={''}/>
      <ListItem id={'1'} nombre={'Daniela Alejandra Miranda Ramirez'} correo={'danmirandar26@gmail.com'} usuario={'Admin'} rol={'Administrador'} acciones={''}/>
      <ListItem id={'1'} nombre={'Daniela Alejandra Miranda Ramirez'} correo={'danmirandar26@gmail.com'} usuario={'Admin'} rol={'Administrador'} acciones={''}/>
      
      
    </div>
  )
}

export default DashUserList