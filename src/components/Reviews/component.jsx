/* eslint-disable react/jsx-key */
import { restaurants } from '../../constant/mock';

export const Reviews = ({index}) => {
    return (
        <ul>
            {restaurants[index].reviews.map((item) => (
                <li>{item.user}: {item.text}</li>
            ))}
        </ul>
    )
}