import React, {Component} from 'react'
import {Link} from 'react-router'
import $ from 'jquery'

class Finance extends Component {
    componentDidMount = () => {
        $('.ui.form.finance')
            .form({
                fields: {
                    loanamt     : 'empty',
                    loanterm    : 'empty',
                    insrate   : 'empty'
                }
            })
        ;
        $('#enquire').click(function(){
            $('#enquire-modal').modal('show');
        });

    };
    render = () => (
        <div>
            <div className="finance-page-banner">
                <div className="finance-page-textbox">
                    <h1 className="looking-to">VAN FINANCE MADE EASY!</h1>
                    <h3 className="looking-to">Looking to finance your next van purchase?</h3>
                </div>
            </div>
            <div className="ui center aligned segment no-margin">
                <h1 className="text-big">Drive Away in Your Very Own Van Today!</h1>
                <h2>Looking to finance your next van purchase?</h2>
            </div>
            <div className="ui segment no-margin" style={{background:'#f2f2f2'}}>
                <div className="ui container">
                    <div className="ui stackable grid">
                        <div className="eight wide column">
                            <div className="price-badge">
                                <span className="pay-amount">
                                    <sup>$</sup>
                                    <span>99</span>
                                </span>
                                <span>Per Week</span>
                            </div>

                            <div className="ui big image">
                                <img src="/images/hyundai-van.jpg"/>
                            </div>
                            <h1 className="text-center">UP TO 150 VANS</h1>
                            <p className="text-center">
                                <small><em>* The image of the vehicle above is not an actual vehicle in stock - it's only a representation.</em></small>
                            </p>
                            <h1 className="text-center ui button massive">CALL (03) 9556 0774 or ENQUIRE ONLINE </h1>
                            <p className="text-center">Call us between 8.30 am to 9.00 pm Weekdays / All day Saturday and Sunday</p>
                        </div>
                        <div className="eight wide column">
                            <form className="ui form segment finance enquiry-form">
                                <h2 className="loan-h2">Van Loan Calculator</h2>
                                <div>
                                    <h3>Estimated Payment</h3>
                                    <div>
                                        <span className="dollarsign">$</span>
                                        <span className="valuesign">99</span>
                                        <div>
                                            <span className="perweek">Per Week</span>
                                            <a className="disclaimer" href="#">* Read Disclaimer</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="ui error message"></div>
                                <div className="field">
                                    <label>LOAN AMOUNT</label>
                                    <div className="ui labeled input">
                                        <div className="ui label">
                                            $
                                        </div>
                                        <input placeholder="Enter Amount" name="loanamt" type="number"/>
                                    </div>
                                </div>
                                <div className="field">
                                    <label>DEPOSIT / TRADE-IN</label>
                                    <div className="ui labeled input">
                                        <div className="ui label">
                                            $
                                        </div>
                                        <input placeholder="Enter Amount" name="deposit" type="number"/>
                                    </div>
                                </div>
                                <div className="field">
                                    <label>INTEREST RATE</label>
                                    <div className="ui labeled input">
                                        <input placeholder="Enter Amount" name="interest" type="float"/>
                                        <div className="ui label">
                                            %
                                        </div>
                                    </div>
                                </div>

                                <div className="field">
                                    <label>LOAN TERM (YEARS)</label>
                                    <select class="ui dropdown" name="loanterm">
                                        <option value="1">1 years</option>
                                        <option value="2">2 years</option>
                                        <option value="3">3 years</option>
                                        <option value="4">4 years</option>
                                        <option value="5" selected="selected">5 years</option>
                                        <option value="6">6 years</option>
                                        <option value="7">7 years</option>
                                    </select>
                                </div>
                                <div className="field">
                                    <div className="ui three column grid">
                                        <div className="row">
                                            <div className="column"></div>
                                            <div className="column">
                                                <button className="ui primary submit button">CALCULATE FINANCE</button>
                                            </div>
                                            <div className="column"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="field">
                                    <button className="fluid ui primary button">ENQUIRE ONLINE NOW</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ui segment no-margin">
                <div className="ui container center aligned">
                    <button className="ui blue massive button" id="enquire">
                        <i className="mail icon"/>
                        ENQUIRE ONLINE NOW
                    </button>
                    <Link to="/search">
                        <button className="ui red massive button">
                            <i className="search icon"/>
                                SEARCH OUR STOCK
                        </button>
                    </Link>
                </div>
            </div>
            <div id="enquire-modal" className="ui modal">
                <i className="close icon"/>
                <div className="header">
                    Modal Title
                </div>
                <div className="image content">
                    <div className="image">
                        An image can appear on left or an icon
                    </div>
                    <div className="description">
                        A description can appear on the right
                    </div>
                </div>
                <div className="actions">
                    <div className="ui button">Cancel</div>
                    <div className="ui button">OK</div>
                </div>
            </div>
        </div>
    )
}

export default Finance