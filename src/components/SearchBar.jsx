import React from 'react';
import { useAppDispatch } from '../app/hooks';
import { setSearch } from '../features/search/search-slice';


const SearchBar = () => {
  const dispatch = useAppDispatch()
  return (
    <div className="navbar">
      <input className='input' type="text" placeholder="Search a video" onChange={(e) => dispatch(setSearch(e.target.value))}/>
    </div>
  )
}

export default SearchBar