import React, { useState } from "react";

const XDictionary = () => {
  const [search, setSearch] = useState('');
  const [definition, setDefinition] =useState("")
  const [dictionary] = useState([
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." },
  ]);



  const handleSubmit =(e)=>{
    e.preventDefault();
    const entry = dictionary.find(
        (item)=> item.word.toLowerCase() === search.trim().toLowerCase()
    );

    if(entry){
        setDefinition(entry.meaning);
    }else{
        setDefinition("Word not found in the dictionary.")
    }
  }
  return (
    <>
      <h1>Dictionary App</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="search" id="" placeholder="Search for a word..." value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <button type="submit">Search</button>
      </form>
      <h3>Definition:</h3> 
      <p>{definition}</p>
    </>
  );
};

export default XDictionary;
