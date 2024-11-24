import './Button.css'

const Button = ({namebutton, funtion}) => {
  return (
    <div className='button'>
        <button onClick={funtion}>{namebutton}</button>
    </div>
  )
}

export default Button