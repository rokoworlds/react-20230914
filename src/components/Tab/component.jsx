import { Button } from "../Button/component";


export const Tab = ({onClick, isActive, children}) => {
    return (
        <Button 
            onClick={onClick} 
            isActive={isActive}
            size={'large'}
        >
        {children}
        </Button>
    )
}
