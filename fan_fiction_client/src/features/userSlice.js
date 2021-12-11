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