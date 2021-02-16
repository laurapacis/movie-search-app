import React, { useState, useEffect } from 'react';
import '../App.css'

function MovieCard(props) {
    const [movieData, setMovieData] = useState({});
    const myApiKey = process.env.REACT_APP_API_KEY;
    
    // 1. fetch API with .then
    function getMovieData() {
        fetch(`http://www.omdbapi.com/?apikey=${myApiKey}&i=${props.id}`)
            .then((res) => {
                return res.json() // convert to json
            })
            .then((data) => {
                console.log("this is movie Data", data);
                setMovieData(data)
            })
    }

    // 2. fetch with async await
    const getMovie = async () => {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${myApiKey}&i=${props.id}`)
        const data = await response.json()
        setMovieData(data)
    }

    useEffect(() => {
        getMovie()
    }, [])

    return (
        <div className="movie-card-container">
            <div className="movie-info">
                <h1>{movieData.Title}</h1>
                <h2>Year: {movieData.Year}</h2>
                <h2>Language: {movieData.Language}</h2>
                <h2>Country: {movieData.Country}</h2>
                <h4>Rating: {movieData.imdbRating}</h4>
                <p>Actors: {movieData.Actors}</p>
                <img className="image-container" src={movieData.Poster} alt={movieData.Title} />
            </div>
        </div>
    )
}

export default MovieCard
