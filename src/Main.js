import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'
import apiRequest from './apiRequest'

export const Main = ({allItems,setAllItems,URL,setRemove}) => {
  const checkHandle = (async(id) => {
    const check = allItems.map((item) => item.id === id ? {...item,checked:!item.checked} : item)
    setAllItems(check)
    

    const update = check.filter((item) => item.id === id)
    const option = {
      method : 'PATCH',
      headers : { 'content-type' :'application/json'},
      body : JSON.stringify({checked:update[0].checked})
    }
    const url = `${URL}/${id}`
    await apiRequest(url,option)
  })

  const deleteItem =  (async(id) => {
    const remove = allItems.map((item) => item.id === id)
    setRemove(remove)
    const option = {method : 'delete'}
    const url = `${URL}/${id}`
    await apiRequest(url,option)
  })
    
  return (
    
    <div className = "main">
        <ul>
          {
            allItems.map(item => (
              <li className="item" key = {item.id}>
                <input type="checkbox" checked = {item.checked} onChange={() => (checkHandle(item.id))} />
                <label style = {item.checked ? {textDecoration : 'line-through'} : {}}>{item.name}</label>
                <FaTrashAlt className = "trash"role = "button"onClick={() => (deleteItem(item.id))}/>
              </li>
            )) 
          }
        </ul>

    </div>
  )
}

export default Main