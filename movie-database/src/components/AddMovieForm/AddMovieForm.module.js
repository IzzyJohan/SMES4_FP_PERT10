import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
import Button from "../ui/Button";
import styles from "./AddMovieForm.module.css";

function AddMovieForm(props) {
    // Destructing props
    const { movies, setMovies } = props;

    // Membuat state object 
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        poster: "",
        genre: "horror",
    });

    // Membuat fungsi handleChange untuk menghandel semua input
    function handleChange(e) {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    // Membuat state object title, date, dan poster error/empty
    const [formError, setFormError] = useState({
        isTitleError:false,
        isDateError:false,
        isPosterError:false,
    })

    const {isTitleError, isDateError, isPosterError} = formError

    const {title, date, poster, genre} = formData;

    function validate() {
        // Jika title kosong, maka set error title true
        if(title === ""){
            setFormError({
                ...formError,
                isTitleError:true,
            });
            return false;
        }
        //jika date kosong, maka set error title true
        else if(date === ""){
            setFormError({
                ...formError,
                isTitleError:false,
                isDateError:true,
            });
            return false;
        }
        //jika poster kosong, maka set error title true
        else if(poster === ""){
            setFormError({
                ...formError,
                isTitleError:false,
                isDateError:false,
                isPosterError:true
            });
            return false;
        }else{
            setFormError({
                ...formError,
                isTitleError:false,
                isDateError:false,
                isPosterError:false
            });
            return true;
        }
    }

    function addMovie() {
        // Siapkan movie yang ingin diinput
        const movie = {
            id: nanoid(),
            title: title,
            year: date,
            type: "Movie",
            poster: poster,
            genre: genre,
        }
        
        // Add movie to movies;
        setMovies([...movies, movie]);
    }
    
    function handleSubmit(e) {
        // Mencegah prilaku default: refresh page
        e.preventDefault();

        validate() && addMovie();
    }

    return(
            <div className={styles.container}>
                <section className= {styles.movieform}>
                    <div className={styles.movieform__imagesection}>
                        <img className={styles.movieform__image} src="https://picsum.photos/270/270" alt="" />
                    </div>
                    <div className={styles.movieform__formsection}>
                        <h2 className={styles.movieform__title}>Add Movie</h2>
                        <form className={styles.movieform__form} onSubmit={handleSubmit} action="">
                            <div className={styles.movieform__titlegroup}>
                                <label className={styles.movieform__formlabel}>Movie</label><br />
                                <input className={styles.movieform__forminput} onChange={handleChange} type="text" name="title" value={title} /><br />
                                {/**
                                 * Jika error title true: maka muncul error
                                 * Jika tidak, munculkan string kosong
                                 */}
                                {isTitleError && <Alert>Title can't be empty</Alert>}
                            </div>
                            <div className={styles.movieform__dategroup}>
                                <label className={styles.movieform__formlabel}>Year</label><br />
                                <input className={styles.movieform__forminput} onChange={handleChange} type="number" name="date" value={date} /><br />
                                {/**
                                 * Jika error date true: maka muncul error
                                 * Jika tidak, munculkan string kosong
                                 */}
                                {isDateError && <Alert>Date can't be empty</Alert>} 
                            </div>
                            <div className={styles.movieform__postergroup}>
                                <label className={styles.movieform__formlabel}>Poster</label><br />
                                <input className={styles.movieform__forminput} onChange={handleChange} type="text" name="poster" value={poster} placeholder="Link here" /><br />
                                {/**
                                 * Jika error poster true: maka muncul error
                                 * Jika tidak, munculkan string kosong
                                 */}
                                {isPosterError && <Alert>Poster can't be empty</Alert>} 
                            </div>
                            <div className={styles.movieform__genregroup}>
                                <label className={styles.movieform__formlabel}>Genre</label><br />
                                <select className={styles.movieform__genre} name="genre" id="genre" onChange={handleChange} value={genre} placeholder="genre">
                                    <option value="horror">Horror</option>
                                    <option value="romance">Romance</option>
                                    <option value="comedy">Comedy</option>
                                    <option value="action">Action</option>
                                    <option value="drama">Drama</option>
                                </select>
                            </div>
                            <Button variant="secondary" full size="md">Add</Button>
                        </form>
                    </div>
                </section>
            </div>
    );
}

export default AddMovieForm;