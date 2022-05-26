import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
const axios = require('axios');

export  const getPizzas = createAsyncThunk("pizzas/getPizzas", async () => {
    return axios.get(`/api/placepizza/pizzas`).then(res => res.data)
});

const pizzaSlice = createSlice({
    name : 'pizzas',
    initialState : {
        pizzas : [],
        loading : true,
        error: '',
    },
    extraReducers: {
        [getPizzas.pending]: (state, action) => {
            state.loading = true;
        },
        [getPizzas.fulfilled]: (state, action) => {
            state.pizzas = action.payload;
            state.loading = false;
        },
        [getPizzas.rejected]: (state, action) => {
            state.loading = false;
        }
    }
});

export default pizzaSlice.reducer