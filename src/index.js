import React from 'react';
import ReactDOM from 'react-dom';
import LoginProvider from './context/loginContext';
import App from './app.js';

class Main extends React.Component {
  render() {
    return (
      <LoginProvider>
        <App />
      </LoginProvider>
    )



  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);