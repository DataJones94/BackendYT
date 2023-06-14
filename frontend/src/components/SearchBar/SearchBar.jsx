// userInput goes into the search bar
import React, { useState } from 'react';

const SearchBar = ({getSearchedVideos}) => {
    const [search, setSearch] = useState("");
    

    function handleSubmit(event) {
        event.preventDefault();
       getSearchedVideos(search);
    }
    return (
        <form onSubmit={handleSubmit}className='form-grid'>
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