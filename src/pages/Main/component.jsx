import { useState } from "react";
import { Restaurant } from "../../components/Restaurant/component"
import { RestaurantTabs } from "../../components/RestaurantTabs/component";
import { ThemeProvider } from "../../contexts/Theme";
import { Layout } from "../../components/Layout/component";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors";


export const MainPage = () => {
    const [currentRestaurantIndex, setCurrentRestaurantIndex] = useState(0);
    const restaurantIds = useSelector((state) => selectRestaurantIds(state));

    return (
        <ThemeProvider>
           <Layout>
                <RestaurantTabs
                    restaurantIds = {restaurantIds}
                    onTabSelect={setCurrentRestaurantIndex}
                    currentRestaurantIndex={currentRestaurantIndex}
                />
                <Restaurant 
                    restaurantId = {restaurantIds[currentRestaurantIndex]}
                />
           </Layout>
        </ThemeProvider>
        
    )
}