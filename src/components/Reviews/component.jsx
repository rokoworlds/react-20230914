/* eslint-disable react/jsx-key */
import { Review } from '../Review/component';

export const Reviews = ({reviews}) => {
    return (
        <ul>
            {reviews.map((review) => (
                <li>
                    <Review review={review} /> 
                </li>
            ))}
        </ul>
    )
}