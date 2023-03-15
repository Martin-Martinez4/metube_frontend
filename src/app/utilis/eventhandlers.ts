
import { Dispatch } from "react"

const handleToggleBooleanState = (event: React.MouseEvent<HTMLElement, MouseEvent>, currentState: boolean, setFunction: Dispatch<React.SetStateAction<boolean>>) => {

    event.stopPropagation()
    event.preventDefault()
    setFunction(!currentState)

}

export {
    handleToggleBooleanState
}

