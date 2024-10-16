import './Button.css'

const Button = ({namebutton}) => {
  return (
    <div className='button'>
        <button>{namebutton}</button>
    </div>
  )
}

export default Button