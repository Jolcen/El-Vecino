import './Login.css'
import { useNavigate } from 'react-router-dom';

import Button from '../components/Button'
import ForgotPassword from '../components/ForgotPassword'
import InputAccess from '../components/InputAccess'
import PerfilPhoto from '../components/PerfilPhoto'
import Title from '../components/Title'


const login = () => {
    
    const navigate = useNavigate();

    const handleLogin = () =>{
        navigate('/dashboard');
    }

    return (
        <div className="login-container">
            <div className="bg"></div>
            <div className='login'>
                <Title title='Iniciar Sesion'/>
                <PerfilPhoto srcimg='public/static/image/images.jpg'/>
                <InputAccess icon='person' input_type='name' placeholder='Usuario'/>
                <InputAccess icon='lock' input_type='password' placeholder='Contrasena'/>
                <ForgotPassword/>
                <Button namebutton='Ingresar' funtion={handleLogin}/>
            </div>
        </div>
    )
}

export default login