import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviewsByRestaurant } from "./thunk/get-reviews";

const reviewEntityAdapter = createEntityAdapter();

const { reducer } = createSlice({
    name: 'review',
    initialState: reviewEntityAdapter.getInitialState(),
    extraReducers: (builder) => 
        builder
            .addCase(getReviewsByRestaurant.fulfilled,
                
                (state, {payload} = {}) => {
                    reviewEntityAdapter.setMany(state, payload);
                })
});

export default reducer;