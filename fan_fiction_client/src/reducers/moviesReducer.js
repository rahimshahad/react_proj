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

    default:
      return state;
  }
};
