import React, {Component} from 'react'
import Header from './Header'
import Footer from './Footer'

class App extends Component {
    render = () => {
        const {children} = this.props;
        return (
            <div>
                <Header />
                <div className="cars-container">
                    { children }
                </div>
                <Footer />
            </div>
        )
    };
}

export default App;