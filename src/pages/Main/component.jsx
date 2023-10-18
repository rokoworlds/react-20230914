import { useState } from "react";
import { ThemeProvider } from "../../contexts/Theme";
import { Layout } from "../../components/Layout/component";
import { RestaurantTabsContainer } from "../../components/RestaurantTabs/container";
import { RestaurantContainer } from "../../components/Restaurant/container";


export const MainPage = () => {
    const [currentRestaurantId, setCurrentRestaurantId] = useState();
    
    return (
        <ThemeProvider>
           <Layout>
                <RestaurantTabsContainer
                    // restaurantIds = {restaurantIds}
                    onTabSelect={setCurrentRestaurantId}
                    currentRestaurantIndex={currentRestaurantId}
                />
                { currentRestaurantId && <RestaurantContainer 
                    restaurantId = {currentRestaurantId}
                />}
           </Layout>
        </ThemeProvider>
        
    )
}