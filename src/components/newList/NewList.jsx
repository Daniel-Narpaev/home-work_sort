import React from 'react'
import List from '../list/List'
import "./NewList.css"


const NewList = ({ list }) => {
  return (
    <ul className='ul'>
        {list.map((el) => {
        return( 
           <List
           nameInp={el.nameInp}
           ageInp={el.ageInp}/>
           )
        })}
    </ul>
   
   
  )
}

export default NewList