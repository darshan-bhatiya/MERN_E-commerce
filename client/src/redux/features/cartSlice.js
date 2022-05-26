import {createSlice} from '@reduxjs/toolkit';
// import { json } from 'express/lib/response';

//initilize cart in localStoreage
const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

const cartItem = (payload) => {                            
    return{ name: payload.name,
            _id: payload._id,
            image: payload.image,
            varient: payload.varient,
            quantity: payload.quantity,
            prices: payload.prices,
            price: payload.prices[0][payload.varient] * payload.quantity}
    };

const cartSlice = createSlice({
    name : 'cart',
    initialState : {cartItems: cartItems},
    reducers: {
        addToCart(state, action){
            const alreadyExistindex = state.cartItems.findIndex((item) => item._id === action.payload._id);
            if (alreadyExistindex >= 0){
                  state.cartItems[alreadyExistindex] = cartItem(action.payload);
                // var updatedData = JSON.parse(localStorage["cartItems"]);
                // updatedData.map(item => item._id===action.payload._id ? cartItem : item);
                // localStorage["cartItems"] = JSON.stringify(updatedData);
            } else {
                state.cartItems.push(cartItem(action.payload));
                 //add item cart in localStoreage
                // localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            }              
        },

        incQuantity(state, action){
            const item = state.cartItems.findIndex((item) => item._id === action.payload._id);
                 state.cartItems[item].quantity++;
                 state.cartItems[item] = cartItem(state.cartItems[item])
        },

        decQuantity(state, action){
            const item = state.cartItems.findIndex((item) => item._id === action.payload._id);
                state.cartItems[item].quantity--; 
                state.cartItems[item] = cartItem(state.cartItems[item])
        }
        },
    }
);

export const {addToCart,incQuantity,decQuantity} = cartSlice.actions;

export default cartSlice.reducer;