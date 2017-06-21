import React, {Component} from 'react'
import $ from 'jquery'
import ImageSlider from './ImageSlider'

class Details extends Component {
    enquiry_form = {};
    componentWillMount = () => {
        this.props.calculateFinance({amount: null, term: null, interest: null});
        this.props.tradeInCheck(false);
    };
    componentDidMount = () => {
        this.props.getDetails(this.props.params.stock_number);
        $('.menu .item').tab();
        $('.ui.form.enquiry')
            .form({
                fields: {
                    name: 'empty',
                    email: 'email',
                    contactno: 'empty',
                    postcode: 'empty',
                    finance: 'checked',
                    trade: 'checked'
                }
            })
        ;
        $('.ui.form.finance')
            .form({
                fields: {
                    loanamt: 'empty',
                    loanterm: 'empty',
                    insrate: 'empty'
                }
            })
        ;
    };

    
    render = () => (
        <div className="ui container stackable" style={{marginTop: '20px', marginBottom: '20px'}}>
            <div className="ui stackable grid">
                <div className="eleven wide column">
                    <h2 className={"ui header segment header-title" + (this.props.details_loading ? " loading" : "")}>
                        {(this.props.details_loading) ? "" : this.props.details.year_of_manufacture + " " + this.props.details.make + " " + this.props.details.model + " " + this.props.details.color + " " + this.props.details.transmission}
                    </h2>
                    {
                        (this.props.details_loading) ? ("") : (
                            <ImageSlider images={this.props.details.images} />
                        )
                    }
                    <div className="ui stackable top attached tabular menu">
                        <a className="item active" data-tab="first">Vehicle Details</a>
                        <a className="item" data-tab="second">Features</a>
                        <a className="item" data-tab="third">Comments</a>
                    </div>
                    <div className="ui bottom attached tab segment active" data-tab="first">
                        <div className="ui relaxed divided list">
                            <table className="ui fixed table segment">
                                <tbody>
                                {
                                    Object.keys(this.props.details).map(function (key, index) {
                                        if (key != 'comments' && key != 'features' && key != 'images' && key != '_version_' && key != 'id') {
                                            return (
                                                <tr key={index}>
                                                    <td className="capitalize">{key.replace("_", " ")}</td>
                                                    <td>{this.props.details[key]}</td>
                                                </tr>
                                            )
                                        }
                                    }, this)
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="ui bottom attached tab segment" data-tab="second">
                        <div className="ui relaxed divided list">
                            {
                                this.props.details.features.map((feature, key) => (
                                    <div key={key} className="item">
                                        <div className="content">
                                            {feature}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="ui bottom attached tab segment" data-tab="third" style={{textAlign: 'justify'}}>
                        {this.props.details.comments}
                    </div>
                    <div className="ui segment">
                        <div className="ui stackable grid">
                            <div className="five wide column">
                                <h3>Find Us</h3>
                                <p>Melbournes Cheapest Cars and Vans</p>
                                <p>Dealer LMCT: 8399</p>
                                <p><i className="marker icon"/>1A Ferntree Gully Road Oakleigh VIC 3166 (<a
                                    href="https://maps.google.com?q=1A Ferntree Gully Road Oakleigh VIC 3166"
                                    target="_blank"><span>View Map</span></a>)
                                </p>
                                <p><i className="volume control phone icon"/>&nbsp;03 9556 0777</p>
                            </div>
                            <div className="eleven wide column">
                                <iframe className="enquiry__iframe" width="100%" height="300" frameBorder="0"
                                        style={{border: '0'}}
                                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDYGHKUhE4O-C7nOPNekzFAb20Ip64urbs&amp;q==1A%20Ferntree%20Gully%20Road%20Oakleigh%20VIC%203166"
                                        allowFullScreen=""></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="five wide column">
                    <form
                        className={"ui form segment enquiry enquiry-form" + (this.props.enquiry_form.loading ? " loading" : "")}>
                        <h1 style={{textAlign: 'center'}}>Vehicle Enquiry</h1>
                        {
                            (this.props.enquiry_form.submitted) ? (
                                <p style={{textAlign: 'justify'}}>
                                    Your enquiry has been sent and we will be in touch shortly.
                                </p>
                            ) : (
                                <div>
                                    <div className={"field" + (this.props.enquiry_form.isNameValid ? "" : " error")}>
                                        <label>Name *</label>
                                        <input ref={n => this.enquiry_form.name = n} placeholder="First Name"
                                               name="name"
                                               type="text"/>
                                    </div>
                                    <div className={"field" + (this.props.enquiry_form.isEmailValid ? "" : " error")}>
                                        <label>Email *</label>
                                        <input ref={n => this.enquiry_form.email = n} placeholder="Enter e-mail"
                                               name="email"
                                               type="email"/>
                                    </div>
                                    <div className="two fields">
                                        <div
                                            className={"field" + (this.props.enquiry_form.isContactValid ? "" : " error")}>
                                            <label>Contact Number *</label>
                                            <input ref={n => this.enquiry_form.contact = n} placeholder="Enter number"
                                                   name="contactno" type="number"/>
                                        </div>
                                        <div
                                            className={"field" + (this.props.enquiry_form.isPostcodeValid ? "" : " error")}>
                                            <label>Postcode *</label>
                                            <input ref={n => this.enquiry_form.postcode = n}
                                                   placeholder="Enter postcode"
                                                   name="postcode" type="number"/>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label>Comments</label>
                                        <textarea ref={n => this.enquiry_form.comments = n} rows="2" name="comments"
                                                  type="text"/>
                                    </div>

                                    <div className="inline field">
                                        <div className="ui checkbox">
                                            <input id="financeCheck" ref={n => this.enquiry_form.finance = n}
                                                   type="checkbox"
                                                   name="finance"/>
                                            <label className="pointer-i" htmlFor="financeCheck">Is finance
                                                required?</label>
                                        </div>
                                    </div>
                                    <div className="inline field">
                                        <div className="ui checkbox">
                                            <input onChange={e => this.props.tradeInCheck(e.target.checked)}
                                                   id="tradeCheck"
                                                   ref={n => this.enquiry_form.trade_in = n} type="checkbox"
                                                   name="trade"/>
                                            <label className="pointer-i" htmlFor="tradeCheck">Add a trade-in?</label>
                                        </div>
                                    </div>
                                    {
                                        this.props.trade_in ? (
                                            <div className="two fields">
                                                <div className="field">
                                                    <label>Make</label>
                                                    <input ref={n => this.enquiry_form.make = n} name="make"
                                                           type="text"/>
                                                </div>
                                                <div className="field">
                                                    <label>Model</label>
                                                    <input ref={n => this.enquiry_form.model = n} name="model"
                                                           type="text"/>
                                                </div>
                                            </div>
                                        ) : ("")
                                    }
                                    {
                                        this.props.trade_in ? (
                                            <div className="two fields">
                                                <div className="field">
                                                    <label>Year</label>
                                                    <input ref={n => this.enquiry_form.year = n} name="year"
                                                           type="number"/>
                                                </div>
                                                <div className="field">
                                                    <label>Odometer</label>
                                                    <input ref={n => this.enquiry_form.odometer = n} placeholder="KM"
                                                           name="odometer" type="number"/>
                                                </div>
                                            </div>
                                        ) : ("")
                                    }
                                    <div className="ui primary button"
                                         onClick={e => this.props.submitEnquiryForm(this.enquiry_form, this.props.params.stock_number)}>
                                        Submit
                                    </div>
                                </div>
                            )
                        }
                    </form>
                    <form className="ui form success segment finance enquiry-form">
                        <h2 style={{textAlign: 'center'}}>Finance Calculator</h2>
                        <div className="ui error message"></div>
                        <div className="field">
                            <label>Loan Amount</label>
                            <input ref={n=>this.amount = n} placeholder="Enter Amount" name="loanamt" type="number"/>
                        </div>
                        <div className="field">
                            <label>Loan Term</label>
                            <select ref={n=>this.term = n} className="ui dropdown" name="loanterm" defaultValue="5"
                                    onChange={e => {
                                    }}>
                                <option value="2">2 years</option>
                                <option value="3">3 years</option>
                                <option value="4">4 years</option>
                                <option value="5">5 years</option>
                            </select>
                        </div>
                        <div className="field">
                            <label>Interest Rate</label>
                            <select ref={n=>this.interest = n} className="ui dropdown" name="insrate" defaultValue="5">
                                <option value="1">1%</option>
                                <option value="2">2%</option>
                                <option value="3">3%</option>
                                <option value="4">4%</option>
                                <option value="5">5%</option>
                                <option value="6">6%</option>
                                <option value="7">7%</option>
                                <option value="8">8%</option>
                                <option value="9">9%</option>
                                <option value="10">10%</option>
                            </select>
                        </div>
                        <div className="field cal-btn">
                            <div onClick={e=>this.props.calculateFinance({
                                amount: this.amount.value,
                                term: this.term.value * 12,
                                interest: this.interest.value
                            })} className="ui primary button">Calculate
                            </div>
                        </div>
                        {
                            (this.props.monthly_repayment != null) ? (
                                <div className="ui grid">
                                    <div className="sixteen wide column">
                                        <label className="month-tag">Monthly Repayment &nbsp;</label>
                                        <label className="price-tag">{"$" + this.props.monthly_repayment}</label>
                                    </div>
                                </div>
                            ) : ("")
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Details
