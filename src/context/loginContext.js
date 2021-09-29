import React, { useState, useEffect } from "react";
import superagent from "superagent";
import base64 from "base-64";
import cookie from "react-cookies";
import jwt from "jsonwebtoken";

export const LoginContext = React.createContext();
const API = "https://project-34-to-do.herokuapp.com";
export default function LoginProvider(props) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({});

    const login = async (username, password) => {
        try {
            const response = await superagent
                .post(`${API}/signin`)
                .set(
                    "authorization",
                    `Basic ${base64.encode(`${username}:${password}`)}`
                );
            console.log(response.body);
            validateMyToken(response.body.token);
        } catch (err) {
            console.log(err);
        }
    };
    const signUp = async (username, password, role) => {
        try {
            let obj = {
                username: username,
                password: password,
                role: role,
            };
            const response = await superagent.post(`${API}/signup`, obj);
            console.log(response.body);
            validateMyToken(response.body.token);
        } catch (err) {
            console.log(err);
        }
    };

    // run one time
    useEffect(() => {
        const myTokenCookie = cookie.load("token"); 
        console.log("myTokenCookie: ", myTokenCookie);
        console.log("initial render here !!");
        validateMyToken(myTokenCookie);
    }, []);

    function validateMyToken(token) {
        if (token) {
            const user = jwt.decode(token); 

            setLoginState(true, user);
            cookie.save("token", token);
        } else {
            setLoginState(false, {});
        }
    }

    const setLoginState = (isLoggedIn, user) => {
        setLoggedIn(isLoggedIn);
        setUser(user);
    };

    const logout = () => {
        setLoggedIn(false);
        setUser({});
        cookie.remove("token");
    };

    const state = {
        loggedIn: loggedIn,
        login: login,
        logout: logout,
        user: user,
        signUp: signUp,
    };

    return (
        <LoginContext.Provider value={state}>
            {props.children}
        </LoginContext.Provider>
    );
}