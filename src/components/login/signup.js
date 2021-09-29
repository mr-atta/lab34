import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom";
import { LoginContext } from "../../context/loginContext";
function Signup() {
    let context = useContext(LoginContext)
    let [userName, setUserName] = useState('')
    let [password, setPassword] = useState('')
    let [role, setRole] = useState('user')

    const handleInputUser = e => {
        setUserName(e.target.value);
    }
    const handleInputPass = e => {
        setPassword(e.target.value);
    }
    const handleInputRole = e => {
        setRole(e.target.value);
    }
    const handlerSubmit = async e => {
        e.preventDefault();
        await context.signUp(userName, password, role)
        window.location.href = "/"
    }
    return (
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
                                    <span className="fa fa-user-o">S-UP</span>
                                </div>

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
                                    <div className="form-group d-flex">
                                        <select className="form-control rounded-left"
                                            onChange={handleInputRole}>
                                            <option value='user'>user</option>
                                            <option value='admin'>admin</option>
                                        </select>

                                    </div>
                                    <br />
                                    <p>already have account  <a href='/'> login</a></p>
                                    <div className="form-group">
                                        <button
                                            type="submit"
                                            className="btn btn-primary rounded submit p-3 px-5"
                                            style={{ margin: "0 0 0 75px" }}
                                        >
                                            confirm & login
                                        </button>


                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signup