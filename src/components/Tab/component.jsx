import { Button } from "../Button/component";


export const Tab = ({onClick, title, isActive}) => {
    return (
        <Button 
            onClick={onClick} 
            title={title} 
            isActive={isActive}
            style={'tabStyle'}
        />
    )
}
