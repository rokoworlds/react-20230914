import classNames from "classnames";
import { Button } from "../Button/component";
import styles from './styles.module.css'

export const Tab = ({onClick, title, isActive}) => {
    return (
        <Button 
            onClick={onClick} 
            title={title} 
            className={classNames(styles.button, isActive && styles.active)}
        />
    )
}
