import React, { useState, useEffect } from "react";
import CharacterList from "./CharacterList";

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(()=> {
    const results = characters.filter(character =>
      character.toLowerCase().includes(searchTerm.toLowerCase()))
  },[searchTerm])

  const handleChange = e => {
    setSearchTerm(e.target.value)
  }

    return(<section className="search-form">
     <form>
       <label htmlFor='name'>Search:</label>
       <input id='name'
       type='text'
       placeholder='find a character'
       onChange={handleChange}
       value={searchTerm}/>
     </form>
    </section>);
  
}
