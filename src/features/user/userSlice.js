import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    name: "",
    email: "",
    photo: ""
};
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserLoginDetails: (state, action)=>{
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
            localStorage.setItem("userLoginData", JSON.stringify({userName:state.name, userPhoto: state.photo}))
        },
        setSignOut: (state)=>{
            state.name = null;
            state.email = null;
            state.photo = null;
            localStorage.setItem("userLoginData", JSON.stringify(null));
        }
    }
});
export default userSlice.reducer;
export const {setUserLoginDetails, setSignOut} = userSlice.actions;
