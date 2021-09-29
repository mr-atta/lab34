import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../context/loginContext";
function Header() {
    const context = useContext(LoginContext)
    return (
        <>
            <nav className="bp3-navbar .modifier bp3-dark" >
                <div className="bp3-navbar-group bp3-align-left">
                    <div className="bp3-navbar-heading">TO-DO</div>

                </div>
                <div className="bp3-navbar-group bp3-align-right">
                    <Link className="bp3-button bp3-minimal bp3-icon-home" to="/">Home</Link>

                    <span className="bp3-navbar-divider"></span>
                    <Link className="bp3-button bp3-minimal bp3-icon-cog" to="/form">Settings</Link>
                    <span className="bp3-navbar-divider"></span>

                    <button className="bp3-button bp3-minimal bp3-icon-log-out" onClick={context.logout} >log-out</button>

                </div>
            </nav>
        </>
    );
}

export default Header;