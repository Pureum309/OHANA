import React from "react";
// imports for map and map functions 
import MapView, { Marker, Callout } from 'react-native-maps';

// test stylings
import { StyleSheet, View, Dimensions, Text } from 'react-native';


export default function Map() {

    return (

        // TEST container
        <View style={styles.container}>
            {/* our map */}
            <MapView
                initialRegion={{
                    latitude: 49.246292,
                    longitude: -123.116226,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                showsUserLocation={true}
                style={styles.map}
                provider="google"
            >
                {/* ****Test Markers**** */}
                <Marker
                    coordinate={{
                        latitude: 49.251014,
                        longitude: -123.003636
                    }}
                    pinColor='green'
                >
                    {/* Tappable call out for the pin */}
                    <Callout>
                        <Text>BCIT</Text>
                    </Callout>
                </Marker>

                <Marker
                    coordinate={{
                        latitude: 49.265746,
                        longitude: -123.249492
                    }}
                    pinColor='green'
                >
                    <Callout>
                        <Text>UBC</Text>
                    </Callout>
                </Marker>

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
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});