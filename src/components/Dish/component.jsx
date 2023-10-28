import { Button } from "../Button/component";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/ui/cart";

export const Dish = ({dish, amount, dishId}) => {
    const dispatch = useDispatch();
    return (
        <div>
            {dish.name} 
            - 
            <Button 
                onClick={() => dispatch(cartActions.decrement(dishId))} 
                disabled={amount === 0}
                style={'small'}
            >
                -
            </Button>
            {amount}
            <Button 
                onClick={() => dispatch(cartActions.increment(dishId))} 
                disabled={amount === 5}
                style={'small'}
            >
                +
            </Button>
        </div>
    )
}