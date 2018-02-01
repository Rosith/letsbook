import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import WebFontLoader from 'webfontloader';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import {Router} from 'react-router-dom';

import './index.css';
import App from './containers/App';
import configureStore from './store/configureStore';


WebFontLoader.load({
    google: {
        families: ['Roboto:300,400,500,700', 'Material Icons', 'Roboto Condensed:100'],
    },
});

const history = createBrowserHistory();
const store = configureStore(history);

ReactDOM.render((
<Provider store={store}>
  <Router history={history}>
    <App />
  </Router>
</Provider>
), document.getElementById('root'))


registerServiceWorker();
