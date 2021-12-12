import React, { useState } from "react";
import { connect } from "react-redux";
import { Button } from "../styled-components/Button.style";
import EditMovieForm from "./EditMovieForm";
import { deleteMovie } from "../actions/moviesActions";
import { Link } from 'react-router-dom'

const MoviesList = ({ movies, deleteMovie }) => {
  // const [showEditForm, setShowEditForm] = useState(false);

  // const showForm = () =>{
  //   // debugger
  //   setShowEditForm(!showEditForm)
  // }

  const handleSubmit = (e, movieID) => {
    e.preventDefault();
    deleteMovie(movieID);
    console.log("movieID", movieID);
  };
  return (
    <div>
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
            <Link to= {`movies/${movie.id}/edit`}> 
            <Button > Edit Movie </Button>
            </Link>
            {/* {showEditForm && <EditMovieForm setShowEditForm={setShowEditForm}/>} */}
            <Button onClick={(e) => handleSubmit(e, movie.id)}>
              Delete Movie
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { movies: state.movies };
};

export default connect(mapStateToProps, { deleteMovie })(MoviesList);
