import React from "react";
import MapView from 'react-native-maps';

// testing
import { StyleSheet, Text, View, Dimensions } from 'react-native';


export default function Map() {

    return (

        <View style={styles.container}>
            <MapView
                initialRegion={{
                    latitude: 49.246292,
                    longitude: -123.116226,
                    latitudeDelta: 0.11,
                    longitudeDelta: 0.1,
                }}
                showsUserLocation={true}
                style={styles.map}
                provider="google"
            />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width / 2,
        height: Dimensions.get('window').height / 2,
    },
});