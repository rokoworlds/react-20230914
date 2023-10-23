import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantReviewsById } from "../../restaurant/selectors";
import { selectReviewIds } from "../selectors";


export const getReviewsByRestaurant = createAsyncThunk(
    'review/getReviewsByRestaurant',
    async (restaurantId) => {
        const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`);
    return await response.json();
    },
    {
        condition: (restaurantId, {getState}) => {
            const state = getState();
            const restaurantReviews = selectRestaurantReviewsById(state, restaurantId);
            const reviewsIds = selectReviewIds(state);

            return (
                restaurantReviews && 
                restaurantReviews.some((reviewId) => !reviewsIds.includes(reviewId))
            )
        }
    }

)