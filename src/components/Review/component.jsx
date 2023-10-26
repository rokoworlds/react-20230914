import { UserContainer } from "../User/container"

export const Review = ({review}) => {
    return <div> <UserContainer userId={review.userId} /> : {review.text}</div>
};