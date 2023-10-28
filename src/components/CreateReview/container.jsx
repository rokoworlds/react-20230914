import { REQUEST_STATUS } from "../../constant/statuses";
import { useMakeRequest } from "../../hooks/useMakeRequest";
import { createReview } from "../../redux/entities/review/thunk/create-review";
import { CreateNewReview } from "./component"

export const CreateReviewContainer = ({restaurantId, onClose}) => {
    const [saveReviewStatus, saveReview] = useMakeRequest(createReview);

    if (saveReviewStatus === REQUEST_STATUS.pending) {
        return <div>Loading...</div>
    }

    return <CreateNewReview onSubmit={(form) => saveReview({restaurantId, newReview: form })} onClose={onClose} />  
}