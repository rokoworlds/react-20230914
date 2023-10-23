import { DishContainer } from '../Dish/container';

export const Menu = ({menu}) => {

    return (
        <ul>
            {menu.map((id) => (
                <li key={id}>
                    <DishContainer dishId={id} />
                </li>
            ))}
        </ul>
    )
}