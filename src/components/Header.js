import React, {Component} from 'react'
import {Link} from 'react-router'

class Header extends Component {
    render = () => (
        <div>
            <div className="ui menu stackable header-top-menu no-margin">
                    <div className="ui image">
                        <Link to="/">
                            <img className="header-menu-logo" src="/images/logo.png"/>
                        </Link>
                    </div>
                    <div className="right menu container">
                        <Link to="/search" className="item">
                            OUR STOCK
                        </Link>
                        <Link to="/finance" className="item">
                            FINANCE
                        </Link>
                        <Link to="/contactus" className="item">
                            CONTACT US
                        </Link>
                    </div>
            </div>
            <div className="ui segment no-margin no-border-radius" style={{zIndex: 2}}>
                <div className="ui container">
                    <div className="ui stackable grid">
                        <div className="eleven wide column">
                            <div className="ui image label curve-label">
                                up to 200
                            </div> Vans on-site
                            <div className="ui image label curve-label">
                                22
                            </div> Users online
                        </div>
                        <div className="five wide column right aligned">
                            <div className="ui horizontal list">
                                <a className="item call-bt" href="tel:0390992944">
                                   <span><i className="mobile icon blue"/>Call 03 9099 2944</span>
                                </a>
                                <a className="item" href="#">
                                    FAVOURITES
                                </a>
                                <div className="ui image label curve-label">
                                    0
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="disclaimer-text">
                        *All cars sold unregistered. Purchaser to pay registration, Government stamp duty and transfer fee.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Header