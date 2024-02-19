import { configureStore } from '@reduxjs/toolkit';
import  CartSlice  from './reducer/Cartslice';


export const store = configureStore({
  reducer: {
     // state.value.push(action.payload)
     counter: CartSlice,
  },
})