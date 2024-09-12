import { createSlice } from "@reduxjs/toolkit";

 const counterSlice = createSlice({

     name: 'counter',
     initialState:{
        value:0,
     },
     reducers: {
        increment : (state)=>state.value +=1,
        decrement : (state)=>state.value -=1,
        multiply : (state)=> state.value *=2,
        incrementByamount : (state,action)=>state.value += action.payload
     },

});

export const {increment,decrement,multiply,incrementByamount} = counterSlice.actions;

export default counterSlice.reducer;