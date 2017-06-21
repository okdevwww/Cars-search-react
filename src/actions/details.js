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

export const updateDetails = (details, details_loading) => {
    return {
        type: 'UPDATE_CAR_DETAILS',
        details,
        details_loading
    }
};

export const detailsLoading = (details_loading) => {
    return {
        type: 'DETAILS_LOADING',
        details_loading
    }
};

export const getDetails = (stock_number) => {
    return dispatch => {
        dispatch(detailsLoading(true));
        return fetch('/get-car-details', {
            method: 'POST',
            ...fetchConfig,
            body: JSON.stringify({stock_number: stock_number})

        })
            .then(response => response.json())
            .then(json => dispatch(updateDetails(json, false)))
    }
};

export const calculateFinance = (values) => {
    return {
        type: 'CALCULATE_FINANCE',
        values
    }
};

export const tradeInCheck = (trade_in) => {
    return{
        type: 'TRADE_IN_CHECK',
        trade_in
    }
};

export const invalidateEnquiryForm = (status) => {
    return {
        type: 'INVALIDATE_ENQUIRY_FORM',
        status
    }
};

export const requestSubmitEnquiry = () => {
    return {
        type: 'REQUEST_SUBMIT_ENQUIRY'
    }
};

export const toggleSubmitted = (sent) => {
    return {
        type: 'TOGGLE_SUBMITTED',
        sent
    }
};

export const submitEnquiry = (data) => {
    return dispatch => {
        dispatch(requestSubmitEnquiry());
        return fetch('/post-vehicle-enquiry', {
            method: 'POST',
            ...fetchConfig,
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(json => dispatch(toggleSubmitted(json.sent)))
    }
};
