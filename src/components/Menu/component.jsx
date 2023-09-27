/* eslint-disable react/jsx-key */
import { restaurants } from '../../constant/mock';
import { DishElement } from '../DishElement/component';

export const Menu = ({index}) => {
    return (
        <div>
            <ul>
                {restaurants[index].menu.map(({name}) => (
                    <DishElement title={name} />
                ))}
            </ul>
        </div>
    )
}