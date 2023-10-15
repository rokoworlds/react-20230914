import classNames from "classnames";
import { Tab } from "../Tab/component";
import styles from './styles.module.css'

export const RestaurantTabs = ({restaurantIds, onTabSelect, currentRestaurantIndex, className}) => {
   
    return (
        <div className={classNames(styles.tabs, className)}>
            {restaurantIds.map((restaurantId, index) => (
                <Tab 
                    key={restaurantId}
                    onClick={() => onTabSelect(index)} 
                    restaurantId={restaurantId}
                    isActive={currentRestaurantIndex === index}
                />
                
            ))}
        </div>
    );
};