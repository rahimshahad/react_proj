const initialState = {
  movies: [],
  currentMovie: {},
};
export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      return { ...state, movies: [...action.payload] };
    case "ADD_MOVIE":
      return { ...state, movies: [...state.movies, action.payload] };
    case "DELETE_MOVIE":
      const undeleted = state.movies.filter(
        (movie) => movie.id !== action.payload
      );
      return { ...state, movies: [...undeleted] };
    case "EDIT_MOVIE":
      const movie = state.movies.find(
        (element) => element.id === action.payload
      );
      return { ...state, currentMovie: movie };
    case "UPDATE_MOVIE":
      const updatedMovie = action.payload
      const result = state.movies.map((item) => {
        return  item.id === updatedMovie.id ? updatedMovie : item
      })
      return {...state, movies: result, currentMovie:{}}
      case "ADD_REVIEW":
        const movieWithReview = state.movies.find(
          (movie) => movie.id === action.payload.movie_id
          // payload here is the review
          // the code above is finding the movie whose id matches the movie_id of the payload(review)
         )
        // state.movies.map((item) => console.table(item))
         return { 
         movies: state.movies.map((item) => console.log(item.first))
          // item.id === movieWithReview.id ? {...movieWithReview, reviews:[...movieWithReview.review, action.payload]} : item)}
         }
      //  map through movies 
    default:
      return state;
  }
};
