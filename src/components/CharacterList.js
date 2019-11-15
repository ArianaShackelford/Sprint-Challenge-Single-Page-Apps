import React, { useEffect, useState } from "react";
import Axios from "axios";
import {Link} from 'react-router-dom';
import CharacterCard from './CharacterCard'

const CharacterList = () => {
  // TODO: Add useState to track data from useEffect
const [characters, setCharacters] = useState([])
const [sortedData, setSortedData] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    
      Axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        console.log(res.data.results);
        setCharacters(res.data.results);
        setSortedData(res.data.results)
      })
      .catch(error => {
        console.error('Server Error', error)
      });
  }, []);

  return (
    console.log(characters),
    <section className="character-list">
      <h2>Character List</h2>
      <Link to={'/'}>Home</Link>
      {sortedData.map(character => {
        return <CharacterCard key={character.id} character={character}/>
      })}
    </section>
  );
}
export default CharacterList;
