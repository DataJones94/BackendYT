// userInput goes into the search bar
import React, { useState } from 'react';

const SearchBar = (props) => {
    const [userInput, setUserInput] = useState([]);
    

    function handleSubmit(event) {
        event.preventDefault();
        props.userInput(userInput)
    }
    return (
        <form onSubmit={handleSubmit}className='form-grid'>
            <div className= 'form-group'>
                <label>search for </label>
                <input type= 'text' placeholder='search video,etc.' value = {userInput} onChange={(event) => setUserInput(event.target.value)}/>
            
            </div>    
                

        </form>              
        );
    }
    export default SearchBar;