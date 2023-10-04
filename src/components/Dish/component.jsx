import { useContext, useState } from "react"
import { Button } from "../Button/component";
import styles from './styles.module.css'
import { ThemeContext } from "../../contexts/Theme";
import classNames from "classnames";

export const Dish = ({dish}) => {
    const [amount, setAmount] = useState(0);
    const {theme} = useContext(ThemeContext);

    return (
        <div>
            {dish.name} 
            - 
            <Button 
                title={'-'} 
                onClick={() => setAmount(amount - 1)} 
                disabled={amount === 0}
                className={classNames(
                    styles.button,
                    theme === 'fire' ? styles.fire : styles.earth,
                    )}
            />
            {amount}
            <Button 
                title={'+'} 
                onClick={() => setAmount(amount + 1)} 
                disabled={amount === 5}
                className={classNames(
                    styles.button,
                    theme === 'fire' ? styles.fire : styles.earth,
                    )}
            />
        </div>
    )
}