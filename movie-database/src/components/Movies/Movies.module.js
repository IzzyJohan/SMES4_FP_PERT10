import Movie from "../Movie/Movie.module";
import styles from "./Movies.module.css";
import { nanoid } from "nanoid";


function Movies(props) {
    // Destructing props
    const { movies, setMovies } = props;

    // Membuat fungsi tambah film
    // Dijalankan ketika tombol diklik
    function tambahFilm() {
        const movie = {
            id: nanoid(),
            title: "Spiral Jigsaw",
            year: "2021",
            type: "Movie",
            poster: "https://picsum.photos/300/400"
        };

        // Menambahkan movie ke state movies
        // Spread operator: Copy and merge array
        setMovies([...movies, movie]);
    }

    return(
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>Latest Movies</h2>
                <div className={styles.movies__container}>
                    {/**
                     * Looping data movies: map.
                     * Render Component Movie
                     * Kirim props movie
                     */}
                    {movies.map(function (movie){
                        return <Movie key={movie.id} movie={movie} />;
                    })}
                </div>
                {/** Menambahkan event onClick */}
                <button onClick={tambahFilm}>Add Movie</button>
            </section>
        </div>
    );
}

export default Movies;