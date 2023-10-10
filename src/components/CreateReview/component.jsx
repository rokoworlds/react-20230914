import { useReducer } from "react";
import { Button } from "../Button/component";
import styles from './styles.module.css'

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

export const CreateReview = ({onClose}) => {
    const [formValue, dispatch] = useReducer(reducer, DEFAULT_VALUE)
    return (
        <div className={styles.modal}>
            <h4>Create Review</h4>
            <div>
                <div>
                    <fieldset>
                        <legend>Name</legend>
                        <input className={styles.input} type="text" value={formValue.user} onChange={(event) => dispatch({ type: 'setUser', payload: event.target.value })}/>
                    </fieldset>
                </div>
                <div>
                    <fieldset>
                        <legend>Review</legend>
                        <textarea  className={styles.textarea} name="review" rows={10} cols={50} value={formValue.text} onChange={(event) => dispatch({ type: 'setText', payload: event.target.value })}></textarea>
                    </fieldset>
                </div>
            </div>
                <div>
                    <fieldset className={styles.selectContainer}>
                        <legend>Rating</legend>
                        <select className={styles.select} name="rating" value={formValue.rating} onChange={(event) => dispatch({ type: 'setRating', payload: Number(event.target.value) })}>
                            <option value="5">5 😍</option>
                            <option value="4">4 😀</option>
                            <option value="3">3 😊</option>
                            <option value="2">2 ☹️</option>
                            <option value="1">1 😡</option>
                        </select>
                    </fieldset>
                </div>
            {/* <Button title='Save' onClick={() => dispatch({type: 'reset'})} /> */}
            <div >
                <Button className={styles.button} title='Save' onClick={onClose} style={'reviewStyle'} />
                <Button className={styles.button} title='Close' onClick={onClose} style={'reviewStyle'} />
            </div>
        </div>
        )
}