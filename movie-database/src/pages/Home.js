import { useState } from "react";
import AddMovieForm from "../components/AddMovieForm/AddMovieForm.module";
import Footer from "../components/Footer/Footer.module";
import Hero from "../components/Hero/Hero.module";
import Movies from "../components/Movies/Movies.module";
import data from "../components/utils/data";

function Home() {

  const [movies, setMovies] = useState(data); 

  /**
   * Mengangkat state movies: lifting state
   */

  return(
    <div>
      <Hero />
      <Movies movies={movies} setMovies={setMovies} />
      <AddMovieForm movies={movies} setMovies={setMovies} />
    </div>
  );
}

export default Home;