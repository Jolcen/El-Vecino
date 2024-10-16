import './PerfilPhoto.css'

const PerfilPhoto = ({srcimg}) => {
  return (
    <div className="perfil-img">
        <img src={srcimg} alt="user image" />
    </div>
  )
}

export default PerfilPhoto