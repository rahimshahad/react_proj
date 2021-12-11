const initialState = []
export const moviesReducer = (state = initialState, action) => {
    switch(action.type){
        case 'FETCH_MOVIES':
            return [...state, ...action.payload]
        case 'ADD_MOVIE':
            return [...state, ...action.payload]
        case 'DELETE_MOVIE':
            state = state.filter(movie => movie.id !== action.payload)
            return [...state]  
        case 'EDIT_MOVIE':
            [...state.map(movie => movie.id === action.payload.id ? action.payload : movie)]

        default:
            return state

    }
}