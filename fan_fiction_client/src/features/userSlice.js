import {createSlice} from '@reduxjs/toolkit'

const userSlice =createSlice({

    name: 'user',
    initialState: {
        isSignedIn:false,
        userData:null,
        searchInput:'search',
        movieData: null
    },

    reducers: {
        setSignedIn: (state, action) => {
            state.isSignedIn = action.payload
        },
        setUserData: (state, action) => {
            state.userData = action.payload
        },
        setInput: (state, action) => {
            state.searchInput = action.payload
        },
        setmovieData: (state, action) => {
            state.movieData = action.payload
        },
    }
})

export const {
    setSignedIn, 
    setUserData, 
    setInput,
     setmovieData
    } = userSlice.actions;

export const selectSignedIn = (state) => state.user.isSignedIn;
export const selectUserData = (state) => state.user.userData;
export const selectUserInput = (state) => state.user.searchInput;
export const selectMovieData = (state) => state.user.movieData;