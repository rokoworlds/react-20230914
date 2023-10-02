import { Tab } from "../Tab/component";
import styles from './styles.module.css'

export const RestaurantTabs = ({restaurants, onTabSelect, currentRestaurantIndex}) => {
    return (
        <div className={styles.flex}>
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