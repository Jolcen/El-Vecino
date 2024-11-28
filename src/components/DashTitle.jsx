
import './DashTitle.css'
import Icon from './Icon'


const DashTitle = ({titlename}) => {
  return (
    <div className='dashtitle-container'>
        <h2 className='dashtitle'>{titlename}</h2>
        <div className="pusi">
          
            <Icon icon='shopping_cart'/>
            <Icon icon='logout'/>
            
          
        </div>
    </div>
  )
}

export default DashTitle