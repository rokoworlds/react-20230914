import { useSelector } from "react-redux";
import { CreateReviewModal } from "../CreateReviewModal/component";
import { Menu } from "../Menu/component";
import { Reviews } from "../Reviews/component";
import styles from './styles.module.css'
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";


export const Restaurant = ({restaurantId}) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));
    return (
        <div className={styles.restaurant}>
            <h2 className={styles.title}>{restaurant.name}</h2>
             <Menu dishesIds={restaurant.menu} />
            <Reviews reviewsIds={restaurant.reviews} />
            <CreateReviewModal />
        </div>
    )
}