import React, {useEffect, useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
export default function App() {
    const [allItems, setAllItems] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [search , setSearch] = useState('')
    const [remove, setRemove] = useState('')
    const URL = "http://localhost:3500/listData"

    const handleChange = async(event) => {
      event.preventDefault()
      const id = allItems.length ? allItems[allItems.length - 1].id + 1 : 1
      const addItem = {id,name:inputValue,checked:false}
      const added = [addItem,...allItems]
      setAllItems(added)

      const updateOption = {
        method :  'POST',
        headers : {'content-type' : 'application/json'},
        body : JSON.stringify(addItem)
      }
      await fetch(URL,updateOption)
    }

    
    useEffect(() => {
        const fetchItem = async() => {
            try {
                const response = await fetch(URL)
                const listItem = await response.json()
                setAllItems(listItem)
            } catch(error){
                console.log(error.Message)
            }
        }
        fetchItem()
    },[inputValue,remove])
    return (
        <div className = "app">
            <Header />
            <AddItem inputValue = {inputValue} setInputValue = {setInputValue} handleChange={handleChange}/>
            <SearchItem search={search} setSearch={setSearch}/>
            <Main allItems = {allItems.filter(item => ((item.name).toLowerCase()).includes(search.toLowerCase()))} setAllItems = {setAllItems} URL = {URL} setRemove={setRemove}/>
            <Footer />
        </div>
    )
}