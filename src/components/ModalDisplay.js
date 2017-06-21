import React, { Component } from 'react'
import $ from 'jquery'

class ModalDisplay extends Component {

 componentDidMount = () => {
        var self=this;
         $(window).on('modal.hidden', function(ev){
      self.setState(self.getInitialState());
    });
    };
    render = () => {
        return (

            <div class="ui modal">
                <i class="close icon"></i>
                <div class="header">
                    Header
                 </div>
                <div class="content">
                    <div class="left">
                        Some content to the left, usually an image or icon
                    </div>
                    <div class="right">
                        Some content to the right
                 </div>
                </div>
                
            </div>
        )
    }
}

export default ModalDisplay
