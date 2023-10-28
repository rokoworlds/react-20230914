import { useSelector } from "react-redux";
import { Dish } from "./component"
import { selectDishById } from "../../redux/entities/dish/selectors";
import { selectDishAmountById } from "../../redux/ui/cart/selectors";

export const DishContainer = ({dishId}) => {
    const dish = useSelector((state) => selectDishById(state, dishId));
    const amount = useSelector((state) => selectDishAmountById(state, dishId))

    if (!dish) {
        return null;
    }
    
    return <Dish dish={dish} amount={amount} dishId={dishId} />
};