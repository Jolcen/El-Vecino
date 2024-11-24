import './DashSection.css'
import Icon from './Icon'

const DashSection = ({icon, section_name, funtion, iconState}) => {
  return (
    <div className='section' onClick={funtion}>
        <div className="info">
            <Icon icon={icon}/>
            <span>{section_name}</span>
        </div>
        <div className="back">
            <Icon icon={iconState}/>
        </div>
    </div>
  )
}

export default DashSection