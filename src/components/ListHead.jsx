import './List.css'

const ListHead = () => {
  return (
    <div className='listhead'>
      <div className="col-id">ID</div>
      <div className="col-nombre">Nombre</div>
      <div className="col-correo">Correo</div>
      <div className="col-usuario">Usuario</div>
      <div className="col-rol">Rol</div>
      <div className="col-acciones">Acciones</div>
    </div>
  )
}

export default ListHead