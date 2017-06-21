export const details = (state = {images: ['image.png'], features: []}, action) => {
    switch (action.type){
        case 'UPDATE_CAR_DETAILS':
            return action.details;
        default:
            return state;
    }
};

export const details_loading = (state = true, action) => {
    switch (action.type){
        case 'DETAILS_LOADING':
        case 'UPDATE_CAR_DETAILS':
            return action.details_loading;
        default:
            return state;
    }
};

export const monthly_repayment = (state = null, action) => {
    switch (action.type){
        case 'CALCULATE_FINANCE':
            let amount = action.values.amount;
            let term = action.values.term;
            let interest = action.values.interest;
            if ((amount == null || amount == 0) ||
                (term == null || term == 0)
                ||
                (interest == null || interest == 0)) {
                return  null;
            }
            else {
                let intr = interest / 1200;
                return (amount * intr / (1 - (Math.pow(1 / (1 + intr), term)))).toFixed(2);
            }
        default:
            return state;
    }
};

export const trade_in = (state=false, action) => {
    switch (action.type){
        case 'TRADE_IN_CHECK':
            return action.trade_in;
        default:
            return state;
    }
};

let initEnquiryForm = {isNameValid:true,isEmailValid:true,isContactValid:true,isPostcodeValid:true,submitted:false,loading:false};

export const enquiry_form = (state=initEnquiryForm, action) => {
    switch (action.type){
        case 'INVALIDATE_ENQUIRY_FORM':
            return {...state, ...action.status};
        case 'REQUEST_SUBMIT_ENQUIRY':
            return {...state, loading: true};
        case 'TOGGLE_SUBMITTED':
            return {...initEnquiryForm, submitted: action.sent, loading: false};
        default:
            return state;
    }
};