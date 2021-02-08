import React, { useState, useEffect } from 'react';
import '../App.css'

function MovieCard(props) {
    const [movieData, setMovieData] = useState({});
    const myApiKey = process.env.REACT_APP_API_KEY;

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

    const getMovie = async () => {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${myApiKey}&i=${props.id}`)
        const data = await response.json()
        console.log("this is movie Data ", data);
        setMovieData(data)
    }

    useEffect(() => {
        getMovie()
    }, [])

    return (
        <div className="movie-card-container">
            <h2>Title: {movieData.Title}</h2>
            <h2>Year: {movieData.Year}</h2>
            <h2>Language: {movieData.Language}</h2>
            <h2>Country: {movieData.Country}</h2>
            <h2>Rating: {movieData.imdbRating}</h2>
            <p>Actors: {movieData.Actors}</p>
            <img src={movieData.Poster} alt={movieData.Title} />
        </div>
    )
}

export default MovieCard
