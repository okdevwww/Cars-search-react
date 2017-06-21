import React, {Component} from 'react'
import {Link} from 'react-router'

class Cars extends Component{
    render = () => (
        <div>
            {
                this.props.cars.map((o, key) =>
                    (
                        <div key={key} className={"ui divided items segment veh-results" + (this.props.results_loading ? " loading" : "")}>
                            <div className="item">

                                <div className="content">
                                    <Link to={"/car/" + o.stock_number} className="header">{
                                        o.year_of_manufacture + " " + o.make + " " + o.model + " " + o.color + " " + o.transmission
                                    }</Link>

                                    <div className="ui stackable four column grid car-row">
                                        <Link to={"/car/" + o.stock_number} className="two column wide column">
                                            <img className="ui large image img-height"  src={o.images[0]?"/images/" + o.images[0]:"/images/image.png"} />
                                        </Link>
                                        <Link to={"/car/" + o.stock_number} className="column">
                                            <div className="ui two column grid">
                                                <div className="wide column">
                                                    <img className="ui large image"  src={o.images[1]?"/images/" + o.images[1]:"/images/image.png"} />
                                                </div>
                                                <div className="wide column">
                                                    <img className="ui large image"  src={o.images[2]?"/images/" + o.images[2]:"/images/image.png"} />
                                                </div>
                                            </div>
                                            <div className="ui two column grid">
                                                <div className="wide column">
                                                    <img className="ui large image"  src={o.images[3]?"/images/" + o.images[3]:"/images/image.png"} />
                                                </div>
                                                <div className="wide column">
                                                    <img className="ui large image"  src={o.images[4]?"/images/" + o.images[4]:"/images/image.png"} />
                                                </div>
                                            </div>

                                        </Link>
                                        <div className="column">
                                            <p><i className="crosshairs icon"/>{o.engine}</p>
                                            <p><i className="compress icon"/>{o.transmission}</p>
                                            <p><i className="car icon"/>{o.body_type}</p>
                                            <p><i className="compass icon"/>{o.odometer} KM</p>
                                        </div>
                                        <div className="column">
                                            <p className="price"> <b> $ {o.price} </b></p>
                                            <div class="sale-terms">Excl. Govt. Charges</div>
                                            <div>
                                                <Link to={"/car/" + o.stock_number} className="ui carbtn button details-btn" > Details</Link>
                                            </div>
                                        </div>
                                        <Link to={"/car/" + o.stock_number} className="fourteen wide column comments">
                                            <p className="limited-txt">{o.comments}</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ),this
                )
            }
        </div>
    )
}

export default Cars;
