import React from "react";
import { connect } from "react-redux";
import { Button } from "../styled-components/Button.style";
// import EditMovieForm from "./EditMovieForm";
import { deleteMovie } from "../actions/moviesActions";
import { Link } from "react-router-dom";
import {editMovie} from "../actions/moviesActions"
import { addReview } from "../actions/moviesActions";

const MoviesList = ({ movies, deleteMovie, editMovie, addReview}) => {
  const handleSubmit = (e, movieID) => {
    e.preventDefault();
    deleteMovie(movieID);
    console.log("movieID", movieID);
  };
  return (
    <div className="movies-list">
      <h1>List of Movies:</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title} - {movie.plot} - {movie.setting} - {movie.genre}
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
            <Link to={`movies/${movie.id}/review/new`}> 
            <Button onClick={()=> addReview()}>
              Add Review
            </Button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  const {
    movies: { movies }
  } = state;
  return { movies };
};

export default connect(mapStateToProps, { deleteMovie, editMovie, addReview })(MoviesList);
