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
        <div className={styles.grid}>
            <Header />
            <RestaurantTabs
                restaurants={restaurants}
                onTabSelect={setCurrentRestaurantIndex}
                currentRestaurantIndex={currentRestaurantIndex}
            />
            <Restaurant restaurant={restaurants[currentRestaurantIndex]}/>
            <Footer />
        </div>
    )
}