import { Button } from "../Button/component";


export const Tab = ({onClick, title, isActive}) => {
    return (
        <Button 
            onClick={onClick} 
            isActive={isActive}
            size={'large'}
        >
            {title}
        </Button>
    )
}
