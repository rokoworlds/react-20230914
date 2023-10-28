import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviewsByRestaurant } from "./thunk/get-reviews";
import { createReview } from "./thunk/create-review";

const reviewEntityAdapter = createEntityAdapter();

const { reducer } = createSlice({
    name: 'review',
    initialState: reviewEntityAdapter.getInitialState(),
    extraReducers: (builder) => 
        builder
            .addCase(createReview.fulfilled, (state, {payload} = {}) => {
                reviewEntityAdapter.addOne(state, payload);
            })
            .addCase(getReviewsByRestaurant.fulfilled,
                
                (state, {payload} = {}) => {
                    reviewEntityAdapter.setMany(state, payload);
                })
});

export default reducer;