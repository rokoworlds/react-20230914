import classNames from "classnames";
import { Footer } from "../Footer/component";
import { Header } from "../Header/component";
import styles from './styles.module.css'

export const Layout = ({children}) => {
    return (
        
        <div>
            <div className = {classNames(styles.root)}>
                <Header className = {styles.header} />
                <main>
                    {children}
                </main>
                <Footer className={styles.footer}/>
            </div>
            <div id="modal-container" className={styles.modalContainer}></div>
        </div>
    )
}