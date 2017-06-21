import React, {Component} from 'react'

class Footer extends Component {
    render = () => (
        <div>
            <div className="ui segment no-margin social-bg">
                <div className="ui container">
                    <div className="social-media">
                        <p className="tagclr">Follow Us</p>
                        <button className="ui button">
                            <i className="facebook square blue icon big"/>
                            Facebook
                        </button>
                        <button className="ui button">
                            <i className="youtube square red icon big"/>
                            YouTube
                        </button>
                        {/*<div className="ui labeled button" tabindex="0">
                         <div className="ui blue button">
                         <i className="facebook square icon big"/>
                         </div>
                         <a className="ui basic left pointing blue label">
                         Facebook
                         </a>
                         </div>*/}
                        {/*<div className="ui labeled button" tabindex="0">
                            <div className="ui blue button">
                                <i className="youtube square icon big"/>
                            </div>
                            <a className="ui basic blue left pointing label">
                                Youtube
                            </a>
                        </div>*/}
                        <div className="ui divider"></div>
                        <div className="ui stackable grid">
                            <div className="twelve wide column tagclr">
                                © 2016 Melbourne's Cheapest Vans. All right reserved. LMCT: 8399
                            </div>
                            <div className="four wide column right aligned">
                                <div className="ui horizontal list">
                                    <a className="item tagclr" href="#">
                                        Privacy Policy
                                    </a>
                                    <a className="item tagclr" href="#">
                                        Contact Us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ui segment no-margin">
                <div className="ui container">
                    <p className="disclaimer-text">
                        <sup>1</sup>FINANCE TO APPROVED PURCHASERS ONLY. Particulars are for information only and does not guarantee loans or constitute a loan application. Monthly payments are based on a secured commercial loan Purchase price $16,750 over 60&nbsp;months @ 4.99% with $0&nbsp;deposit.(to approved purchasers). Fees and charges apply. Annual percentage rate may vary. Please consult Melbourne's Cheapest Cars on 03 9556 0777 during normal business hours including Saturday and Sunday. Comparison Rate Schedule available at premises of Melbourne's Cheapest Cars Pty Ltd. "WARNING: This comparison rate applies only to the example given. Different amounts &amp; terms will result in different comparison rates and may influence the cost of the loan." LMCT 8399.
                    </p>
                </div>
                <br/>
                <br/>
                <br/>
            </div>
        </div>
    )
}

export default Footer