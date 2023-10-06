import { useState } from "react";
import { Restaurant } from "../../components/Restaurant/component"
import { restaurants } from '../../constant/mock';
import { RestaurantTabs } from "../../components/RestaurantTabs/component";
import { Header } from "../../components/Header/component";
import { Footer } from "../../components/Footer/component";
import styles from './styles.module.css'
import { ThemeProvider } from "../../contexts/Theme";


export const MainPage = () => {
    const [currentRestaurantIndex, setCurrentRestaurantIndex] = useState(0);

    return (
        <ThemeProvider>
            <div className = {styles.position}>
                <Header className = {styles.header} />
                <RestaurantTabs
                    restaurants = {restaurants}
                    onTabSelect={setCurrentRestaurantIndex}
                    currentRestaurantIndex={currentRestaurantIndex}
                    className={styles.tabs}
                />
                <Restaurant 
                    restaurant = {restaurants[currentRestaurantIndex]}
                />
                <Footer className={styles.footer}/>
            </div>
        </ThemeProvider>
        
    )
}