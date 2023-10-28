import { useSelector } from "react-redux";
import { Reviews } from "./component"
import { selectRestaurantReviewsById } from "../../redux/entities/restaurant/selectors";
import { getReviewsByRestaurant } from "../../redux/entities/review/thunk/get-reviews";
import { getUsers } from "../../redux/entities/user/thunk/get-users";
import { REQUEST_STATUS } from "../../constant/statuses";
import { useRequest } from "../../hooks/useRequest";

export const ReviewsContainer = ({restaurantId}) => {
    const restaurantReviews = useSelector((state) => selectRestaurantReviewsById(state, restaurantId));
    
    const reviewsLoadingStatus = useRequest(getReviewsByRestaurant, restaurantId);
    
    const userLoadingStatus = useRequest(getUsers);
        
    if (reviewsLoadingStatus === REQUEST_STATUS.pending || userLoadingStatus === REQUEST_STATUS.pending) {
        return <div>Loading...</div>
    }
    
    return <Reviews reviews={restaurantReviews} /> 
}