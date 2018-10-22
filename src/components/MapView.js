import React from 'react';
import {GoogleMap, Marker, withGoogleMap} from 'react-google-maps';

export default class MapView extends React.Component {

    render() {
        const Bengaluru = withGoogleMap(props => (
            <GoogleMap
                defaultCenter={{lat: 12.917137, lng: 77.622791}}
                defaultZoom={15}>

                {/*{<Marker position={{lat: 12.917137, lng: 77.622791}}/>}*/}

                {this.props.markers && this.props.markers.map( (marker, index) =>
                    <Marker
                        key={index}
                        position={{lat: marker.lat, lng: marker.lng}}/>
                 )}

            </GoogleMap>

        ));

        return (

                <Bengaluru
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