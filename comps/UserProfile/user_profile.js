import { Text, View, StyleSheet, Image } from 'react-native';
import React, { useState, useCallback } from "react";
//for FONT USAGE
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

//DATABASE for FIRBASE
import { loginUser } from "../Login/Login";
import { db } from '../../firebase/firebase';
import { ref, onValue } from "firebase/database";

export default function UserProfile() {
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

    //////////////////////Read DATA from FIREBASE///////////////////////
    let firstName = "";
    let lastName = "";
    let location = "";
    let bio = ""

    const userRef = ref(db, 'user/' + loginUser.user.uid);
    onValue(userRef, (snapshot) => {
        const data = snapshot.val();

        console.log(data);
        firstName = data.first;
        lastName = data.last;
        location = data.location;
        bio = data.bio;

    })
    ////////////////////////////////////////////////////////////////////
    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            <Image style={styles.imageStyle} source={require("../../assets/userPhoto.png")} />
            <Text style={styles.nameStyle}>{firstName} {lastName}</Text>
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