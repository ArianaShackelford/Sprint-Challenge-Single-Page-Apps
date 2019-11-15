import React, { useState } from "react";

export default function SearchForm() {
  const [results, setResults] = useState();

  const handleChanges = e => {
    SpeechRecognitionResultList(e.target.value)
  };

  const submitHandler = e => {
    e.preventDefault()}

      const findCharacter = props.characters.filter(character => {
        character.name.toLowerCase().indexOf(results.toLowerCase()) !== -1}
    );
        props.search(findCharacter);
        console.log(findCharacter);
  return (
    <section className="search-form">
     <form onSubmit={submitHandler}>
       <input type='text' name='character' id='character' placeholder='character search' onChange={handleChanges}/>
       
     </form>
    </section>
  );
}
