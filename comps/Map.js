import React from "react";
import MapView, { Marker, Callout } from 'react-native-maps';


// testing
import { StyleSheet, View, Dimensions, Text } from 'react-native';


export default function Map() {

    return (

        <View style={styles.container}>
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