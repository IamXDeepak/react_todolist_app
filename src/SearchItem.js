import React from 'react'

const SearchItem = ({search,setSearch}) => {

  return (
    <form className="search"onSubmit={e => e.preventDefault()}>
        <input type="text"placeholder='Search'value = {search} onChange={(e) => setSearch(e.target.value)} />
    </form>
  )
}

export default SearchItem