import React, { Component } from 'react'
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute} from 'react-router'
import App from '../components/App'
import Search from '../containers/Search'
import Results from '../containers/Results'
import Details from '../containers/Details'
import ContactUs from '../containers/ContactUs'
import Finance from '../containers/Finance'

export default class Root extends Component {
    render () {
        const { store, history } = this.props;
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/" component={App}>
                        <IndexRoute component={Search}/>
                        <Route path="search" component={Results}/>
                        <Route path="/car/:stock_number" component={Details}/>
                        <Route path="contactus" component={ContactUs}/>
                        <Route path="finance" component={Finance}/>
                    </Route>
                </Router>
            </Provider>
        )
    }
}