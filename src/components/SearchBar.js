import { render } from '@testing-library/react';
import React, { useState } from 'react'

function SearchBar() {

  const [search, setSearch] = useState("test");

  const clickHandler = () => {
    return(
      <h1>{search}</h1>
    )
  }
  return (
    <div>
      <input
       placeholder='Enter emoji name'
       onChange={(e)=>{
        setSearch(e.target.value)
        console.log(search)
      }}
       type='text'
       />
      <button id='searchButton' >Search</button>
    </div>
  )
}

export default SearchBar

