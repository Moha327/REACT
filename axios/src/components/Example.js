import React, { useState ,useEffect} from 'react';
const Example = () => {
    const [people, setPeople] = useState([]);
 
    const useEffect = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
            .then(response => response.json())
            .then(response => setPeople(response.results))
    };
 
    return (
       
        <>
        <button onClick={useEffect}>Fetch API</button>
            {people.length > 0 && people.map((person, index)=>{
                return (<div key={index}>{person.name}</div>)
            })}
            
        </>
        
    );
    
}
export default Example;
