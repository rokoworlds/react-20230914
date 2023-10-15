import { useState } from "react"
import { Button } from "../Button/component";
import { selectDishById } from "../../redux/entities/dish/selectors";
import { useSelector } from "react-redux";

export const Dish = ({dishId}) => {
    const [amount, setAmount] = useState(0);
    const name = useSelector((state) => selectDishById(state, dishId).name);

    return (
        <div>
            {name} 
            - 
            <Button 
                onClick={() => setAmount(amount - 1)} 
                disabled={amount === 0}
                style={'small'}
            >
                -
            </Button>
            {amount}
            <Button 
                onClick={() => setAmount(amount + 1)} 
                disabled={amount === 5}
                style={'small'}
            >
                +
            </Button>
        </div>
    )
}