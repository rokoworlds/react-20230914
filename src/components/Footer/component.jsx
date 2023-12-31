import classNames from 'classnames'
import styles from './styles.module.css'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/Theme'

export const Footer = () => {
    const {theme} = useContext(ThemeContext)
    return (
        <footer 
            className={classNames(
                styles.footer, 
                theme === 'fire' ? styles.fire : styles.earth,
                )}
        ></footer>
        )
}