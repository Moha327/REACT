import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonAxios = (props) => {
    const [ pokemons, setPokemons ] = useState([]);

    const useEffect = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
        .then(response => setPokemons(response.data.results));
    };

    return(
        <div>
            <button onClick={useEffect} >Fetch Pokemons using axios</button>
            {pokemons.map((poke, i) => {
                return(
                    <p key={i}>{poke.name}</p>
                )
            })}
        </div>
    )
}

export default PokemonAxios;