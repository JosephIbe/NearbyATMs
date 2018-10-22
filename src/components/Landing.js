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
            shouldShowMain: false
        };

    }

    launchMainWithoutProps = () => {
        return (<App />)
    };

    showAppMain =() => {
        console.log('Silk board clicked');
        this.setState({
            shouldShowMain: !this.state.shouldShowMain
        })
    };

    showAppMainWithLocation = () => {
        console.log('With Location clicked');
        this.getMyLocation();
    };

    getMyLocation () {
        if (navigator.geolocation){
            console.log('Getting Current Location...');
            window.onload = () => {
                console.log('win loaded');
                let startPos;
                const geoSuccess = (position) => {
                    startPos = position;
                    navigator.geolocation.getCurrentPosition(geoSuccess);
                    console.log(startPos.coords.latitude);
                    console.log(startPos.coords.longitude);
                    this.setState({
                        mLocation: {
                            lat: startPos.coords.latitude,
                            lng: startPos.coords.longitude
                        }
                    });
                    console.log(this.state);
                }
            }
        } else {
            console.log('Cannot Get Current Location...');
        }
    }

    render() {

        if (this.state.shouldShowMain){
            return ( <App/> )
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