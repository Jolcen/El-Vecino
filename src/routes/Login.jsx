import './Login.css'

import Button from '../components/Button'
import ForgotPassword from '../components/ForgotPassword'
import InputAccess from '../components/InputAccess'
import PerfilPhoto from '../components/PerfilPhoto'
import Title from '../components/Title'

const login = () => {
    return (
        <div className="bg">
            <div className='login'>
                <Title title='Iniciar Sesion'/>
                <PerfilPhoto srcimg='public/static/image/images.jpg'/>
                <InputAccess icon='person' input_type='name' placeholder='Usuario'/>
                <InputAccess icon='lock' input_type='password' placeholder='Contrasena'/>
                <ForgotPassword/>
                <Button namebutton='Ingresar'/>
            </div>
        </div>
    )
}

export default login