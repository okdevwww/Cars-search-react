import React, {Component} from 'react'

class Facets extends Component {
    minPriceInput;
    maxPriceInput;
    minOdometerInput;
    maxOdometerInput;
    getRanges = () => {
        return [
            {field: 'price', min: this.minPriceInput.value, max: this.maxPriceInput.value},
            {field: 'odometer', min: this.minOdometerInput.value, max: this.maxOdometerInput.value}
        ]
    };
    priceUpdated = false;
    componentDidUpdate = () => {
        if(this.priceUpdated==false){
            this.minPriceInput.value = (this.props.range.filter(o=>o.field=='price')[0]!=undefined)?this.props.range.filter(o=>o.field=='price')[0].min : "";
            this.maxPriceInput.value = (this.props.range.filter(o=>o.field=='price')[0]!=undefined)?this.props.range.filter(o=>o.field=='price')[0].max : "";
            this.priceUpdated = true;
        }
    };
    render = () => (
        <div>
            <div className="ui styled segment accordion accord">

                <div className="title">
                    <i className="dropdown icon"/>
                    Category
                </div>
                <div className="content">
                    {
                        this.props.facets.category.map((o, key) => {
                                if (o.count !== 0 || o.selected) {
                                    return (
                                        <div key={key} className="ui list">
                                            <div className="item pointer"
                                                 onClick={e => this.props.getPayloadForSelected(this.props.facets, {
                                                     field: 'category',
                                                     key
                                                 }, this.getRanges() )}>
                                                <i className={(o.selected ? "check square " : "square outline ") + " blue icon"}/>
                                                <div className="content">
                                                    {o.value + " (" + o.count + ")"}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            }
                        )
                    }
                </div>
            </div>

            <div className="ui styled segment accordion accord">
                <div className="title">
                    <i className="dropdown icon"/>
                    Vehicle
                </div>
                <div className="content">
                    {
                        this.props.facets.make.map((o, key) => {
                                if (o.count !== 0 || o.selected) {
                                    return (
                                        <div key={key} className="ui list">
                                            <div className="item pointer"
                                               onClick={e => {e.stopPropagation(); this.props.getPayloadForSelected(this.props.facets, {
                                                   field: 'make',
                                                   key
                                               }, this.getRanges() )}}>
                                               <i className={(o.selected ? "check square " : "square outline ") + "blue icon"}/>
                                                <div className="content">
                                                    {o.value + " (" + o.count + ")"}



                                                   {
                                                       (o.selected==true)?o.pivot.map((model, model_key) => {
                                                                if (model.count !== 0 || o.selected) {
                                                                    return (
                                                                        <div key={model_key} className="ui list">
                                                                            <div className="item pointer"
                                                                               onClick={e => {e.stopPropagation(); this.props.getPayloadForSelected(this.props.facets, {
                                                                                   field: 'make',
                                                                                   key: model_key,
                                                                                   make_key: key
                                                                               }, this.getRanges() )}}>
                                                                                <i className={(model.selected ? "check square " : "square outline ") + "blue icon"}/>
                                                                                <div className="content">
                                                                                    {model.value + " (" + model.count + ")"}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                }
                                                            }
                                                        ):("")
                                                    }



                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            }
                        )
                    }
                </div>
            </div>


            <div className="ui styled segment accordion accord">
                <div className="title">
                    <i className="dropdown icon"/>
                    Body Type
                </div>
                <div className="content">
                    {
                        this.props.facets.body_type.map((o, key) => {
                            if (o.count !== 0 || o.selected) {
                                return (
                                    <div key={key} className="ui list">
                                        <div className="item pointer"
                                           onClick={e => this.props.getPayloadForSelected(this.props.facets, {
                                               field: 'body_type',
                                               key
                                           }, this.getRanges() )}>
                                          <i className={(o.selected ? "check square " : "square outline ") + "blue icon"}/>
                                            <div className="content">
                                                {o.value + " (" + o.count + ")"}
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>

            <div className="ui styled segment accordion accord">
                <div className="title">
                    <i className="dropdown icon"/>
                    Color
                </div>
                <div className="content">
                    {
                        this.props.facets.color.map((o, key) => {
                                if (o.count !== 0 || o.selected) {
                                    return (
                                        <div key={key} className="ui list">
                                            <div className="item pointer"
                                               onClick={e => this.props.getPayloadForSelected(this.props.facets, {
                                                   field: 'color',
                                                   key
                                               }, this.getRanges() )}>
                                               <i className={(o.selected ? "check square " : "square outline ") + "blue icon"}/>
                                                <div className="content">
                                                    {o.value + " (" + o.count + ")"}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            }
                        )
                    }
                </div>
            </div>


            <div className="ui styled segment accordion accord">
                <div className="title">
                    <i className="dropdown icon"/>
                    Doors
                </div>
                <div className="content">
                    {
                        this.props.facets.doors.map((o, key) => {
                                if (o.count !== 0 || o.selected) {
                                    return (
                                        <div key={key} className="ui list">
                                            <div className="item pointer"
                                               onClick={e => this.props.getPayloadForSelected(this.props.facets, {
                                                   field: 'doors',
                                                   key
                                               }, this.getRanges() )}>
                                               <i className={(o.selected ? "check square " : "square outline ") + "blue icon"}/>
                                                <div className="content">
                                                    {o.value + " (" + o.count + ")"}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            }
                        )
                    }
                </div>
            </div>


            <div className="ui styled segment accordion accord">
                <div className="title">
                    <i className="dropdown icon"/>
                    Drive Type
                </div>
                <div className="content">
                    {
                        this.props.facets.drive_type.map((o, key) => {
                                if (o.count !== 0 || o.selected) {
                                    return (
                                        <div key={key} className="ui list">
                                            <div className="item pointer"
                                               onClick={e => this.props.getPayloadForSelected(this.props.facets, {
                                                   field: 'drive_type',
                                                   key
                                               }, this.getRanges() )}>
                                            <i className={(o.selected ? "check square " : "square outline ") + "blue icon"}/>
                                                <div className="content">
                                                    {o.value + " (" + o.count + ")"}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            }
                        )
                    }
                </div>
            </div>

            <div className="ui styled segment accordion accord">
                <div className="title">
                    <i className="dropdown icon"/>
                    Engine
                </div>
                <div className="content">
                    {
                        this.props.facets.engine.map((o, key) => {
                                if (o.count !== 0 || o.selected) {
                                    return (
                                        <div key={key} className="ui list">
                                            <div className="item pointer"
                                               onClick={e => this.props.getPayloadForSelected(this.props.facets, {
                                                   field: 'engine',
                                                   key
                                               }, this.getRanges() )}>
                                            <i className={(o.selected ? "check square " : "square outline ") + "blue icon"}/>
                                                <div className="content">
                                                    {o.value + " (" + o.count + ")"}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            }
                        )
                    }
                </div>
            </div>

            <div className="ui styled segment accordion accord">
                <div className="title">
                    <i className="dropdown icon"/>
                    Fuel Type
                </div>
                <div className="content">
                    {
                        this.props.facets.fuel_type.map((o, key) => {
                                if (o.count !== 0 || o.selected) {
                                    return (
                                        <div key={key} className="ui list">
                                            <div className="item pointer"
                                               onClick={e => this.props.getPayloadForSelected(this.props.facets, {
                                                   field: 'fuel_type',
                                                   key
                                               }, this.getRanges() )}>
                                          <i className={(o.selected ? "check square " : "square outline ") + "blue icon"}/>
                                                <div className="content">
                                                    {o.value + " (" + o.count + ")"}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            }
                        )
                    }
                </div>
            </div>

            <div className="ui styled segment accordion accord">
                <div className="title">
                    <i className="dropdown icon"/>
                    Reg
                </div>
                <div className="content">
                    {
                        this.props.facets.reg.map((o, key) => {
                                if (o.count !== 0 || o.selected) {
                                    return (
                                        <div key={key} className="ui list">
                                            <div className="item pointer"
                                               onClick={e => this.props.getPayloadForSelected(this.props.facets, {
                                                   field: 'reg',
                                                   key
                                               }, this.getRanges() )}>
                                             <i className={(o.selected ? "check square " : "square outline ") + "blue icon"}/>
                                                <div className="content">
                                                    {o.value + " (" + o.count + ")"}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            }
                        )
                    }
                </div>
            </div>

            <div className="ui styled segment accordion accord">
                <div className="title">
                    <i className="dropdown icon"/>
                    Seats
                </div>
                <div className="content">
                    {
                        this.props.facets.seats.map((o, key) => {
                                if (o.count !== 0 || o.selected) {
                                    return (
                                        <div key={key} className="ui list">
                                            <div className="item pointer"
                                               onClick={e => this.props.getPayloadForSelected(this.props.facets, {
                                                   field: 'seats',
                                                   key
                                               }, this.getRanges() )}>
                                             <i className={(o.selected ? "check square " : "square outline ") + "blue icon"}/>
                                                <div className="content">
                                                    {o.value + " (" + o.count + ")"}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            }
                        )
                    }
                </div>
            </div>


            <div className="ui styled segment accordion accord">
                <div className="title">
                    <i className="dropdown icon"/>
                    Transmission
                </div>
                <div className="content">
                    {
                        this.props.facets.transmission.map((o, key) => {
                                if (o.count !== 0 || o.selected) {
                                    return (
                                        <div key={key} className="ui list">
                                            <div className="item pointer"
                                               onClick={e => this.props.getPayloadForSelected(this.props.facets, {
                                                   field: 'transmission',
                                                   key
                                               }, this.getRanges() )}>
                                             <i className={(o.selected ? "check square " : "square outline ") + "blue icon"}/>
                                                <div className="content">
                                                    {o.value + " (" + o.count + ")"}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            }
                        )
                    }
                </div>
            </div>

            <div className="ui styled segment accordion accord">
                <div className="title">
                    <i  className="dropdown icon"/>
                    Year of manufacture
                </div>
                <div className="content">
                    {
                        this.props.facets.year_of_manufacture.map((o, key) => {
                                if ((o.count !== 0 || o.selected) && o.value!=0) {
                                    return (
                                        <div key={key} className="ui list">
                                            <div className="item pointer"
                                               onClick={e => this.props.getPayloadForSelected(this.props.facets, {
                                                   field: 'year_of_manufacture',
                                                   key
                                               }, this.getRanges() )}>
                                           <i className={(o.selected ? "check square " : "square outline ") + "blue icon"}/>
                                                <div className="content">
                                                    {o.value + " (" + o.count + ")"}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            }
                        )
                    }
                </div>
            </div>

            <div className="ui styled segment accordion accord">
                <div className="title">
                    <i  className="dropdown icon"/>
                    Odometer
                </div>
                <div className="content">
                    <div className="ui grid">

                            <div className="eight wide column">
                                <div className="two column wide">
                                     <label><b>From</b></label>
                                </div>
                                <select className="select-field" ref={node => this.minOdometerInput = node}>
                                    {
                                        [
                                            <option key="-1" value="">Min</option>,
                                            this.props.ranges.odometer.map((o, key) => (
                                                <option key={key} value={o.value}>{o.value}</option>
                                            ))
                                        ]
                                    }
                                </select>
                            </div>
                            <div className="eight wide column">
                                <div className="two column wide">
                                    <label><b>To</b></label>
                                </div>
                                <select className="select-field" ref={node => this.maxOdometerInput = node}>
                                    {
                                        [
                                            <option key="-1" value="">Max</option>,
                                            this.props.ranges.odometer.map((o, key) => (
                                                <option key={key} value={o.value}>{o.value}</option>
                                            ))
                                        ]
                                    }
                                </select>
                            </div>
                            <div className="">
                                 <button className="ui update-btn mini button" onClick={e=>{this.props.getPayloadForRange(this.props.facets,this.getRanges(), this.props.tag)}}><i className="refresh icon"></i>Update</button>
                            </div>

                    </div>
                </div>

            </div>

            <div className="ui styled segment accordion accord">
                <div className="title">
                    <i  className="dropdown icon"/>
                    Price
                </div>
                <div className="content">
                    <div className="ui grid ">
                        <div className="eight wide column">
                            <div className="two column wide">
                                <label><b>From</b></label>
                            </div>
                                <select className="select-field" ref={node => this.minPriceInput = node}>
                                    {
                                        [
                                            <option key="-1" value="">Min</option>,
                                            this.props.ranges.price.map((o, key) => (
                                                <option key={key} value={o.value}>{o.value}</option>
                                            ))
                                        ]
                                    }
                                </select>
                        </div>

                        <div className="eight wide column">
                            <div className="two column wide">
                                 <label><b>To</b></label>
                            </div>
                                <select className="select-field" ref={node => this.maxPriceInput = node}>
                                    {
                                        [
                                            <option key="-1" value="">Max</option>,
                                            this.props.ranges.price.map((o, key) => (
                                                <option key={key} value={o.value}>{o.value}</option>
                                            ))
                                        ]
                                    }
                                </select>
                        </div>
                        <div className="">
                            <div className="ui update-btn mini button" onClick={e=>{this.props.getPayloadForRange(this.props.facets,this.getRanges(), this.props.tag)}}><i className="refresh icon"></i>Update</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Facets;