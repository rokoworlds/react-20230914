import classNames from "classnames";
import { Tab } from "../Tab/component";
import styles from './styles.module.css';

export const RestaurantTabs = ({restaurants, onTabSelect, currentRestaurantIndex, className}) => {
    return (
        <div className={classNames(styles.tabs, className)}>
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