import React, {Component} from 'react'
import {Link} from 'react-router'
class Search extends Component {
    makeInput;
    modelInput;
    minYearInput;
    maxYearInput;
    minPriceInput;
    maxPriceInput;
    componentDidMount = () => {
        this.props.getPayloadForInput();
    };
    render = () => (
        <div
            className={"ui search_img_fluid segment search-img-top" + ((this.props.loading.payload_loading) ? " loading" : "")}>
            <br/>
            <div className="ui stackable grid adv-banner">
                <div className="ui column small image centered">
                    <img className="ui centered image" src="/images/MCV-XMAS-web-banners_720x90.png"/>
                </div>
            </div>
            <div className="ui big form container search-panel-home">
                <div className="ui stackable grid">
                    <div className="eight wide column">
                        <h2>SEARCH CARS</h2>
                        <div className="two fields">
                            <div className="field">
                                <select className="ui mini icon input" value={this.props.input_query.make || ""}
                                        type="text" ref={node => this.makeInput = node} onChange={e => {
                                    this.props.updateQuery('make', this.makeInput.value);
                                    this.props.makeChanged(this.makeInput.value);
                                }}>
                                    {
                                        [
                                            <option key="-1" value="">Any Make</option>,
                                            ...this.props.makes_input.map((obj, key) =>
                                                <option key={key}
                                                        value={obj.value}>{obj.value + " (" + obj.count + ")"}</option>
                                            )
                                        ]
                                    }
                                </select>
                            </div>
                            <div className="field">
                                <select className="ui mini icon input" value={this.props.input_query.model || ""}
                                        type="text" ref={node => this.modelInput = node} onChange={e => {
                                    this.props.updateQuery('model', this.modelInput.value)
                                }}>
                                    {
                                        (this.props.loading.models_loading) ?
                                            <option key="-1" value="Loading">Loading</option>
                                            :
                                            [
                                                <option key="-1" value="">Any Model</option>,
                                                ...this.props.models_input.map((obj, key) =>
                                                    <option key={key}
                                                            value={obj.value}>{obj.value + " (" + obj.count + ")"}</option>
                                                )
                                            ]
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="two fields">
                            <div className="field">
                                <select className="ui mini icon input" value={this.props.input_query.min_year || ""}
                                        type="text" ref={node => this.minYearInput = node} onChange={e => {
                                    this.props.updateQuery('min_year', this.minYearInput.value)
                                }}>
                                    {
                                        [
                                            <option key="-1" value="">Min Year</option>,
                                            ...this.props.years_input.map((obj, key) =>
                                                <option key={key} value={obj}>{obj}</option>
                                            )
                                        ]
                                    }
                                </select>
                            </div>
                            <div className="field">
                                <select className="ui mini icon input" value={this.props.input_query.max_year || ""}
                                        type="text" ref={node => this.maxYearInput = node} onChange={e => {
                                    this.props.updateQuery('max_year', this.maxYearInput.value)
                                }}>
                                    {
                                        [
                                            <option key="-1" value="">Max Year</option>,
                                            ...this.props.years_input.map((obj, key) =>
                                                <option key={key} value={obj}>{obj}</option>
                                            )
                                        ]
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="two fields">
                            <div className="field">
                                <select className="ui mini icon input" value={this.props.input_query.min_price || ""}
                                        type="text" ref={node => this.minPriceInput = node} onChange={e => {
                                    this.props.updateQuery('min_price', this.minPriceInput.value)
                                }}>
                                    {
                                        [
                                            <option key="-1" value="">Min Price</option>,
                                            ...this.props.prices_input.map((obj, key) =>
                                                <option key={key} value={obj}>{obj}</option>
                                            )
                                        ]
                                    }
                                </select>
                            </div>
                            <div className="field">
                                <select className="ui mini icon input" value={this.props.input_query.max_price || ""}
                                        type="text" ref={node => this.maxPriceInput = node} onChange={e => {
                                    this.props.updateQuery('max_price', this.maxPriceInput.value)
                                }}>
                                    {
                                        [
                                            <option key="-1" value="">Max Price</option>,
                                            ...this.props.prices_input.map((obj, key) =>
                                                <option key={key} value={obj}>{obj}</option>
                                            )
                                        ]
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="ui stackable grid vehicle">
                            <div className="row">
                                <div className="ui five wide column point">
                                    <a className="pointer" onClick={e => {
                                        this.props.updateQuery('category', 'People Mover')
                                    }}><span className="mccicon i-people-mover"/> People Mover</a>
                                </div>
                                <div className="ui five wide column point">
                                    <a className="pointer" onClick={e => {
                                        this.props.updateQuery('category', 'Van')
                                    }}><span className="mccicon i-bus"/> Van</a>
                                </div>
                                <div className="ui four wide column right floated">
                                    <Link to="/search">
                                        <div className="small ui right floated primary button">Search &nbsp;&nbsp;<i
                                            className="search icon"/></div>
                                    </Link>
                                </div>
                            </div>
                            <div className="ui five wide column point">
                                <a className="pointer" onClick={e => {
                                    this.props.updateQuery('category', 'Refrigerated')
                                }}><span className="mccicon i-bus"/> Refrigerated</a>
                            </div>
                            <div className="ui five wide column point">
                                <a className="pointer" onClick={e => {
                                    this.props.updateQuery('category', 'As Traded')
                                }}><span className="mccicon i-people-mover"/> As Traded</a>
                            </div>
                            <div className="ui five wide column point">
                                <a className="pointer" onClick={e => {
                                    this.props.updateQuery('category', 'Bus')
                                }}><span className="mccicon i-bus"/> Bus</a>
                            </div>
                        </div>
                    </div>
                    <div className="eight wide column">
                        <iframe className="search-iframe" src="https://www.youtube.com/embed/_rNl5tKtrJU"
                                frameBorder="0" allowFullScreen=""></iframe>
                    </div>
                </div>
            </div>
            <br/>
            <div className="ui stackable four column grid container">
                <div className="ui column small image">
                    <img src="/images/badge-utes.png"/>
                    <span className="badge-slogan">up to <strong>200</strong> utes on site</span>
                </div>
                <div className="ui column small image">
                    <img src="/images/badge-cars.png"/>
                    <span className="badge-slogan">up to <strong>600</strong> cars on site</span>
                </div>
                <div className="ui column small image">
                    <img src="/images/badge-vans.png"/>
                    <span className="badge-slogan">up to <strong>200</strong> vans on site</span>
                </div>
                <div className="ui column small image">
                    <img src="/images/badge-4wds.png"/>
                    <span className="badge-slogan">up to <strong>200</strong> 4WD's on site</span>
                </div>
            </div>
        </div>
    )
}
export default Search;