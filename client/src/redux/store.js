import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from "./features/pizzaSlice";
import cartReducer from './features/cartSlice';

export default configureStore({
    reducer: {
        pizza: pizzaReducer,
        cart: cartReducer
    }
},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())