import fetch from 'isomorphic-fetch'
import $ from 'jquery'

export const fetchConfig = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    credentials: 'same-origin'
};

export const getPayloadForResultsResponse = (payload) => {
    return {
        type: 'GET_PAYLOAD_FOR_RESULTS_RESPONSE',
        payload
    }
};

export const getPayloadForResults = () => {
    return dispatch => {
        return fetch('/payload-for-results', {
            method: 'POST',
            ...fetchConfig,
            body: JSON.stringify({selected_facets: [], tag: ''})
        })
            .then(response => response.json())
            .then(json => dispatch(getPayloadForResultsResponse(json)))
    }
};

export const updateFacetsAndResult = (results, results_loading, tag, range, query, pagination) => {
    return {
        type: 'UPDATE_FACETS_AND_RESULT',
        results,
        results_loading,
        tag,
        range,
        query,
        pagination
    }
};

export const resultLoading = (results_loading) => {
    return {
        type: 'RESULTS_LOADING',
        results_loading
    }
};

export const getPayloadForSelected = ({selectedFacets=[], ranges=[], tag="", query="", start=0}) => {
    return dispatch => {
        dispatch(resultLoading(true));
        return fetch('/payload-for-results', {
            method: 'POST',
            ...fetchConfig,
            body: JSON.stringify({selected_facets: selectedFacets, ranges: ranges, tag: tag, query: query, start: start})
        })
            .then(response => response.json())
            .then(json => dispatch(updateFacetsAndResult(json, false, tag, ranges, query)))
    }
};