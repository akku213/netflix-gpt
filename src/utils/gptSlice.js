import { createSlice } from "@reduxjs/toolkit";

const gptSlice =  createSlice({
    name: 'gpt',
    initialState:{
        showGptSearch: false,
        gptMovies: null,
        results: null,
    },
    reducers:{
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGPTMovieResult: (state, action) =>{
            state.gptMovies = action.payload;
            state.results = action.payload.results;
        }
    },
});

export const { toggleGptSearchView, addGPTMovieResult } = gptSlice.actions;
export default gptSlice.reducer;