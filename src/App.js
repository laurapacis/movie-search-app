import React, { useState } from 'react';
import Search from './components/Search';
import MovieCard from './components/MovieCard';
import Footer from './components/Footer';
import './App.css';

function App() {
  const myApiKey = process.env.REACT_APP_API_KEY;
  const [search, setSearch] = useState('');
  const [moviesList, setMoviesList] = useState([]);
  const changeHandler = (text) => {
    setSearch(text)  
  }

  const submitHandler = () => {
    fetch(`http://www.omdbapi.com/?apikey=${myApiKey}&s=${search}`)
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
      <Search changeHandler={changeHandler} submitHandler={submitHandler} />
      {moviesList && moviesList.length > 0 ? (
        moviesList.map((item, index) => {
          return <MovieCard key={index} id={item.imdbID} />
        })
        
      ) : (
          <p>Couldn't find any movie. Please try again.</p>
        )}
      <Footer />
    </div>
  );
}

export default App;
