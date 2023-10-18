import classNames from "classnames";
import styles from './styles.module.css'
import { RestaurantTabContainer } from "../RestaurantTab/container";

export const RestaurantTabs = ({restaurantIds, onTabSelect, currentRestaurantIndex}) => {
   
    return (
        <div className={classNames(styles.tabs)}>
            {restaurantIds.map((id) => (
                <RestaurantTabContainer 
                    key={id}
                    onClick={() => onTabSelect(id)} 
                    restaurantId={id}
                    isActive={currentRestaurantIndex === id}
                />
                
            ))}
        </div>
    );
};