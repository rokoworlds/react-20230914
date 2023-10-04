import classNames from 'classnames';
import styles from './styles.module.css';
import { Button } from '../Button/component';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/Theme';

export const Header = ({className}) => {
    const {theme, setTheme} = useContext(ThemeContext);
    return (
    <header className={classNames(styles.navbar, className)}>
        <h1 >GOOD FOOD</h1>
        <Button className={styles.button} title={theme} onClick={() => setTheme(theme === 'earth' ?'fire' : 'earth')}/>
    </header>)
}