import { useSelector } from "react-redux";
import { Button } from "../Button/component";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";


export const Tab = ({onClick, restaurantId, isActive}) => {
    const title = useSelector((state) => selectRestaurantById(state, restaurantId).name)
    return (
        <Button 
            onClick={onClick} 
            isActive={isActive}
            style={'large'}
        >
            {title}
        </Button>
    )
}
