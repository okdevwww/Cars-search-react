import {connect} from 'react-redux'
import SearchComponent from '../components/Search'
import {getPayloadForInput, getModelsForInput, modelsForInputResponse, updateInputQuery} from '../actions/index'
import {browserHistory} from 'react-router';

const mapStateToProps = (state, ownProps) => {
    return {
        makes_input: state.makes_input,
        years_input: state.years_input,
        prices_input: state.prices_input,
        models_input: state.models_input,
        input_query: state.input_query,
        loading: state.loading
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getPayloadForInput: () => {
            dispatch(getPayloadForInput())
        },
        makeChanged: (make) => {
            make === '' ? dispatch(modelsForInputResponse([], false)) : dispatch(getModelsForInput(make))
        },
        updateQuery: (field, value) => {
            dispatch(updateInputQuery(field, value !== "" ? value : null))
            if (field == 'category') {
                browserHistory.push('/search');
            }
        },
        renderQuery: (input_query) => {
            let str = [];
            for (let p in input_query)
                if (input_query.hasOwnProperty(p)) {
                    if (input_query[p] != null) str.push(encodeURIComponent(p) + "=" + encodeURIComponent(input_query[p]));
                }
            let query = str.join("&");
            return query !== "" ? "?" + query : "";
        }
    }
};

const Search = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchComponent);

export default Search;
