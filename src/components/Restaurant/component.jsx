import { CreateReviewModal } from "../CreateReviewModal/component";
import { MenuContainer } from "../Menu/container";
import { ReviewsContainer } from "../Reviews/container";
import styles from './styles.module.css'


export const Restaurant = ({restaurant}) => {
    console.log(restaurant.id)
    return (
        <div className={styles.restaurant}>
            <h2 className={styles.title}>{restaurant.name}</h2>
            <MenuContainer restaurantId={restaurant.id}/>
            <ReviewsContainer restaurantId={restaurant.id} />
            <CreateReviewModal />
        </div>
    )
}