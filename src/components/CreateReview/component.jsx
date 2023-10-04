import { useReducer } from "react"
import { Button } from "../Button/component";

const DEFAULT_VALUE = {
    user: '',
    text: '',
    rating: 5
};

const reducer = (state, action) => {
    switch (action?.type) {
        case 'setUser':
            return { ...state, user: action.payload };
        case 'setText':
            return { ...state, text: action.payload };
        case 'setRating':
            return { ...state, rating: action.payload};
        case 'reset':
            return { ...DEFAULT_VALUE };
        default:
            return state;
    }
}

export const CreateReview = () => {
    const [formValue, dispatch] = useReducer(reducer, DEFAULT_VALUE)

    console.log(formValue)
    return (
        <div>
            <h4>Create Review</h4>
            <div>
                <label>Name</label>
                <input type="text" value={formValue.user} onChange={(event) => dispatch({ type: 'setUser', payload: event.target.value })}/>
            </div>
            <div>
                <label>Review</label>
                <textarea name="review" rows={4} cols={40} value={formValue.text} onChange={(event) => dispatch({ type: 'setText', payload: event.target.value })}></textarea>
            </div>
            <div>
                <label>Rating</label>
                <select name="rating" value={formValue.rating} onChange={(event) => dispatch({ type: 'setRating', payload: Number(event.target.value) })}>
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                </select>
            </div>
            <Button title='Save' onClick={() => dispatch({type: 'reset'})} />
        </div>
        )
}