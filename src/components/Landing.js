import React from 'react';
import App from '../App';

export default class Landing extends React.Component {

    constructor(){
        super();

        this.state = {
            mLocation: {
                lat: '',
                lng: ''
            },
            isFromLocation: false,
            shouldShowMain: false,
            shouldShowMainWithProps: false
        };

    }

    showAppMain =() => {
        console.log('Silk board clicked');
        this.setState({
            shouldShowMain: !this.state.shouldShowMain // or just set it to true
        })
    };

    showAppMainWithLocation = () => {
        console.log('With Location clicked');
        this.getMyLocation();
    };

    getMyLocation () {
        const location = window.navigator && window.navigator.geolocation;
        console.log(location);

        if (location) {
            location.getCurrentPosition( (position) => {
                this.setState({
                    mLocation: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    },
                    shouldShowMainWithProps: true
                });
                console.log(this.state);
            })
        }

    }

    render() {

        if (this.state.shouldShowMain){
            return ( <App/> )
        } else if (this.state.shouldShowMainWithProps){
            const { lat, lng } = this.state.mLocation;
            const isFromLocation = !this.state.isFromLocation;
            return ( <App
                latitude={lat}
                longitude={lng}
                isFromLocation = {isFromLocation}
            />)
        }

        return (
            <div className='landing'>
                <div className="centered">
                    <div className="introText">
                        <h3>Welcome to KahanATM</h3>
                        <h5>A Simple Web App with React to find ATMs closest to you (3km radius) or from Silk Board Flyover</h5>
                    </div>

                    <div className="buttonsLayout">

                        <button
                            className='getLocation'
                            onClick={this.showAppMainWithLocation}>
                            Get My Location
                        </button>

                        <button
                            className='silkBoard'
                            onClick={this.showAppMain}>
                            Central Silk Board
                        </button>
                    </div>
                </div>
            </div>
        );
    }

}