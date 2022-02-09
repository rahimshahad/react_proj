import React from "react";
import { connect } from "react-redux";
import { Button } from "./styled-components/Button.style";
// import EditMovieForm from "./EditMovieForm";
import { deleteMovie } from "../actions/moviesActions";
import { Link } from "react-router-dom";
import {editMovie} from "../actions/moviesActions"
import {useState} from 'react'
// import { addReview } from "../actions/moviesActions";

const MoviesList = ({ movies, deleteMovie, editMovie, addReview}) => {
  const [filterMovies, setFilterMovies] = useState([])
  const handleSubmit = (e, movieID) => {
    e.preventDefault();
    deleteMovie(movieID);
    // console.log("movieID", movieID);
  };

  const handleChange = (e) =>{
    const search = e.target.value.toLowerCase()
    const filterMovie = movies.filter(movie => movie.title.toLowerCase().includes(search))
    setFilterMovies(filterMovie)
  }
  return (
    <div className="movies-list">
      <center> 
      <h1>List of Movies:</h1>
      <ul>
        {filterMovies.map((movie) => (
          <li key={movie.id}>
            <h1> {movie.title}</h1>
              <p><strong>Plot:</strong> {movie.plot}</p>
               <p> Setting: {movie.setting}</p> 
               <p>  Genre: {movie.genre} </p>
            <h3>Reviews</h3>
            <ul>
              {movie.reviews.map((review) => (
                <li>{review.content}</li>
              ))}
            </ul>
            <Link to={`movies/${movie.id}/edit`}>
              <Button onClick={() => editMovie(movie.id)}> Edit Movie </Button>
            </Link>
            <Button onClick={(e) => handleSubmit(e, movie.id)}>
              Delete Movie
            </Button>
            {/* <Link to={`movies/${movie.id}/review/new`}> 
            <Button>
              Add Review
            </Button>
            </Link> */}
          </li>
        ))}
      </ul>
      </center>

    <form>
      <label> Search:</label>
      <input type="text" onChange={handleChange}/>
    </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  const {
    movies: { movies }
  } = state;
  return { movies };
};

export default connect(mapStateToProps, { deleteMovie, editMovie})(MoviesList);
