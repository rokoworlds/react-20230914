import { useSelector } from "react-redux"
import { selectReviewById } from "../../redux/entities/review/selectors"
import { selectUserById } from "../../redux/entities/user/selectors";

export const Review = ({reviewId}) => {
    const text = useSelector((state) => selectReviewById(state, reviewId).text);
    const userId = useSelector((state) => selectReviewById(state, reviewId).userId);
    const user = useSelector((state) => selectUserById(state, userId).name)

    return <div> {user} : {text}</div>
}