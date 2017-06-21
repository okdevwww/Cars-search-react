import React, {Component} from 'react'
import $ from 'jquery'
import Facets from '../containers/Facets'
import Cars from './Cars'

class Results extends Component {
    searchQueryInput;
    componentDidMount = () => {
        $('.ui.accordion').accordion({
            exclusive: false,
            animateChildren: false,
            duration: 0
        });
        this.props.getPayloadForSelected(this.props.input_query);
    };
    render = () => (
        <div className={"ui grid stackable container"} style={{marginTop: '20px', marginBottom: '20px'}}>
            <div className="four wide column">
                <Facets/>
            </div>
            <div className="twelve wide column">
                <div className="ui grid">
                    <div className="sixteen wide column">
                        <div className="ui stackable menu">
                            <div className="item">
                                <div className="ui icon input">
                                    <input ref={node => this.searchQueryInput = node} type="text" placeholder="Search..." onKeyDown={e=>{
                                        if(e.keyCode==13 || e.keyCode==14){
                                            this.props.searchWithQueryAndPaginate(this.props.facets, this.props.range, this.props.tag, this.searchQueryInput.value);
                                        }
                                    }}/>
                                    <i className="search icon"/>
                                </div>
                            </div>
                            <div className="right stackable ui secondary menu">
                                {
                                    (this.props.pagination.start>9)?(
                                        <div className="item"><button className="ui left labeled icon button" onClick={e=>{
                                            this.props.searchWithQueryAndPaginate(this.props.facets, this.props.range, this.props.tag, this.searchQueryInput.value,
                                                this.props.pagination.start-10);
                                        }}>
                                            <i className="left arrow icon"/>
                                            Previous
                                        </button></div>
                                    ):("")
                                }
                                <div className="item">
                                    {this.props.pagination.start/10+1} / {Math.ceil(this.props.pagination.numFound/10)}
                                </div>
                                {
                                    (this.props.pagination.start/10+1!=Math.ceil(this.props.pagination.numFound/10))?(
                                        <div className="item"><button className="ui right labeled icon button" onClick={e=>{
                                            this.props.searchWithQueryAndPaginate(this.props.facets, this.props.range, this.props.tag, this.searchQueryInput.value,
                                                this.props.pagination.start+10);
                                        }}>
                                            <i className="right arrow icon"/>
                                            Next
                                        </button></div>
                                    ):("")
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui grid">
                    <div className="sixteen wide column">
                        <Cars cars={this.props.docs} results_loading={this.props.results_loading}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Results
