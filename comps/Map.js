import React, { useState } from "react";
// imports for map and map functions 
import MapView, { Marker, Callout } from 'react-native-maps';

// test stylings
import { StyleSheet, View, Dimensions, Text } from 'react-native';

import CustomMarker from "./CustomMarker";


export default function Map() {

    return (

        // TEST container
        <View style={styles.container}>
            {/* our map */}
            <MapView
                initialRegion={{
                    latitude: 49.248499,
                    longitude: -123.001375,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                showsUserLocation={true}
                style={styles.map}
                provider="google"
                maxZoomLevel={50}
            >
                {/* ****Test Markers**** */}
                {/* <Marker
                    coordinate={{
                        latitude: 49.251014,
                        longitude: -123.003636
                    }}
                    pinColor="red"
                >
                    <Callout>
                        <Text>BCIT</Text>
                    </Callout>
                </Marker> */}

                <CustomMarker
                    coordinate={{
                        latitude: 49.251014,
                        longitude: -123.003636
                    }}
                />
            </MapView>
        </View>

    );
}

// ******** Test Styling, can be changed later! **********
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});