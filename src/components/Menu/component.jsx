import { Dish } from '../Dish/component';

export const Menu = ({dishesIds}) => {

    return (
        <ul>
            {dishesIds.map((dishId) => (
                <li key={dishId}>
                    <Dish dishId={dishId} />
                </li>
            ))}
        </ul>
    )
}