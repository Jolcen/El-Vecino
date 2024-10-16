import './Dashboard.css'

import DashUser from '../components/DashUser'
import DashSection from '../components/DashSection'

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <div className="sections">
          <DashUser/>
          <DashSection icon='house' section_name={'Inicio'}/>
        </div>
        <div className="content">
            a
        </div>
    
    </div>
  )
}

export default Dashboard