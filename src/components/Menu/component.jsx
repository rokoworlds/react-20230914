/* eslint-disable react/jsx-key */
import { Dish } from '../Dish/component';

export const Menu = ({dishes}) => {
    return (
        <ul>
            {dishes.map((dish) => (
                <li>
                    <Dish dish={dish} />
                </li>
            ))}
        </ul>
    )
}