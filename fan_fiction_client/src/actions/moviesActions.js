// an action to fetch all movies from api

export const fetchMovies = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/movies")
      .then((resp) => resp.json())
      .then((movies) => dispatch({ type: "FETCH_MOVIES", payload: movies }));
  };
};

export const addMovie = (movie) => {
  return (dispatch) => {
    fetch("http://localhost:3000/movies", {
      method: "POST",
      body: JSON.stringify(movie),
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => resp.json())
      .then((movie) => dispatch({ type: "ADD_MOVIE", payload: movie }));
  };
};

export const deleteMovie = (movieId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/movies/${movieId}`, {
      method: "DELETE",
    });
    dispatch({ type: "DELETE_MOVIE", payload: movieId });
  };
};

export const editMovie = (id) => ({ type: "EDIT_MOVIE", payload: id });

export const updateMovie = (movie) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/movies/${movie.id}`, {
      method: "PATCH",
      body: JSON.stringify(movie),
      headers: { "content-type": "application/json" },
    })
      .then((resp) => resp.json())
      .then((movie) => dispatch({ type: "EDIT_MOVIE", payload: movie }));
  };
};
