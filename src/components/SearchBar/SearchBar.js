import React from 'react';
import { SearchBarDiv, SearchBarInput } from './SearchBarStyle.js';


const SearchBar = (props) => {
    return (
        <SearchBarDiv>
            <SearchBarInput disabled={props.bool} onChange={props.inputChange} value={props.value} placeholder={props.placeholder}></SearchBarInput>
        </SearchBarDiv>
    );
}

export default SearchBar;