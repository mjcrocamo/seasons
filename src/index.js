import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner';


class App extends React.Component {

    /*constructor(props) {
        super(props);
        
        // Only time you can directly assign to state
        this.state = { lat: null, errorMessage: '' };
    }*/

    state = {lat: null, errorMessage: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            // call back function
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        );
    }

    componentDidUpdate() {
        console.log('My component re-rendered')
    }

    renderContent() {

        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return <Spinner message={"Please accept location request"}/>;
    }

    // React says we have to define render
    render() {
        /*return (
            /*<div>Latitude: {this.state.lat} 
            <br />
            Error: {this.state.errorMessage}
            </div>
            );*/
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );

    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);