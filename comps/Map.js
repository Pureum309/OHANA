import React from "react";
import MapView from 'react-native-maps';

// testing
import { StyleSheet, Text, View, Dimensions } from 'react-native';


export default function Map() {

    return (

        <View style={styles.container}>
            <MapView style={styles.map} />
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