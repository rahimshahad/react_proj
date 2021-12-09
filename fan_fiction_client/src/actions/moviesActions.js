// an action to fetch all movies from api

export const fetchMovies = () =>{
    return (dispatch) => {
        fetch('http://localhost:3000/movies')
        .then(resp => resp.json())
        .then(movies => console.table('fetchMovies', movies))
    }
}