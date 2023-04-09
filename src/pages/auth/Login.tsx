
import { useState, FocusEvent } from "react";
import TextInput from "../../app/form/TextInput";
import { loggedInUserVar } from "../../app/apolloCache/InMemoryCache";
import TopNav from "../../components/nav/topnav/TopNav";
import { Validator } from "../../app/utilis/validateInput";
import { gql } from "../../__generated__/gql";


import "./login.scss";
import { useMutation } from "@apollo/client";
import { useLocation, useNavigate } from "react-router-dom";

export const LOGIN_QUERY = gql(/* GraphQL */`
mutation Login($username: String!, $password: String!){
  login(login:{username:$username, password: $password}){
    username
    displayname
    subscribers
    isChannel
  }
}
`);

export const REGISTER_QUERY = gql(/* GraphQL */`
mutation Register($username: String!, $displayname: String!, $password: String!, $password2: String!){
  register(profileToRegister:{username: $username, displayname: $displayname, password: $password, password2:$password2}){
    username
    displayname
    subscribers
    isChannel
  }
}
`);

function login() {


    const [login] = useMutation(LOGIN_QUERY);
    const [register] = useMutation(REGISTER_QUERY);
    const navigate = useNavigate();
    const { state } = useLocation();


    const [formMode, setFormMode] = useState("login")

    const [formState, setFormState] = useState({
        signinUsername: "",
        signinPassword: "",

        registerUsername: "",
        registerDisplayname: "",
        registerPassword: "",
        registerConfirmPassword: "",

    })

    const [formSigninErrors, setFormSigninErrors] = useState<string[]>([]);
    const [formRegisterErrors, setFormRegisterErrors] = useState<string[]>([]);



    const handleSignin = () => {

        // Vlaidation
        inputValidator.clearErrors();
        inputValidator.setValue = formState.signinUsername;
        const usernameErrors = inputValidator.typeCheck("string").maxLength(20).allowAlphaNumericOnly().required().getErrors;

        inputValidator.clearErrors();
        inputValidator.setValue = formState.signinPassword;
        const passwordErrors = inputValidator.typeCheck("string").maxLength(20).required().getErrors;


        setFormSigninErrors([])

        if (passwordErrors.length > 0 || usernameErrors.length > 0) {

            let errors = []
            for (let i = 0; i < passwordErrors.length; i++) {

                errors.push("Password: " + passwordErrors[i])
            }
            for (let i = 0; i < usernameErrors.length; i++) {

                errors.push("Username: " + usernameErrors[i])
            }

            setFormSigninErrors([...errors])

            return

        }

        // Do sign in stuff

        login({
            variables: {
                username: formState.signinUsername,
                password: formState.signinPassword,
            }
        })
            .then(res => {

                const user = res.data?.login
                loggedInUserVar({
                    isLoggedIn: true,
                    Username: user?.username as string,
                    Displayname: user?.displayname as string,
                    IsChannel: user?.isChannel as boolean,
                })

                navigate(`${state?.continue || "/"}`)
            })
            .catch(err => {

                console.log(err)
                setFormSigninErrors([...formSigninErrors, "username or password are incorrect."])
            })


        return

    }

    const handleRegister = () => {

        // Vlaidation
        inputValidator.clearErrors();
        inputValidator.setValue = formState.registerUsername;
        const usernameErrors = inputValidator.typeCheck("string").maxLength(20).allowAlphaNumericOnly().required().getErrors;

        inputValidator.clearErrors();
        inputValidator.setValue = formState.registerDisplayname;
        const displaynameErrors = inputValidator.typeCheck("string").maxLength(20).allowAlphaNumericOnly().required().getErrors;

        inputValidator.clearErrors();
        inputValidator.setValue = formState.registerPassword;
        const passwordErrors = inputValidator.typeCheck("string").maxLength(20).required().getErrors;

        if (formState.registerPassword !== formState.registerConfirmPassword) {

            passwordErrors.push("Passwords must match.")

        }

        setFormRegisterErrors([])

        if (passwordErrors.length > 0 || usernameErrors.length > 0) {

            let errors = []
            for (let i = 0; i < usernameErrors.length; i++) {

                errors.push("Username: " + usernameErrors[i])
            }
            for (let i = 0; i < displaynameErrors.length; i++) {

                errors.push("Displayname: " + displaynameErrors[i])
            }
            for (let i = 0; i < passwordErrors.length; i++) {

                errors.push("Password: " + passwordErrors[i])
            }


            setFormRegisterErrors([...errors])

            return

        }

        // Do registration stuff
        register({
            variables: {
                username: formState.registerUsername,
                displayname: formState.registerDisplayname,
                password: formState.registerPassword,
                password2: formState.registerConfirmPassword,
            }
        })
        .then(res => {

            const user = res.data?.register
            loggedInUserVar({
                isLoggedIn: true,
                Username: user?.username as string,
                Displayname: user?.displayname as string,
                IsChannel: user?.isChannel as boolean,
            })

            navigate(`${state?.continue || "/"}`)
        })
        .catch(err => {
            setFormSigninErrors([...formRegisterErrors, "an error occured while registering user."])
        })

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
                            {

                                formSigninErrors.length > 0
                                    ?
                                    formSigninErrors.map((formSigninError) => {

                                        return (<p key={"form " + formSigninError} className="marginb3 bgred colorwhite padding1" style={{ float: "left", width: "70%", }}>{formSigninError}</p>)

                                    })
                                    :
                                    ""
                            }

                            <img className="login__logo marginb5" src="./NameAndLogoSmallAlt.svg" ></img>
                            <span className="login__formheader marginb4">Signin</span>
                            <form className="login__form flexColumn AlignItemsCenter" onSubmit={() => { }}>

                                <TextInput
                                    stateObject={formState}
                                    setStateObject={setFormState}
                                    inputName="signinUsername"
                                    label="username"
                                    validationFunction={(e: FocusEvent<HTMLInputElement>) => {

                                        inputValidator.clearErrors();
                                        inputValidator.setValue = formState.signinUsername;
                                        const errors = inputValidator.typeCheck("string").maxLength(20).allowAlphaNumericOnly().required().getErrors;

                                        return errors;

                                    }}
                                />
                                <TextInput
                                    stateObject={formState}
                                    setStateObject={setFormState}
                                    inputName="signinPassword"
                                    label="password"
                                    type="password"
                                    validationFunction={(e: FocusEvent<HTMLInputElement>) => {

                                        inputValidator.clearErrors();
                                        inputValidator.setValue = formState.signinPassword;
                                        const errors = inputValidator.typeCheck("string").maxLength(20).required().getErrors;

                                        return errors;

                                    }}
                                ></TextInput>

                                <p className="login__form--text marginb5">Not your computer? Use Guest mode to sign in privately.</p>
                                <div className="login__form--buttonGroup flex justifyContentSpaceBetween">

                                    <div
                                        className=" login__form--createAccount btn colorblue pointer hoverbgblue hovercolorwhite"
                                        onClick={() => setFormMode("register")}
                                    >Create Account</div>
                                    <div className="btn bgblue colorwhite hoverlighten" onClick={() => handleSignin()}>Signin</div>
                                </div>
                            </form>

                        </div>
                        :
                        formMode === "register"
                            ?
                            <div className="login__container flexColumn AlignItemsCenter">
                                {

                                    formRegisterErrors.length > 0
                                        ?
                                        formRegisterErrors.map((formRegisterError) => {

                                            return (<p className="marginb3 bgred colorwhite padding1" style={{ float: "left", width: "70%", }}>{formRegisterError}</p>)

                                        })
                                        :
                                        ""
                                }

                                <img className="login__logo marginb5" src="./NameAndLogoSmallAlt.svg" ></img>
                                <span className="login__formheader marginb4">Register</span>
                                <form className="login__form flexColumn AlignItemsCenter" onSubmit={() => { }}>

                                    <TextInput
                                        stateObject={formState}
                                        setStateObject={setFormState}
                                        inputName="registerUsername"
                                        label="username"
                                        validationFunction={(e: FocusEvent<HTMLInputElement>) => {

                                            inputValidator.clearErrors();
                                            inputValidator.setValue = formState.registerUsername;
                                            const errors = inputValidator.typeCheck("string").maxLength(20).allowAlphaNumericOnly().required().getErrors;

                                            return errors;

                                        }}
                                    ></TextInput>

                                    <TextInput
                                        stateObject={formState}
                                        setStateObject={setFormState}
                                        inputName="registerDisplayname"
                                        label="display name"
                                        validationFunction={(e: FocusEvent<HTMLInputElement>) => {

                                            inputValidator.clearErrors();
                                            inputValidator.setValue = formState.registerDisplayname;
                                            const errors = inputValidator.typeCheck("string").maxLength(20).allowAlphaNumericOnly().required().getErrors;

                                            return errors;

                                        }}
                                    ></TextInput>

                                    <TextInput
                                        stateObject={formState}
                                        setStateObject={setFormState}
                                        inputName="registerPassword"
                                        label="password"
                                        type="password"
                                        validationFunction={(e: FocusEvent<HTMLInputElement>) => {

                                            inputValidator.clearErrors();
                                            inputValidator.setValue = formState.registerPassword;
                                            const errors = inputValidator.typeCheck("string").maxLength(20).required().getErrors;

                                            return errors;

                                        }}
                                    ></TextInput>
                                    <TextInput
                                        stateObject={formState}
                                        setStateObject={setFormState}
                                        inputName="registerConfirmPassword"
                                        label="confirm password"
                                        type="password"
                                        validationFunction={(e: FocusEvent<HTMLInputElement>) => {

                                            inputValidator.clearErrors();
                                            inputValidator.setValue = formState.registerConfirmPassword;
                                            const errors = inputValidator.typeCheck("string").maxLength(20).required().getErrors;

                                            return errors;

                                        }}
                                    ></TextInput>


                                    <p className="login__form--text marginb5">Not your computer? Use Guest mode to sign in privately.</p>
                                    <div className="login__form--buttonGroup flex justifyContentSpaceBetween">

                                        <div
                                            className=" login__form--createAccount btn colorblue pointer hoverbgblue hovercolorwhite"
                                            onClick={() => setFormMode("login")}
                                        >Back</div>
                                        <div className="btn bgblue colorwhite hoverlighten" onClick={handleRegister}>Next</div>
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

