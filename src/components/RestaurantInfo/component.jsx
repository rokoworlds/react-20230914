import { Menu } from "../Menu/component";
import { Reviews } from "../Reviews/component";
import { restaurants } from '../../constant/mock';


export const RestaurantInfo = ({index}) => {
    return (
        <div>
            <h2>{restaurants[index].name}</h2>
            <Menu index={index} />
            <Reviews index={index} /> 
        </div>
    )
}