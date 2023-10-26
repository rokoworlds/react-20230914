import { ReviewContainer } from '../Review/container';

export const Reviews = ({reviews}) => {
    return (
        <ul>
            {reviews.map((id) => (
                <li key={id}>
                    <ReviewContainer reviewId={id} /> 
                </li>
            ))}
        </ul>
    )
}