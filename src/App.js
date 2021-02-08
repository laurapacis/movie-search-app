import React, { useState, useEffect } from 'react';

import Search from './components/Search';
import MovieCard from './components/MovieCard';
import './App.css';



function App() {
  const myApiKey = process.env.REACT_APP_API_KEY;
  const [search, setSearch] = useState('');
  const [moviesList, setMoviesList] = useState([]);
  const changeHandler = (text) => {
    setSearch(text)  
  }

  const submitHandler = () => {
   // console.log("...searching")
    fetch(`http://www.omdbapi.com/?apikey=343a08fc&s=${search}`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data);
        setMoviesList(data.Search)
      })
  }

  return (
    <div id="app">
      Movie App
      <Search changeHandler={changeHandler} submitHandler={submitHandler} />
      {moviesList && moviesList.length > 0 ? (
        moviesList.map((item, index) => {
          return <MovieCard key={index} id={item.imdbID} />
        })
        
      ) : (
          <p> couldnt find any movie. please search again.</p>
        )}
    </div>
  );
}

export default App;
