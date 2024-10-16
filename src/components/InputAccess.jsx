import './InputAccess.css'

import Icon from './Icon'

const InputAccess = ({icon, input_type, placeholder}) => {
    return (
    <div className="input-access">
        <Icon icon={icon}/>
        <input type={input_type} placeholder={placeholder}/>
    </div>
    )
}

export default InputAccess