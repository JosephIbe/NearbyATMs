import React from 'react';
import {GoogleMap, Marker, withGoogleMap} from 'react-google-maps';

export default class MapView extends React.Component {

    constructor(props){
        super(props);
    }

    render() {

        const { lat, lng } = this.props.defaultCenter;
        const latitude = lat || 12.917137;
        const longitude = lng || 77.622791;

        const MyCity = withGoogleMap(props => (

            <GoogleMap
                // defaultCenter={{lat: 12.917137, lng: 77.622791}}
                defaultCenter={{lat: latitude, lng: longitude}}
                defaultZoom={15}>

                {this.props.markers && this.props.markers.map( (marker, index) =>
                    <Marker
                        key={index}
                        position={{lat: marker.lat, lng: marker.lng}}/>
                 )}

            </GoogleMap>

        ));

        return (

                <MyCity
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100vh`, width: '100%' }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    // loadingElement={<div style={{ height: `100%` }} />}
                    // containerElement={<div style={ {width: '100%', height: '100vh' } }></div>}
                    // mapElement={<div style={ {height: '100%'} }></div>}
                />

        )

    }

}

MapView.defaultProps ={
    lat: 12.917137,
    lng: 77.622791
};