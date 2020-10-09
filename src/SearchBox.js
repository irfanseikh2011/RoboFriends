import React from 'react'

const SearchBox = ({searchChange}) => {
    return (
        <div className="pa2 mb4">
            <input 
            className="pa3 ba b--green bg-lightest-blue"
            type='search' 
            placeholder='Find a Robot'   
            onChange= {searchChange}  
            />
        </div>
    );
}

export default SearchBox;