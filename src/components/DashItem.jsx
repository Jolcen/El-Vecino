import './DashItem.css'
import Icon from './Icon'

const DashItem = ({icon, item_name}) => {
  return (
    <div className='item'>
        <div className="info">
            <Icon icon={icon}/>
            <span>{item_name}</span>
        </div>
    </div>
  )
}

export default DashItem