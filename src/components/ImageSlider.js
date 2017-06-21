import React, {Component} from 'react'
import $ from 'jquery'

class ImageSlider extends Component {
    constructor(props) {
      super(props);
        
      this.state = {
         imagesrc: "/images/"
      }

   }
         
    showModal(val) {
        this.setState({imagesrc: "/images/" + val});
        var self = $('.test.modal');
        self.modal({
          onShow: function () {
            self.modal('refresh'); // does NOT help
            setTimeout(function () {
                 self.modal('refresh');
            }, 100); // destroyoes help 1s is probably overkill
          }
       }).modal("show");
     
   };
   
    componentDidMount = () => {
        this.lightSlider = $('#lightSlider').lightSlider({
            gallery: true,
            item: 1,
            loop: true,
            slideMargin: 0,
            thumbItem: 5,
            adaptiveHeight: true
        });
    };
    componentWillUnmount = () => {
        $('.test.modal').remove();
        this.lightSlider.destroy();

    };
    
    render = () => {
        return (
            <div>
                <ul id="lightSlider">
                    {
                        this.props.images.map((image, key) => (
                            
                            <li key={key} data-thumb={"/images/" + image}>
                                <img src={"/images/" + image} onClick={()=>{this.showModal(image)}} />
                            </li>
                            
                        ))
                    }
                </ul>
                <div className="ui test large modal">

                    <i className="large close icon"></i>
                  
                    <div className="content">
                                <img  src={this.state.imagesrc} />
                     </div>
               </div>
            </div>
        )
    }
}

export default ImageSlider
