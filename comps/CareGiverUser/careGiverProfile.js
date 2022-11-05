import { Text, View, StyleSheet, Image } from 'react-native';
import React, { useState, useCallback } from "react";
//for FONT USAGE
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


export default function CareGiverProfile({
    name,
    location,
    bio
}) {
    //For FONT USAGE
    const [fontsLoaded] = useFonts({
        'Nunito': require('../../assets/fonts/Nunito-Regular.ttf')
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    })

    if (!fontsLoaded) {
        return null;
    }
    return (
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={require("../../assets/userPlaceholder.png")} />
            <Text style={styles.nameStyle}>{name}</Text>
            <Text style={styles.locationStyle}>{location}</Text>
            <Text style={styles.bioStyle}>{bio}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        margin: 30
    },
    imageStyle: {
        height: 125,
        width: 125,
        margin: 15,
    },
    nameStyle: {
        fontWeight: 'bold',
        fontSize: 25,
        fontFamily: 'Nunito',
    },
    locationStyle: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'grey',
        fontFamily: 'Nunito',
    },
    bioStyle: {
        margin: 10,
        fontFamily: 'Nunito',
    }
})