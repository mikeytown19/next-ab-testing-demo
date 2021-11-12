import { useState, useEffect } from "react";
import Head from "next/head";
import Container from "../components/Container";
export default function StarWars() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/1/")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return !loading ? (
    <Container size={{ "@initial": "1", "@bp1": "2" }}>
      <Head>
        <title>Star Wars</title>
      </Head>
      <div>
        <h1>Star Wars</h1>
        <h2>{data.name}</h2>
        <p>{data.birth_year}</p>
        <p>
          The Star Wars saga is a series of five epic space opera films, set in
          the fictional galaxy of the Galactic Empire. The films are based on
          the novel series written by George Lucas.
        </p>
      </div>
    </Container>
  ) : (
    <div>Loading...</div>
  );
}
