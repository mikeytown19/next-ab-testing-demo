
import {useState, useEffect} from 'react';

export default function Pokemon() {

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      .then(res => res.json())
      .then(data => setPokemon(data))
  }, []);

  return ( pokemon &&
    <div>
      <h1>Pokemon</h1>
      <h2>{pokemon.name}</h2>
      <p>EXP: {pokemon.base_experience}</p>

    </div>
  )}