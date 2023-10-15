import { Review } from '../Review/component';

export const Reviews = ({reviewsIds}) => {
    return (
        <ul>
            {reviewsIds.map((reviewId) => (
                <li key={reviewId}>
                    <Review reviewId={reviewId} /> 
                </li>
            ))}
        </ul>
    )
}