import { ReviewContainer } from '../Review/container';

export const Reviews = ({reviewsIds}) => {
    return (
        <ul>
            {reviewsIds.map((id) => (
                <li key={id}>
                    <ReviewContainer reviewId={id} /> 
                </li>
            ))}
        </ul>
    )
}