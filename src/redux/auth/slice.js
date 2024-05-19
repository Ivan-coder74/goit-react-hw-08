import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { logIn, logOut, register, getCurrentUser } from "./operations";

const INITIAL_STATE = {
    user: 
    { name: null,
         email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    loading: false,
    error: false,
}
const authSlice = createSlice({
    name: 'auth',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => 
        builder
        .addCase(register.fulfilled, (state, action) => {
            state.loading = false;
            state.token = action.payload.token;
            state.user.name = action.payload.user.name;
            state.user.email = action.payload.user.email;
            state.isLoggedIn = true;
        })
        .addCase(logIn.fulfilled, (state, action) => {
            state.loading = false;
            state.token = action.payload.token;
            state.user.name = action.payload.user.name;
            state.user.email = action.payload.user.email;
            state.isLoggedIn = true;
        })
        .addCase(logOut.fulfilled,() => {
            return INITIAL_STATE;
        })
        .addCase(getCurrentUser.pending, (state) => {
            state.loading = true;
            state.error = false;
            state.isRefreshing = false;
        })
        .addCase(getCurrentUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user.name = action.payload.name;
            state.user.email = action.payload.email;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        })
        .addCase(getCurrentUser.rejected, (state) => {
            state.loading = false;
            state.error = true;
            state.isRefreshing = false;
        })
        .addMatcher(isAnyOf(register.pending, logIn.pending, logOut.pending), (state) => {
            state.loading = true;
            state.error = false;
        })
        .addMatcher(isAnyOf(register.rejected, logIn.rejected, logOut.rejected), (state) => {
            state.loading = false;
            state.error = true;
        })
})
export const authReducer = authSlice.reducer;