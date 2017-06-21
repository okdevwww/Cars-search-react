import {connect} from 'react-redux'
import ResultsComponent from '../components/Results'
import {getPayloadForSelected} from '../actions/results'

const mapStateToProps = (state, ownProps) => {
    return {
        facets: state.facets,
        docs: state.docs,
        results_loading: state.loading.results_loading,
        range: state.range,
        tag: state.tag,
        pagination: state.pagination,
        input_query: state.input_query
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getPayloadForSelected: (input_query) => {
            let facets = {};
            let tag = "";
            if (input_query.min_year != null && input_query.max_year != null) {
                tag = "year_of_manufacture";
                facets.year_of_manufacture = [];
                for (let min = parseInt(input_query.min_year); min <= input_query.max_year; min++) {
                    facets.year_of_manufacture.push({selected: true, value: min});
                }
            }
            if (input_query.make != null) {
                tag = "make";
                facets.make = [{
                    selected: true, value: input_query.make,
                    pivot: (input_query.model != null) ? [{selected: true, value: input_query.model}] : []
                }];
            }
            if (input_query.category != null) {
                tag = "category";
                facets.category = [
                    {
                        selected: true,
                        value: (input_query.category == 'People Mover' || input_query.category == 'Bus') ? 'Bus/People Mover' : input_query.category
                    }
                ];
            }
            let range = [];
            if (input_query.min_price != null && input_query.max_price != null) range.push({
                field: 'price',
                min: input_query.min_price,
                max: input_query.max_price
            });
            dispatch(getPayloadForSelected({selectedFacets: facets, ranges: range, tag: tag}))
        },
        searchWithQueryAndPaginate: (currentFacets, range, tag, query, start) => {
            let facets = {...currentFacets};
            for (let prop in facets) {
                if (facets.hasOwnProperty(prop)) {
                    facets[prop] = facets[prop].filter((o) => {
                        return o.selected === true;
                    });
                    if (prop == 'make') {
                        facets[prop] = facets[prop].map((o) => {
                            o.pivot = o.pivot.filter((p) => {
                                return p.selected === true;
                            });
                            return o;
                        })
                    }
                }
            }
            dispatch(getPayloadForSelected({
                selectedFacets: facets,
                ranges: range,
                tag: tag,
                query: query,
                start: start
            }))
        }
    }
};

const Results = connect(
    mapStateToProps,
    mapDispatchToProps
)(ResultsComponent);

export default Results;

