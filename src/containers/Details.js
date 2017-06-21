import {connect} from 'react-redux'
import DetailsComponent from '../components/Details'
import {getDetails, calculateFinance, tradeInCheck, invalidateEnquiryForm, submitEnquiry} from '../actions/details'

const mapStateToProps = (state, ownProps) => {
    return {
        details: state.details,
        details_loading: state.details_loading,
        monthly_repayment: state.monthly_repayment,
        trade_in: state.trade_in,
        enquiry_form: state.enquiry_form
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getDetails: (id) => {
            dispatch(getDetails(id));
        },
        calculateFinance: (values) => {
            dispatch(calculateFinance(values));
        },
        tradeInCheck: (trade_in) => {
            dispatch(tradeInCheck(trade_in));
        },
        submitEnquiryForm: (values, stock_number) => {
            let status = {};
            status.isNameValid = !!values.name.value.trim();
            status.isEmailValid = !!values.email.value.trim();
            status.isContactValid = !!values.contact.value.trim();
            status.isPostcodeValid = !!values.postcode.value.trim();
            if (status.isNameValid && status.isEmailValid && status.isContactValid && status.isPostcodeValid) {
                let data = {};
                for (let prop in values){
                    if(values.hasOwnProperty(prop)){
                        data[prop] = (values[prop].type==='checkbox')?values[prop].checked:values[prop].value;
                    }
                }
                data.stock_number = stock_number;
                dispatch(submitEnquiry(data));
            }
            else {
                dispatch(invalidateEnquiryForm(status));
            }
        }
    }
};

const Details = connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailsComponent);

export default Details;