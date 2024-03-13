import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "",
    password: ""
}

export const authCredSlice = createSlice({
    name: 'authCred',
    initialState,
    reducers: {
        setAuthCred: (state, action) => {
            state.username = action.payload.username;
            state.password = action.payload.password;
        }
    },
})

export const { setAuthCred } = authCredSlice.actions;
export default authCredSlice.reducer;