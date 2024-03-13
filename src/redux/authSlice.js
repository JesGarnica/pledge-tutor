import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
    loggedIn: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        login: (state) => {
            state.loggedIn = true;
        },
        logout: (state) => {
            state.loggedIn = false;
        },
        setLogin: (state, action) => {
            state.loggedIn = action.payload
        },
    },
})

export const { login, logout, setLogin, setToken } = authSlice.actions;
export default authSlice.reducer;