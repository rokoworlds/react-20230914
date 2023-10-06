import { Footer } from "../Footer/component";
import { Header } from "../Header/component";
import styles from './styles.module.css'

export const Layout = ({children}) => {
    return (
        
        <div className = {styles.position}>
            <div>
                <Header className = {styles.header} />
                <main>
                    {children}
                </main>
                <Footer className={styles.footer}/>
            </div>
            <div id="modal-container"></div>
        </div>
    )
}