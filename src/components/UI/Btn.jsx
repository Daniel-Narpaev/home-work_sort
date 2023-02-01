import React from 'react'
import "./Btn.css"

const Btn = (props) => {
  return (
    <button className='btn' onClick={props.onClick} disabled={props.disabled} >Add User</button>
  )
}

export default Btn