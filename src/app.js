import React, { useContext } from "react";
import Settings from './context/settingsContext.js';
import ToDo from './components/todo/todo.js';
import Header from './components/header.js';
import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import SettingForm from './components/SettingForm.js';
import LoginForm from './components/login/login';
import { LoginContext } from './context/loginContext';
import { If, Else, Then } from "react-if";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Signup from "./components/login/signup.js";
export default function App(props) {

  const context = useContext(LoginContext);

  return (
    <Router>
      <Switch>


        <If condition={context.loggedIn == true}>
          {console.log(context)}
          <Then>
            <Settings>
              <Route exact path="/">
                <Header />
                <ToDo />

              </Route>
              <Route path="/form">
                <Header />
                <SettingForm />

              </Route>

            </Settings>

          </Then>
          <Else>
            <Route exact path="/">

              <LoginForm />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>

          </Else>

        </If>



      </Switch>
    </Router>
  );

}