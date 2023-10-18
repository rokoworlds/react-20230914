import { DishContainer } from '../Dish/container';

export const Menu = ({dishesIds}) => {

    return (
        <ul>
            {dishesIds.map((dishId) => (
                <li key={dishId}>
                    <DishContainer dishId={dishId} />
                </li>
            ))}
        </ul>
    )
}