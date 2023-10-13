import { useState } from "react"
import { Button } from "../Button/component";

export const Dish = ({name}) => {
    const [amount, setAmount] = useState(0);

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