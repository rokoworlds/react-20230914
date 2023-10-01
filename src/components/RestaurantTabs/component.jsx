import { Tab } from "../Tab/component"

export const RestaurantTabs = ({restaurants, onTabSelect}) => {
    return (
        <div>
            {restaurants.map((restaurant, index) => (
                <Tab 
                    key={restaurant.id}
                    onClick={() => onTabSelect(index)} 
                    title={restaurant.name}
                />
                
            ))}
        </div>
    );
};