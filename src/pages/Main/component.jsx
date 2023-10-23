import { useEffect, useState } from "react";
import { ThemeProvider } from "../../contexts/Theme";
import { Layout } from "../../components/Layout/component";
import { RestaurantTabsContainer } from "../../components/RestaurantTabs/container";
import { RestaurantContainer } from "../../components/Restaurant/container";
import { useDispatch } from "react-redux";
import { getRestaurants } from "../../redux/entities/restaurant/thunks/get-restaurants";


export const MainPage = () => {
    const [currentRestaurantId, setCurrentRestaurantId] = useState();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getRestaurants())
    }, []);
    
    return (
        <ThemeProvider>
           <Layout>
                <RestaurantTabsContainer
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