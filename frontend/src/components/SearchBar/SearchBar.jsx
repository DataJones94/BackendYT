// userInput goes into the search bar
import React, { useState } from 'react';

const SearchBar = ({getSearchedVideos}) => {
    const [search, setSearch] = useState("");
    

    function handleSubmit(event) {
        event.preventDefault();
       getSearchedVideos(search);
    }
    return (
        <form onSubmit={(event) => handleSubmit(event)}className='form-grid'>
            <div className=' container text-center'></div>
            <div className= 'form-group'>
                <label>search for </label>
                <input type= 'search' placeholder='search video' value = {search} onChange={(event) => setSearch(event.target.value)}/>
                <div className='buttons'>
                <button type='submit'>Search Videos</button>
                </div>

            
            </div>    
                
        </form>              
        );
    }
    export default SearchBar;