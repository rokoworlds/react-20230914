import { useState } from "react";
import { Restaurant } from "../../components/Restaurant/component"
import { restaurants } from '../../constant/mock';
import { RestaurantTabs } from "../../components/RestaurantTabs/component";
import { Header } from "../../components/Header/component";
import { Footer } from "../../components/Footer/component";
import styles from './styles.module.css'

export const MainPage = () => {
    const [currentRestaurantIndex, setCurrentRestaurantIndex] = useState(0);

    return (
        <div className = {styles.flex}>
            <Header className = {styles.header} />
            <RestaurantTabs
                restaurants = {restaurants}
                onTabSelect={setCurrentRestaurantIndex}
                currentRestaurantIndex={currentRestaurantIndex}
                className={styles.tabs}
            />
            <Restaurant 
                restaurant = {restaurants[currentRestaurantIndex]}
                className = {styles.restaurant}    
            />
            <Footer className={styles.footer}/>
        </div>
    )
}