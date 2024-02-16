import { createSlice } from "@reduxjs/toolkit";

const Cartslice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers:{
        additem: (state, action)=>{
            State.items.push(action.payload);
        },
        removeitem: (state, action)=>{
            state.items.pop();
        },
        clearcart: (state, action)=>{
            state.items.length = 0;
        },
    },
});