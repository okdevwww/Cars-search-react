import thunkMiddleware from 'redux-thunk'
import carsSearchApp from '../reducers'
import {createStore, applyMiddleware, compose} from 'redux'
import * as indexActions from '../actions/index'
import * as resultsActions from '../actions/results'
import * as detailsActions from '../actions/details'

export default function configureStore(preloadedState) {
    let store = null;

    if(module.hot){
        let actionCreators = {...indexActions, ...resultsActions, ...detailsActions};
        store = createStore(carsSearchApp, compose(applyMiddleware(thunkMiddleware),
            window.devToolsExtension ? window.devToolsExtension({actionCreators}) : f => f
        ));
    }
    else{
        store = createStore(carsSearchApp, applyMiddleware(thunkMiddleware));
    }

    return store
}