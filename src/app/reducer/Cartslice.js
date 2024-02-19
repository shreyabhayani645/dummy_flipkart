import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const CartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state,action) => {
      const item=state.value.find(item=>item.id == action.payload.id);
      if(item)
      {
        item.qut++;
      }
    },
    decrement: (state,action) => {
      const item=state.value.find(item=>item.id == action.payload.id);
      if(item && item.qut > 0)
      {
        item.qut--;
      }
    },
    cartdata: (state, action) => {
     state.value.push(action.payload)
     action.payload.qut=1;
    //  console.log(action.payload)
    },
  },
})

export const {  increment, decrement,cartdata } = CartSlice.actions

export default CartSlice.reducer;
