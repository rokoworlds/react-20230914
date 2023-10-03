import { useState } from "react";
import { Restaurant } from "../../components/Restaurant/component"
import { restaurants } from '../../constant/mock';
import { RestaurantTabs } from "../../components/RestaurantTabs/component";


export const MainPage = () => {
    const [currentRestaurantIndex, setCurrentRestaurantIndex] = useState(0);

    return (
        <div>
            <RestaurantTabs
                restaurants={restaurants}
                onTabSelect={setCurrentRestaurantIndex}
            />
            <Restaurant restaurant={restaurants[currentRestaurantIndex]}/>
        </div>
    )
}