import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

class Map extends Component{

    constructor(props) {
        super(props);

        this.state = {
            error: null,
            mapRegion: null,
            latlng: []
        };
    }

    componentDidMount() {
        this.watchId = navigator.geolocation.watchPosition (
            (position) => {
                console.log('Position', position);
                let mapRegion = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121
                };
                this.setState({
                    mapRegion,
                    latlng: [position.coords.latitude, position.coords.longitude],
                    error: null
                });
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchId);
    }

    render() {
        return(
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    region={this.state.mapRegion}
                >
                    {this.state.mapRegion ?
                        <Marker
                            coordinate={{latitude: this.state.mapRegion.latitude, longitude: this.state.mapRegion.longitude}}
                            title={'Ashu'}
                            description={'Hello World......'}
                        /> : null
                    }
                </MapView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {...StyleSheet.absoluteFillObject},
    map: {...StyleSheet.absoluteFillObject}
});

export default Map;