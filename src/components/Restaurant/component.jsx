// import { CreateReview } from "../CreateReview/component";
import { Menu } from "../Menu/component";
import { Portal } from "../Modal/Portal/component";
import { Reviews } from "../Reviews/component";
import styles from './styles.module.css'


export const Restaurant = ({restaurant, className}) => {
    return (
        <div className={className}>
            <h2 className={styles.title}>{restaurant.name}</h2>
            <Menu dishes={restaurant.menu} />
            <Reviews reviews={restaurant.reviews} /> 
            <Portal />
        </div>
    )
}