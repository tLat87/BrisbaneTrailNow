import { createSlice } from '@reduxjs/toolkit';

const saveSlice = createSlice({
    name: 'savedPlaces',
    initialState: [],
    reducers: {
        savePlace: (state, action) => {
            const exists = state.find(place => place.id === action.payload.id);
            if (!exists) {
                state.push(action.payload);
            }
        },
        removePlace: (state, action) => {
            return state.filter(place => place.id !== action.payload.id);
        },
    },
});

export const { savePlace, removePlace } = saveSlice.actions;
export default saveSlice.reducer;
