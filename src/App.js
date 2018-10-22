import React, {Component} from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import MapView from './components/MapView';

class App extends Component {

    state = {
        queryField: '',
        atms: [],
        markers: [],
        isMenuOpen: false,
        apiError: false
    };

    constructor(props){
        super(props);
    }

    componentDidMount() {

        if (this.props.isFromLocation){
            const { latitude, longitude } = this.props;
            // console.log(this.props);

            fetch(
                // 'https://api.foursquare.com/v2/venues/search?ll= 12.917137,77.622791' +
                'https://api.foursquare.com/v2/venues/search?ll=' + latitude + ',' + longitude +
                '&query=atm&client_id=LVN4FEBT5Q0DBIQ2JOP4KYZ1LOEXREFRLOXV5UXAQWHUF14V' +
                '&client_secret=HZRYTMFJRS4N0R50IEZR04JXSO1KWVJWC015VTYLCCCG3C0U&v=20181101')
                .then(response => response.json())
                .then(data => {

                    const atms = data.response.venues;
                    const markers = atms.map( (item) => {
                        return {
                            lat: item.location.lat,
                            lng: item.location.lng
                        }
                    });

                    this.setState({
                        atms,
                        markers
                    })
                })
                .catch(err => {
                    this.setState({apiError: true});
                    throw err;
                });
        } else {
            // no probs, fetching from silk board

            fetch(
                // 'https://api.foursquare.com/v2/venues/search?ll=' + latitude + ',' + longitude +
                'https://api.foursquare.com/v2/venues/search?ll= 12.917137,77.622791' +
                '&query=atm&client_id=LVN4FEBT5Q0DBIQ2JOP4KYZ1LOEXREFRLOXV5UXAQWHUF14V' +
                '&client_secret=HZRYTMFJRS4N0R50IEZR04JXSO1KWVJWC015VTYLCCCG3C0U&v=20181101')
                .then(response => response.json())
                .then(data => {

                    const atms = data.response.venues;
                    const markers = atms.map( (item) => {
                        return {
                            lat: item.location.lat,
                            lng: item.location.lng
                        }
                    });

                    this.setState({
                        atms,
                        markers
                    })
                })
                .catch(err => {
                    this.setState({apiError: true});
                    throw err;
                });
        }

    }

    updateQueryField = (query) => {
        this.setState({
            queryField: query
        });
        console.log(this.state);
    };

    render() {

        let filteredAtms;
        if (this.state.queryField) {

        }

        return (
            <div className="App">
                <div className="mainContainer">

                    <div className="hamburgerDiv">
                        <i className="fas fa-bars" onClick={this.openMenu}></i>
                    </div>

                    <div className="toggleView">

                        <div className="logoContainer">
                            <h1 tabIndex={0}>Kahan ATM??</h1>
                            <h3 tabIndex={0}>Silk Board Flyover, Bengaluru</h3>

                            <input
                                type="text"
                                className="atmFilter"
                                placeholder="Search Available ATMs"
                                value={this.state.queryField}
                                onChange={(event) => this.updateQueryField(event.target.value)}/>

                        </div>

                        <Sidebar
                            atms={this.state.atms}
                            filteredAtms={filteredAtms}
                            apiError={this.state.apiError}/>

                    </div>

                    <div className="mapContainer">

                        <MapView
                            atms={this.state.atms}
                            defaultCenter={{lat: this.props.latitude, lng: this.props.longitude}}
                            markers={this.state.markers}
                            apiError={this.state.apiError}
                            filteredAtms={filteredAtms}/>
                    </div>

                </div>

            </div>
        );
    }
}

export default App;
