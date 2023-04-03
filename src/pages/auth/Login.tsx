import { useState } from "react"
import { handleFormInputChange } from "../../app/utilis/eventhandlers";
import TopNav from "../../components/nav/topnav/TopNav"

import "./login.scss";

function login() {

    const [formMode, setFormMode] = useState("login")

    const [formState, setFormState] = useState({
        signinUsername: "",
        signinPassword: "",
    })

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
                                <label className="login__form__textInput--group">
                                    <input className="login__form__textInput marginb5" type="text" placeholder="username" name="signinUsername" value={formState.signinUsername} onChange={(e) => handleFormInputChange(e, formState, setFormState)}></input>
                                    <p className="login__form__textInput--label">username</p>
                                </label>
                                <label className="login__form__textInput--group">
                                    <input className="login__form__textInput marginb5" type="password" placeholder="password"  name="signinPassword" value={formState.signinPassword} onChange={(e) => handleFormInputChange(e, formState, setFormState)}></input>
                                    <p className="login__form__textInput--label">password</p>
                                </label>

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

                                    <label className="login__form__textInput--group">
                                        <input className="login__form__textInput marginb5" type="text" placeholder="username" name="registerUsername" value={formMode}></input>
                                        <p className="login__form__textInput--label">username</p>
                                    </label>
                                    <label className="login__form__textInput--group">
                                        <input className="login__form__textInput marginb5" type="text" placeholder="display name" name="registerDisplayname"></input>
                                        <p className="login__form__textInput--label">display name</p>
                                    </label>

                                    <label className="login__form__textInput--group">
                                        <input className="login__form__textInput marginb5" type="password" placeholder="password" name="registerPassword"></input>
                                        <p className="login__form__textInput--label">password</p>
                                    </label>
                                    <label className="login__form__textInput--group">
                                        <input className="login__form__textInput marginb5" type="password" placeholder="confirm password" name="registerPassword2"></input>
                                        <p className="login__form__textInput--label">confirm password</p>
                                    </label>

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

