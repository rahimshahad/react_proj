// an action to fetch all movies from api

export const fetchMovies = () =>{
    return (dispatch) => {
        fetch('http://localhost:3000/movies')
        .then(resp => resp.json())
        .then(movies => dispatch({type: 'FETCH_MOVIES', payload: movies}))
    }
}

export const addMovie = (movie) =>{
    return (dispatch) =>{ 
    fetch('http://localhost:3000/movies',{
        method:'POST',
        body: JSON.stringify(movie),
        headers: { 'Content-Type':'application/json'}
    })
        .then(resp => resp.json())
        .then(movie => dispatch({type: 'ADD_MOVIE', payload: movie}))
}
}