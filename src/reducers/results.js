let initFacets = {
    body_type: [],
    category: [],
    color: [],
    doors: [],
    drive_type: [],
    engine: [],
    fuel_type: [],
    make: [],
    reg: [],
    seats: [],
    transmission: [],
    year_of_manufacture: []
};

export const facets = (state = initFacets, action) => {
    switch (action.type) {
        case 'UPDATE_FACETS_AND_RESULT':
            return action.results.facets;
        default:
            return state;
    }
};

let initRanges = {
    price: [],
    odometer: []
};

export const ranges = (state = initRanges, action) => {
    switch (action.type){
        case 'UPDATE_FACETS_AND_RESULT':
            return action.results.ranges;
        default:
            return state;
    }
};

export const docs = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_FACETS_AND_RESULT':
            return action.results.docs;
        default:
            return state;
    }
};

export const tag = (state="", action) => {
    switch (action.type) {
        case 'UPDATE_FACETS_AND_RESULT':
            return action.tag;
        default:
            return state;
    }
};

export const range = (state=[], action) => {
    switch (action.type) {
        case 'UPDATE_FACETS_AND_RESULT':
            return action.range;
        default:
            return state;
    }
};

export const query = (state="", action) => {
    switch (action.type) {
        case 'UPDATE_FACETS_AND_RESULT':
            return action.query;
        default:
            return state;
    }
};

export const pagination = (state={numFound:null, start:null}, action) => {
    switch (action.type){
        case 'UPDATE_FACETS_AND_RESULT':
            return {...state, numFound: action.results.pagination.numFound, start: action.results.pagination.start};
        default:
            return state;
    }
};
