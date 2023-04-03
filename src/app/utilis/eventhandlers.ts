
import { ChangeEvent, Dispatch, SetStateAction } from "react"

const handleToggleBooleanState = (event: React.MouseEvent<HTMLElement, MouseEvent>, currentState: boolean, setFunction: Dispatch<React.SetStateAction<boolean>>) => {

    event.stopPropagation()
    event.preventDefault()
    setFunction(!currentState)

}

const handleFormInputChange = <T,>(e: ChangeEvent<HTMLInputElement>, currentState: T, setFunction: Dispatch<SetStateAction <T>>) => {

    const newValue = e.target.value;

    setFunction({...currentState, [`${e.target.name}`]: newValue })

} 

export {
    handleToggleBooleanState,
    handleFormInputChange,
}

