import classNames from "classnames";
import { Button } from "../Button/component";
import styles from './styles.module.css'
import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme";

export const Tab = ({onClick, title, isActive}) => {
    const {theme} = useContext(ThemeContext)
    return (
        <Button 
            onClick={onClick} 
            title={title} 
            className={classNames(
                styles.button, 
                isActive && styles.active,
                theme === 'fire' ? styles.fire : styles.earth
                )}
        />
    )
}
