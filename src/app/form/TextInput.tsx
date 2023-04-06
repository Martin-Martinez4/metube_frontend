import { Dispatch, FocusEvent, SetStateAction, useEffect, useState } from "react"
import { handleFormInputChange } from "../utilis/eventhandlers"

type WithSateObject<T> = {
  stateObject: T,
  setStateObject: Dispatch<SetStateAction <T>>,
  inputName: string,
  label: string,
  type?: string,
  validationFunction?: (e: FocusEvent<HTMLInputElement>) => string[],
}

const TextInput = <T extends  {[index: string]: string}>({stateObject, setStateObject, inputName, label, type, validationFunction}: WithSateObject<T>) => {

  const [validationErrors, setValidationErrors] = useState<string[]>([]);


  return (
    <>
      {
        validationErrors.map((validationError) => {

          return(<p className="marginb3 bgred colorwhite padding1" style={{ float: "left", width: "70%", }}>{validationError}</p>)

        })
      }
    <label className="login__form__textInput--group">
      <input 
        className="login__form__textInput marginb5" 
        type={type ? type : "text"} name={`${inputName}`} 
        value={stateObject[inputName]} 
        onChange={(e) => handleFormInputChange(e, stateObject, setStateObject)}
        onBlur={validationFunction ? (e) => setValidationErrors(validationFunction(e)): () => {}}
      ></input>
      <p className={`login__form__textInput--label${stateObject[inputName] === "" ? "" : "Active"}`}>{label}</p>
    </label>
      </>
  )
}

export default TextInput


