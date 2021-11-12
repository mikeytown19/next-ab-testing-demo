import { useState, useEffect } from "react";
import Container from "../components/Container";
import Head from 'next/head'

export default function Pokemon() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, []);

  return (
    pokemon && (
      <Container size={{ "@initial": "1", "@bp1": "2" }}>
        <Head>
          <title>Pokemon: {pokemon.name}</title>
        </Head>
        <div>
          <h1>Pokemon</h1>
          <h2>{pokemon.name}</h2>
          <p>EXP: {pokemon.base_experience}</p>
        </div>
      </Container>
    )
  );
}
