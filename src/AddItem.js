import React, { useState } from 'react'
import {MdOutlineAddTask} from 'react-icons/md'
const AddItem = ({inputValue,setInputValue,handleChange}) => {

  return (
    <form className='additem' onSubmit={handleChange}>
      <input required type="text" value = {inputValue} onChange={(e) => (setInputValue(e.target.value))} placeholder='add list'/>
      <button type='submit'><MdOutlineAddTask className='add'role = "button" /></button>
    </form>
  )
}

export default AddItem