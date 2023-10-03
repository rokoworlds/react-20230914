import classNames from 'classnames';
import styles from './styles.module.css';

export const Header = ({className}) => {
    return (
    <header className={classNames(styles.navbar, className)}>
        <h1 >GOOD FOOD</h1>
    </header>)
}