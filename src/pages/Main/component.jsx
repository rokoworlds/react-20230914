import { useState } from "react";
import { Restaurant } from "../../components/Restaurant/component"
import { restaurants } from '../../constant/mock';
import { RestaurantTabs } from "../../components/RestaurantTabs/component";
import { ThemeProvider } from "../../contexts/Theme";
import { Layout } from "../../components/Layout/component";


export const MainPage = () => {
    const [currentRestaurantIndex, setCurrentRestaurantIndex] = useState(0);

    return (
        <ThemeProvider>
           <Layout>
                <RestaurantTabs
                    restaurants = {restaurants}
                    onTabSelect={setCurrentRestaurantIndex}
                    currentRestaurantIndex={currentRestaurantIndex}
                />
                <Restaurant 
                    restaurant = {restaurants[currentRestaurantIndex]}
                />
           </Layout>
        </ThemeProvider>
        
    )
}