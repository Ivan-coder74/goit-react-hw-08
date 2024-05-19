import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE = {
    name: '',
}
const filtersSlice = createSlice({
    name: 'filters',
    initialState: INITIAL_STATE,
    reducers: {
        setFilterName(state, action) {
            state.name = action.payload;
        }
    }
})
export const { setFilterName } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer