import classNames from "classnames";
import styles from './styles.module.css'
import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme";

export const Button = ({children, onClick, disabled, isActive, size, className}) => {

    const {theme} = useContext(ThemeContext);
    return (
        <button 
            className={classNames(
                className, 
                styles.button, 
                disabled && styles.disabled, 
                theme === 'fire' ? styles.fire : styles.earth,
                styles[size],
                isActive && styles.active,
                )}
            onClick={onClick} 
            disabled={disabled}
        >
            {children}
        </button> 
    )
}