import './DashSection.css'
import Icon from './Icon'

const DashSection = ({icon, section_name}) => {
  return (
    <div className='section'>
        <div className="info">
            <Icon icon={icon}/>
            <span>{section_name}</span>
        </div>
        <div className="back">
            <Icon icon={'chevron_left'}/>
        </div>
    </div>
  )
}

export default DashSection