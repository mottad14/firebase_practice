import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter} from 

ReactDOM.render(
  <React.StrictMode> 
      <BrowserRouter>
            <App /> 
      </BrowserRouter>
  </React.StrictMode>, 
    document.getElementById('root') 
    );

