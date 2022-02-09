// an action to fetch all movies from api

export const fetchMovies = () => {
  console.log("c")
  return (dispatch) => {
    fetch("http://localhost:3000/movies")
      .then((resp) =>{
        console.log("e")
       return resp.json()
      })
      .then((movies) => dispatch({ type: "FETCH_MOVIES", payload: movies }));
  };
  console.log("d")
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
  console.log(movie.id)
  return (dispatch) => {
    fetch(`http://localhost:3000/movies/${movie.id}`, {
      method: "PATCH",
      body: JSON.stringify(movie),
      headers: { "content-type": "application/json" },
    })
      .then((resp) => resp.json())
      .then((movie) => dispatch({ type: "UPDATE_MOVIE", payload: movie }))
      .catch((error) => console.log(error));
  };
  
};

// export const addReview = (review) =>{
//   return (dispatch) =>{
//     fetch('http://localhost:3000/reviews',{
//       method: "POST",
//       body: JSON.stringify(review),
//       headers: { "Content-Type": "application/json" },
//     })
//     .then(resp => resp.json())
//     .then((review) => 
//     dispatch({ type: "ADD_REVIEW", payload: review }));
//   }
// }
