import { combineReducers } from 'redux'
import {  routerReducer } from 'react-router-redux'
import { makes_input, years_input, prices_input, models_input, loading, input_query } from './input'
import { facets,docs,ranges,tag,range,query,pagination } from './results'
import {details, details_loading, monthly_repayment, trade_in, enquiry_form} from './details'

const inputReducers = {makes_input, years_input,prices_input, models_input,loading,input_query};
const resultReducers = {facets,docs,ranges,tag,range,query,pagination};
const detailsReducers = {details_loading,details,monthly_repayment,trade_in,enquiry_form};
const App = combineReducers({
    ...inputReducers,
    ...resultReducers,
    ...detailsReducers,
    routing: routerReducer
});

export default App