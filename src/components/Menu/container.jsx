import { useDispatch, useSelector } from "react-redux"
import { Menu } from "./component"
import { useEffect } from "react";
import { selectRestaurantMenuById } from "../../redux/entities/restaurant/selectors";
import { getDishesByRestaurant } from "../../redux/entities/dish/thunk/get-dishes";

export const MenuContainer = ({restaurantId}) => {
    const restaurantMenu = useSelector((state) => selectRestaurantMenuById(state, restaurantId));

    
    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(getDishesByRestaurant(restaurantId))
    }, [restaurantId]);
  
    
    return <Menu menu={restaurantMenu} />
}