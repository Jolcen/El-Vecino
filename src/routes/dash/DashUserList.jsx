import DashTitle from "../../components/DashTitle"
import ListHead from "../../components/ListHead"
import ListItem from "../../components/ListItem"
import { useState } from "react"

import usuarios from "../../../public/Usuarios.json"

const DashUserList = () => {
  
  const [usuario, setUsuarios] = useState(usuarios); 

  return (
    <div className=''>
      <DashTitle titlename='Lista usuarios'/>
      <ListHead heads={['ID','Nombre','Correo','Usuario','Rol']}/>
      {usuarios.map((usuario, index) => (
            <ListItem key={index} data={usuario} />
        ))}
    </div>
  )
}

export default DashUserList