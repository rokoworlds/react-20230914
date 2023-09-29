/* eslint-disable react/jsx-key */
import { Button } from "../Button/component"

export const Tab = ({onClick, title}) => {
    return (
        <Button 
            onClick={onClick} 
            title={title} 
        />
    )
}