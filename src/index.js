import 'babel-polyfill';
import { AppContainer } from 'react-hot-loader';
import React from 'react'
import {render} from 'react-dom'
import {browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import configureStore from './stores/configureStore'
import Root from './containers/Root'

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
const rootEl = document.getElementById('root');
render(
    <AppContainer>
        <Root store={store} history={history} />
    </AppContainer>,
    rootEl
);

if (module.hot) {
    module.hot.accept('./containers/Root', () => {
        // If you use Webpack 2 in ES modules mode, you can
        // use <App /> here rather than require() a <NextApp />.
        const NextApp = require('./containers/Root').default;
        render(
            <AppContainer>
                <NextApp store={store} history={history} />
            </AppContainer>,
            rootEl
        );
    });
}
