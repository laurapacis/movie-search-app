# React Open Movie Database  (OMDb API)
In this project we will build Movie Search App in React Hooks.
this is an example about this project deployed with netlify 
[movie-search-app](https://compassionate-stonebraker-36a5b5.netlify.app/)
- to sign up for the api key : [omdbapi](https://www.omdbapi.com/apikey.aspx)
- to read about omdb api : [omdbapi](http://www.omdbapi.com/)
- this is the link to fetch : 
```javascript
http://www.omdbapi.com/?apikey=[yourkey]&
```
- There are three options to make request:
 
  Search(s=): Retrieves you all possible options.
  
```javascript
http://www.omdbapi.com/?apikey=[yourkey]&s=batman
```
 Title(t=): A movie title.
 ```javascript
http://www.omdbapi.com/?apikey=[yourkey]&t=wanted
```
ID(i=): a valid IMDB ID (e.g. tt1234567)
 ```javascript
http://www.omdbapi.com/?apikey=[yourkey]&i=tt1234567
```
Here’s a sample JSON response for a query of “Avengers Endgame”:
```javascript
http://www.omdbapi.com/?apikey=[yourkey]&s=Avengers Endgame
```
 ```javascript
 {  
   "Search":[  
      {  
         "Title":"Avengers: Endgame",
         "Year":"2019",
         "imdbID":"tt4154796",
         "Type":"movie",
         "Poster":"https://m.media-amazon.com/images/M/MV5BNGZiMzBkZjMtNjE3Mi00MWNlLWIyYjItYTk3MjY0Yjg5ODZkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg"
      }
   ],
   "totalResults":"1",
   "Response":"True"
}
 ```
 -   Title
-   Release Year
-   IMDb ID
-   Type (movie, series, or episode)
-   Movie Poster image

 ### ID or Title
 This endpoint will return more detailed results about a specific title you have in mind (IMDb ID or movie title required).
 Let’s take the IMDb ID (tt4154796) from the earlier “Avengers Endgame” response and plug it into this endpoint. Here is the response from our fetch:
 ```javascript
 {  
   "Title":"Avengers: Endgame",
   "Year":"2019",
   "Rated":"N/A",
   "Released":"26 Apr 2019",
   "Runtime":"N/A",
   "Genre":"Action, Adventure, Fantasy, Sci-Fi",
   "Director":"Anthony Russo, Joe Russo",
   "Writer":"Christopher Markus, Stephen McFeely, Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by), Jim Starlin (comic book)",
   "Actors":"Bradley Cooper, Brie Larson, Chris Hemsworth, Chris Evans",
   "Plot":"After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe.",
   "Language":"English",
   "Country":"USA",
   "Awards":"N/A",
   "Poster":"https://m.media-amazon.com/images/M/MV5BNGZiMzBkZjMtNjE3Mi00MWNlLWIyYjItYTk3MjY0Yjg5ODZkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg",
   "Ratings":[  

   ],
   "Metascore":"N/A",
   "imdbRating":"N/A",
   "imdbVotes":"N/A",
   "imdbID":"tt4154796",
   "Type":"movie",
   "DVD":"N/A",
   "BoxOffice":"N/A",
   "Production":"Marvel Studios",
   "Website":"N/A",
   "Response":"True"
}
 
  ```
  we can see that this function has a much more comprehensive result that includes:
  -   Title
-   Release Year
-   Rating
-   Release Date
-   Runtime
-   Genre(s)
-   Director(s)
-   Writer(s)
-   Actor(s)
-   Plot Summary
-   Language(s)
-   Country/Countries
-   Awards Won
-   Movie posters (URL of film image)
-   Ratings received
-   Metascore
-   IMDb Rating
-   IMDb Votes
-   IMDb ID
-   Type (movie, series, or episode)
-   DVD info
-   Box Office results
-   Production company
-   Website(s)
  
 

## how to start : 
- Create a new project folder, using `create-react-app`
- you need to create your functional component and to create a state to save the moviesList after fetching the data from the api, the state should be an array
import  React, {useState, useEffect} from  'react';
 ```javascript
const  App = () => {
const [moviesList, setMoviesList] = useState([]);
}
 ```
![enter image description here](https://drscdn.500px.org/photo/1021917306/m=900/v2?sig=2c4b4b9b6f9005ccb25a5794a89d97243f12ac6bc9fa22eb393a664c0e9c52fe)
