import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        savedword: 'Saved word',
        meaning: 'Meaning',
        speechtype: 'Type of speech',
       
    },
    reducers: { //listens to see if something changes. all asking for individual changes. make copies
        chooseSavedword: (state, action) => { state.savedword = action.payload},
        chooseMeaning: (state, action) => { state.meaning = action.payload},
        chooseSpeechtype: (state, action) => { state.speechtype = action.payload},
        
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseSavedword, chooseMeaning, chooseSpeechtype } = rootSlice.actions;