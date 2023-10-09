import { useState } from "react"
import { Button } from "../Button/component";
import styles from './styles.module.css'

export const Dish = ({dish}) => {
    const [amount, setAmount] = useState(0)

    return (
        <div>
            {dish.name} 
            - 
            <Button 
                title={'-'} 
                onClick={() => setAmount(amount - 1)} 
                disabled={amount === 0}
                className={styles.button}
            />
            {amount}
            <Button 
                title={'+'} 
                onClick={() => setAmount(amount + 1)} 
                disabled={amount === 5}
                className={styles.button}
            />
        </div>
    )
}