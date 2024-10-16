import './DashUser.css'

const DashUser = () => {
  return (
    <div className="dash-user">
        <div className="user-img">
            <img src="/public/static/image/images.jpg" alt="" />
        </div>
        <div className="user-data">
            <h3>Usuario nombre</h3>
            <h4>Admin</h4>
        </div>
    </div>
  )
}

export default DashUser