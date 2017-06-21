export const makes_input = (state = [], action) => {
    return action.type === 'GET_PAYLOAD_FOR_INPUT_RESPONSE' ? action.makes_input : state;
};

export const years_input = (state = [], action) => {
    return action.type === 'GET_PAYLOAD_FOR_INPUT_RESPONSE' ? action.years_input.filter((o) => (o != 0)) : state;
};

export const prices_input = (state = [], action) => {
    return action.type === 'GET_PAYLOAD_FOR_INPUT_RESPONSE' ? action.prices_input.filter((o) => (o != 0)) : state;
};

export const loading = (state = {payload_loading: true, models_loading: false, results_loading: false}, action) => {
    switch (action.type) {
        case 'GET_PAYLOAD_FOR_INPUT_RESPONSE':
            return {...state, payload_loading: action.loading};
        case 'MODELS_FOR_INPUT_REQUEST':
        case 'MODELS_FOR_INPUT_RESPONSE':
            return {...state, models_loading: action.models_loading};
        case 'RESULTS_LOADING':
        case 'UPDATE_FACETS_AND_RESULT':
            return {...state, results_loading: action.results_loading};
        default:
            return state;
    }
};

export const models_input = (state = [], action) => {
    return action.type === 'MODELS_FOR_INPUT_RESPONSE' ? action.models : state;
};

let initInputQuery = {
    make: null,
    model: null,
    min_year: null,
    max_year: null,
    min_price: null,
    max_price: null,
    body_type: null,
    category: null
};

export const input_query = (state = initInputQuery, action) => {
    switch (action.type) {
        case 'UPDATE_INPUT_QUERY':
            return action.field == 'category' ? {
                    ...initInputQuery,
                    [action.field]: action.value
                } : {...state, [action.field]: action.value};
        case 'MODELS_FOR_INPUT_RESPONSE':
            return {...state, model: null};
        default:
            return state;
    }
};