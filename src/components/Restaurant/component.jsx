import { CreateReviewModal } from "../CreateReviewModal/component";
import { Menu } from "../Menu/component";
import { Reviews } from "../Reviews/component";
import styles from './styles.module.css'


export const Restaurant = ({restaurant}) => {
    return (
        <div className={styles.restaurant}>
            <h2 className={styles.title}>{restaurant.name}</h2>
             <Menu dishesIds={restaurant.menu} />
            <Reviews reviewsIds={restaurant.reviews} />
            <CreateReviewModal />
        </div>
    )
}