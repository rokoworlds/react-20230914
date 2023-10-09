import classNames from "classnames";
import styles from './styles.module.css'

export const Button = ({title, onClick, disabled, className}) => {
    return (
        <button 
            className={classNames(className, styles.button, disabled && styles.disabled)}
            onClick={onClick} 
            disabled={disabled}
        >
            {title}
        </button>
    )
}