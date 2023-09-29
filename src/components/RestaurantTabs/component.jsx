/* eslint-disable react/jsx-key */
import { Tab } from "../Tab/component"

export const RestaurantTabs = ({restaurants, onTabSelect}) => {
    return (
        <div>
            {restaurants.map((restaurant, index) => (
                <Tab 
                    onClick={() => onTabSelect(index)} 
                    title={restaurant.name}
                />
                
            ))}
        </div>
    );
};