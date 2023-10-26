import { useDispatch, useSelector } from "react-redux";
import { Reviews } from "./component"
import { selectRestaurantReviewsById } from "../../redux/entities/restaurant/selectors";
import { useEffect, useRef } from "react";
import { getReviewsByRestaurant } from "../../redux/entities/review/thunk/get-reviews";
import { getUsers } from "../../redux/entities/user/thunk/get-users";
import { selectRequestStatus } from "../../redux/ui/request/selectors";
import { REQUEST_STATUS } from "../../constant/statuses";

export const ReviewsContainer = ({restaurantId}) => {
    const reviewRequest = useRef();
    const userRequest = useRef();

    const restaurantReviews = useSelector((state) => selectRestaurantReviewsById(state, restaurantId));
    
    const restaurantLoadingStatus = useSelector((state) => selectRequestStatus(state, reviewRequest.current?.requestId));
    
    const userLoadingStatus = useSelector((state) => selectRequestStatus(state, userRequest.current?.requestId));
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        reviewRequest.current = dispatch(getReviewsByRestaurant(restaurantId));

        return () => {
            reviewRequest.current.abort();
            reviewRequest.current = null;
        }
    }, [restaurantId]);
    
    useEffect(() => {
        userRequest.current = dispatch(getUsers());
        return () => {
            userRequest.current.abort();
            userRequest.current = null;
        }
    }, []);
    
    if (restaurantLoadingStatus === REQUEST_STATUS.pending || userLoadingStatus === REQUEST_STATUS.pending) {
        return <div>Loading...</div>
    }
    
    return <Reviews reviews={restaurantReviews} /> 
}