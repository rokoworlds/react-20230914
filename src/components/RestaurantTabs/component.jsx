import { Tab } from "../Tab/component";

export const RestaurantTabs = ({restaurants, onTabSelect, currentRestaurantIndex, className}) => {
    return (
        <div className={className}>
            {restaurants.map((restaurant, index) => (
                <Tab 
                    key={restaurant.id}
                    onClick={() => onTabSelect(index)} 
                    title={restaurant.name}
                    isActive={currentRestaurantIndex === index}
                />
                
            ))}
        </div>
    );
};