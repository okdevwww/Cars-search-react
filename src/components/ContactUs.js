import React, {Component} from 'react'

class ContactUs extends Component {
    render = () => (
        <div>
           <div className="ui container contact-container">
             <div className="ui stackable grid">

                <div className="eight wide column">
                    <form className="ui form segment contact-form">
                        <h1>Contact Us </h1>
                        <div>1a Ferntree Gully Rd</div>
                        <div>Oakleigh VIC 3166</div>
                        <div>P: <a href="tel:0390992944">03 9099 2944</a></div>
                        <br/>
                        <div>
                            <h4>Open Hours</h4>
                        </div>
                        <div>Mon-Sat: 8am-6pm</div>
                        <div>Sun: CLOSED</div>
                        <br/>

                        <div className="field">
                            <input placeholder="Full Name(required)" name="name" type="text"/>
                        </div>
                        <div className="field">
                            <input placeholder="Email Address(required)" name="email" type="email"/>
                        </div>
                        <div className="field">
                             <input placeholder="Phone Number(required)" name="phoneno" type="text"/>
                        </div>
                        <div className="field">
                            <select class="ui dropdown" name="contact" placeholder="Please select contact">
                                <option value="">Please select contact</option>
                                <option value="2">State Manager (Extended Warranty)</option>
                                <option value="3">Manager Finance &amp; Insurance</option>
                                <option value="5">Sales Manager</option>
                                <option value="6">Sales Manager</option>
                                <option value="7">Buying Manager/ Valuer</option>
                                <option value="8">Service Centre Manager</option>
                                <option value="9">Dealer Principal</option>
                            </select>
                        </div>
                        <div className="field">
                            <textarea placeholder="Comments(required)" name="comments" type="text"/>
                        </div>
                        <div className="ui fluid negative submit button">Submit &nbsp;<i className="mail outline icon"></i></div>
                    </form>
                </div>
                 <div className="eight wide column">
                     <iframe className="enquiry__iframe" width="100%" height="450" frameborder="0" style={{border:'0'}}  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDYGHKUhE4O-C7nOPNekzFAb20Ip64urbs&amp;q==1A%20Ferntree%20Gully%20Road%20Oakleigh%20VIC%203166" allowfullscreen=""></iframe>
                 </div>
             </div>
           </div>
           <div className="ui container">
             <div className="ui grid">
                <div className="sixteen wide column">
                    <img className="ui contact-banner image" src={"/images/van-superstore.jpg"}/>
                </div>
             </div>
           </div>


        </div>
    )
}

export default ContactUs