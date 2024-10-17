import './Dashboard.css'

import DashUser from '../components/DashUser'
import DashSection from '../components/DashSection'
import DashItem from '../components/DashItem'
import DashUserList from './dash/DashUserList'

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <div className="sections">
          <DashUser/>
          <DashSection icon='House' section_name='Inicio'/>
          <DashSection icon='Groups' section_name='Usuarios'/>
          <DashItem icon='Circle' item_name='Registro de usuario'/>
          <DashItem icon='Circle' item_name='Lista de usuarios'/>
          
          <DashSection icon='Person' section_name='Clientes'/>
          <DashItem icon='Circle' item_name='Nuevo cliente'/>
          <DashItem icon='Circle' item_name='Lista de clientes'/>

          <DashSection icon='Local_shipping' section_name='Proovedores'/>

          <DashSection icon='shopping_basket' section_name='Productos'/>

          <DashSection icon='receipt_long' section_name='Factura'/>
        </div>
        <div className="content">
            
            <DashUserList/>
            
        </div>
    
    </div>
  )
}

export default Dashboard