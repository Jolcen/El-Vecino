import './List.css'
import ListItemAction from './ListItemAction'

const ListItem = ({id, nombre, correo, usuario, rol, acciones}) => {
  return (
    <div className='listitem'>
      <div className="col-id">{id}</div>
      <div className="col-nombre">{nombre}</div>
      <div className="col-correo">{correo}</div>
      <div className="col-usuario">{usuario}</div>
      <div className="col-rol">{rol}</div>
      <div className="col-acciones"><ListItemAction/></div>
      
    </div>
  )
}

export default ListItem