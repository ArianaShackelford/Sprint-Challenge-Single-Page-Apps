import React, { useState, useEffect } from "react";
import CharacterCard from './CharacterCard';

export default function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(()=> {
    const results = props.characters.filter(character =>{
      // console.log(character)
      return character.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    setSearchResults(results);  
    }
  ,[searchTerm])

  const handleChange = e => {
    setSearchTerm(e.target.value)
  }

  const handleSubmit = e => {
      e.preventDefault()
  }

    return(
    <section className="search-form">
     <form  onSubmit={handleSubmit}>
       <label htmlFor='name'>Search:</label>
       <input id='name'
       type='text'
       placeholder='find a character'
       onChange={handleChange}
       value={searchTerm}/>
       <button>Submit</button>
     </form>

      {searchResults.map(character => <CharacterCard key={character.id} character={character}/>)}
      <hr></hr>
    </section>
    
    );
  
}
