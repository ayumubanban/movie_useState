import React, { useState } from 'react'

const Search = (props) => {
  // The useState hook accepts one argument which is the initial state, and then it returns an array containing the current state (equivalent to this.state for class components) and a function to update it (equivalent to this.setState).
  const [searchValue, setSearchValue] = useState("")

  const handleSearchInputChanges = (e) => {
    // searchValueを入力値にset
    setSearchValue(e.target.value)
  }

  const resetInputField = () => {
    // searchValueを空にset
    setSearchValue("")
  }

  const callSearchFunction = (e) => {
    e.preventDefault()
    props.search(searchValue)
    resetInputField()
  }

  return (
    <form className="search">
      <input type="text" value={searchValue} onChange={handleSearchInputChanges} />
      <input type="submit" onClick={callSearchFunction} value="SEARCH" />
    </form>
  )
}

export default Search
