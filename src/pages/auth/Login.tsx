
import { useState, FocusEvent } from "react";
import TextInput from "../../app/form/TextInput";
import TopNav from "../../components/nav/topnav/TopNav";
import { Validator } from "../../app/utilis/validateInput";

import "./login.scss";

function login() {

    const [formMode, setFormMode] = useState("login")

    const [formState, setFormState] = useState({
        signinUsername: "",
        signinPassword: "",

        registerUsername: "",
        registerDisplayname: "",
        registerPassword: "",
        registerConfirmPassword: "",
    })

    const signin = () => {

        return

    }

    const inputValidator = new Validator("");

    return (
        <>

            <TopNav></TopNav>
            <div className="login">
                {
                    formMode === "login"
                        ?
                        <div className="login__container flexColumn AlignItemsCenter">

                            <img className="login__logo marginb5" src="./NameAndLogoSmallAlt.svg" ></img>
                            <span className="login__formheader marginb4">Signin</span>
                            <form className="login__form flexColumn AlignItemsCenter" onSubmit={() => { }}>

                                <TextInput 
                                    stateObject={formState} 
                                    setStateObject={setFormState} 
                                    inputName="signinUsername" 
                                    label="username"
                                    validationFunction={(e: FocusEvent<HTMLInputElement>) => {

                                        inputValidator.setValue = formState.signinUsername;
                                        const errors = inputValidator.typeCheck("string").maxLength(2).allowAlphaNumericOnly().required().getErrors;
                                        inputValidator.clearErrors();

                                        return errors;

                                    }}
                                />
                                <TextInput stateObject={formState} setStateObject={setFormState} inputName="signinPassword" label="password" type="password"></TextInput>

                                <p className="login__form--text marginb5">Not your computer? Use Guest mode to sign in privately.</p>
                                <div className="login__form--buttonGroup flex justifyContentSpaceBetween">

                                    <div
                                        className=" login__form--createAccount btn colorblue pointer hoverbgblue hovercolorwhite"
                                        onClick={() => setFormMode("register")}
                                    >Create Account</div>
                                    <div className="btn bgblue colorwhite hoverlighten">Signin</div>
                                </div>
                            </form>

                        </div>
                        :
                        formMode === "register"
                            ?
                            <div className="login__container flexColumn AlignItemsCenter">

                                <img className="login__logo marginb5" src="./NameAndLogoSmallAlt.svg" ></img>
                                <span className="login__formheader marginb4">Register</span>
                                <form className="login__form flexColumn AlignItemsCenter" onSubmit={() => { }}>

                                    <TextInput stateObject={formState} setStateObject={setFormState} inputName="registerUsername" label="username"></TextInput>

                                    <TextInput stateObject={formState} setStateObject={setFormState} inputName="registerDisplayname" label="display name"></TextInput>

                                    <TextInput stateObject={formState} setStateObject={setFormState} inputName="registerPassword" label="password" type="password"></TextInput>
                                    <TextInput stateObject={formState} setStateObject={setFormState} inputName="registerConfirmPassword" label="confirm password" type="password"></TextInput>


                                    <p className="login__form--text marginb5">Not your computer? Use Guest mode to sign in privately.</p>
                                    <div className="login__form--buttonGroup flex justifyContentSpaceBetween">

                                        <div
                                            className=" login__form--createAccount btn colorblue pointer hoverbgblue hovercolorwhite"
                                            onClick={() => setFormMode("login")}
                                        >Back</div>
                                        <div className="btn bgblue colorwhite hoverlighten">Next</div>
                                    </div>
                                </form>

                            </div>
                            :
                            ""
                }

            </div>

        </>
    )
}

export default login

