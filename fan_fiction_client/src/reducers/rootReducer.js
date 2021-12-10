import { combineReducers } from "redux";
import { moviesReducer } from "./moviesReducer";
import { reviewsReducer } from "./reviewsReducer";

export const rootReducer = combineReducers({
    movies: moviesReducer,
    reviews: reviewsReducer
})