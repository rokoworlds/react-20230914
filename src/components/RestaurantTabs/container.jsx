import { useSelector } from "react-redux";
import { RestaurantTabs } from "./component"
import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors";

export const RestaurantTabsContainer = (props) => {
    const restaurantIds = useSelector((state) => selectRestaurantIds(state));
    return <RestaurantTabs {...props} restaurantIds={restaurantIds} />
}