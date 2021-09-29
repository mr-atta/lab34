import React, { useState, useContext } from 'react';
import { When } from 'react-if';
import { Link } from "react-router-dom";
import { LoginContext } from "../../context/loginContext";
import "./style.css";

function LoginForm() {
    const signup = () => {
        window.location.href = "/signup"
    }
    let context = useContext(LoginContext)
    let [userName, setUserName] = useState('')
    let [password, setPassword] = useState('')

    const handleInputUser = e => {
        setUserName(e.target.value);
    }
    const handleInputPass = e => {
        setPassword(e.target.value);
    }
    const handlerSubmit = async e => {
        e.preventDefault();
        await context.login(userName, password);
        window.location.href = "/"

    }
    return (
        <>
            <When
                condition={!context.loggedIn}
            >
                <div>
                    <header>
                        <nav className="bp3-navbar .modifier bp3-dark" >
                            <div className="bp3-navbar-group bp3-align-left">
                                <div className="bp3-navbar-heading">TO-DO</div>

                            </div>
                            <div className="bp3-navbar-group bp3-align-right">
                                <Link className="bp3-button bp3-minimal bp3-icon-home" to="/">Home</Link>

                            </div>
                        </nav>
                    </header>
                    <section className="ftco-section">
                        <div className="container">

                            <div className="row justify-content-center">
                                <div className="col-md-6 col-lg-5">
                                    <div className="login-wrap p-4 p-md-5">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="fa fa-user-o">S-IN</span>
                                        </div>
                                        <h3 className="text-center mb-4">Have an account?</h3>
                                        <form onSubmit={handlerSubmit}>
                                            <div className="form-group">
                                                <input

                                                    onChange={handleInputUser}
                                                    type="text"
                                                    className="form-control rounded-left"
                                                    placeholder="Username"
                                                    required
                                                />
                                            </div>
                                            <div className="form-group d-flex">
                                                <input
                                                    onChange={handleInputPass}
                                                    type="password"
                                                    className="form-control rounded-left"
                                                    placeholder="Password"
                                                    required
                                                />
                                            </div>

                                            <br />
                                            <div className="form-group">
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary rounded submit p-3 px-5"
                                                >
                                                    Get Started
                                                </button>
                                                <button

                                                    className="btn btn-primary rounded submit p-3 px-5"
                                                    style={{ margin: '0 0 0 190px' }}
                                                    onClick={signup}
                                                >
                                                    Sign-Up
                                                </button>

                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </When>

        </>
    );
}

export default LoginForm;