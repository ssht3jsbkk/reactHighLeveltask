import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {pinkA200} from 'material-ui/styles/colors';


import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

const muiTheme = getMuiTheme({palette: {textColor: pinkA200}, appBar: {height: 50}});

const Page = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <App />
  </MuiThemeProvider>
);


ReactDOM.render(<Page />, document.getElementById('root'));
registerServiceWorker();
