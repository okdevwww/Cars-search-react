import {connect} from 'react-redux'
import FacetComponent from '../components/Facets'
import {getPayloadForSelected, getPayloadForRange} from '../actions/results'

const mapStateToProps = (state, ownProps) => {
    return {
        facets: state.facets,
        ranges: state.ranges,
        range: state.range,
        tag: state.tag,
        query: state.query
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getPayloadForSelected : (facetsCurrent, selected, range) => {
            let facets = {...facetsCurrent};
            facets[selected.field] = [...facets[selected.field]];
            if(selected.make_key!=undefined){
                facets['make'][selected.make_key] = {...facets['make'][selected.make_key]};
                facets['make'][selected.make_key]['pivot'] = [...facets['make'][selected.make_key]['pivot']];
                facets['make'][selected.make_key]['pivot'][selected.key] = {...facets['make'][selected.make_key]['pivot'][selected.key], selected: !facets['make'][selected.make_key]['pivot'][selected.key].selected};
            }
            else{
                facets[selected.field][selected.key] = {...facets[selected.field][selected.key], selected: !facets[selected.field][selected.key].selected};

                // Code to update selected of category if body_type is selected and vice versa.
                if(['category', 'body_type'].indexOf(selected.field)!=-1){
                    let category_type_field = (selected.field =='category')?'body_type':'category';
                    facets[category_type_field] = facets[category_type_field].filter((o) => {
                        let words1 = o.value.split('/'), words2 = facets[selected.field][selected.key].value.split('/'), i, j;
                        for (i = 0; i < words1.length; i++) {
                            for (j = 0; j < words2.length; j++) {
                                if (words1[i].toLowerCase() == words2[j].toLowerCase()){
                                    return true;
                                }
                            }
                        }
                    });
                    facets[category_type_field] = facets[category_type_field].map( (o) => ({...o, selected: facets[selected.field][selected.key].selected}) );
                }
            }
            let SingleField = {OneCount:0, OneField:""};
            for(let prop in facets){
                if(facets.hasOwnProperty(prop)) {
                    facets[prop] = facets[prop].filter((o) => {
                        return o.selected === true;
                    });
                    if(prop=='make'){
                        facets[prop] = facets[prop].map((o)=>{
                            o.pivot = o.pivot.filter((p)=>{
                                return p.selected===true;
                            });
                            return o;
                        })
                    }
                    if(facets[prop].length>0) {SingleField.OneCount++; SingleField.OneField=prop;}
                }
            }
            dispatch(getPayloadForSelected({selectedFacets:facets, tag:(SingleField.OneCount==1)?SingleField.OneField:selected.field, single_field:SingleField, ranges: range, query: ownProps.query}))
        },
        getPayloadForRange : (facetsCurrent, range, tag) => {
            let facets = {...facetsCurrent};
            for(let prop in facets){
                if(facets.hasOwnProperty(prop)) {
                    facets[prop] = facets[prop].filter((o) => {
                        return o.selected === true;
                    });
                }
            }
            dispatch(getPayloadForSelected({selectedFacets:facets, ranges: range, tag: tag, query: ownProps.query}))
        }
    }
};

const Facets = connect(
    mapStateToProps,
    mapDispatchToProps
)(FacetComponent);

export default Facets;


