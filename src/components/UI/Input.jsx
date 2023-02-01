import "./Input.css"
const Input = ({label,type, onChange}) => {
    return (
      <div className="inputBlock">
          <label className="label">{label}</label>
          <input 
          className='inp'
          type={type}
          onChange={onChange}/>
      </div>
    )
  }
  
  export default Input