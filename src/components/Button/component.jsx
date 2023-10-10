import classNames from "classnames";
import styles from './styles.module.css'
import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme";

export const Button = ({title, onClick, disabled, isActive, style, className}) => {

    const {theme} = useContext(ThemeContext);
    return (
        <button 
            className={classNames(
                className, 
                styles.button, 
                disabled && styles.disabled, 
                theme === 'fire' ? styles.fire : styles.earth,
                styles[style],
                isActive && styles.active,
                )}
            onClick={onClick} 
            disabled={disabled}
        >
            {title}
        </button> 
    )
}