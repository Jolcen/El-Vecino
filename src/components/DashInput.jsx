import './DashInput.css'
const DashInput = ({input_type, input_name, }) => {
  return (
    <div className='dashinput'>
        <span>{input_name}</span>
        <input type={input_type} />
    </div>
  )
}

export default DashInput