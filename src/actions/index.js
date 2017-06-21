import fetch from 'isomorphic-fetch'

import cookie from 'react-cookie'

export const fetchConfig = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': cookie.load('XSRF-TOKEN')
    }
    //credentials: 'same-origin'
};

export const getPayloadForInputResponse = (payload, loading) => {
    return {
        type: 'GET_PAYLOAD_FOR_INPUT_RESPONSE',
        makes_input: payload.makes,
        years_input: payload.years,
        prices_input: payload.prices,
        loading: loading
    }
};

export const getPayloadForInput = () => {
    return dispatch => {
        return fetch('/payload-for-input', {
            method: 'GET',
            ...fetchConfig
        })
            .then(response => response.json())
            .then(json => dispatch(getPayloadForInputResponse(json, false)))
    }
};

export const modelsForInputResponse  = (models, models_loading) => {
    return {
        type: 'MODELS_FOR_INPUT_RESPONSE',
        models,
        models_loading
    }
};

export const modelsForInputRequest  = (models_loading) => {
    return {
        type: 'MODELS_FOR_INPUT_REQUEST',
        models_loading
    }
};

export const getModelsForInput = (make) => {
    return dispatch => {
        dispatch(modelsForInputRequest(true));
        return fetch('/models-for-input?make=' + make, {
            method: 'GET',
            ...fetchConfig
        })
            .then(response => response.json())
            .then(json => dispatch(modelsForInputResponse(json.models, false)))
    }
};

export const updateInputQuery = (field,value) => {
    return {
        type: 'UPDATE_INPUT_QUERY',
        field,
        value
    }
};
