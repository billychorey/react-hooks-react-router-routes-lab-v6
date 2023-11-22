import React, {useEffect, useState} from "react";
import NavBar from '../components/NavBar';
import MovieCard from '../components/MovieCard';

function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/movies')
      .then(res => res.json())
      .then(movies => setMovies(movies))
      .catch(error => console.log(error));
  }, []);
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        <MovieCard movies={movies}/>

      </main>
    </>
  );
};

export default Home;
