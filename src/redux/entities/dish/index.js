import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishesByRestaurant } from "./thunk/get-dishes";

const dishEntityAdapter = createEntityAdapter();

const { reducer } = createSlice({
    name: 'dish',
    initialState: dishEntityAdapter.getInitialState(),
    extraReducers: (builder) => builder
        .addCase(getDishesByRestaurant.fulfilled, 
            (state, {payload} = {}) => {
            dishEntityAdapter.setMany(state, payload);
        })
});

export default reducer;