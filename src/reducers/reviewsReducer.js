export const reviewsReducer = (state =[], action) => {
    switch(action.type){
        case 'FETCH_REVIEWS':
            return {
                reviews= action.payload  
            }
            default:
                    return state
    }
}