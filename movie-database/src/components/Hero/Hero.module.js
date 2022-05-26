/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import {StyledHero, Leftside, Rightside } from "./Hero.styled";

function Hero() {
    // Membuat state movies;
    const [movie, setMovie] = useState("");

    async function fetchMovie() {
        // Melakukan side effect: fetch data movie (api);
        const response = await fetch("https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590");

        const data = await response.json();

        // Set  movie dengan data movie hasil fetch 
        setMovie(data);
    }

    useEffect(fetchMovie, []);
    // Params kedua array kosong: agar useEffect tidak looping (fetch sekali).

    console.log(movie);

    return(
        <StyledHero>
            <section>
                <Leftside>
                    <h2>{movie.Title}</h2>
                    <h3>{movie.Genre}</h3>
                    <p>{movie.Plot}</p>
                    <Button variant="primary" size="lg">Watch</Button>
                </Leftside>
                <Rightside>
                    <img src={movie.Poster} alt="" />
                </Rightside>
            </section>
        </StyledHero>            
    );
}

export default Hero;