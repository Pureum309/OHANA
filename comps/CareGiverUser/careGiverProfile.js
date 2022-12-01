import { Text, View, StyleSheet, Image } from 'react-native';
import React, { useState, useCallback } from "react";
//for FONT USAGE
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

//DATABASE for FIRBASE
import { loginUser } from "../Login/Login";
import { db } from '../../firebase/firebase';
import { doc, onSnapshot } from "firebase/firestore";

export default function CareGiverProfile({
    name,
    location,
    bio
}) {
    const [user, setUser] = useState({});
    //For FONT USAGE
    const [fontsLoaded] = useFonts({
        'Nunito': require('../../assets/fonts/Nunito-Regular.ttf'),
        'Rubik': require('../../assets/fonts/Rubik-Bold.ttf')
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    })

    if (!fontsLoaded) {
        return null;
    }

    const unsub = onSnapshot(doc(db, 'users', loginUser.user.uid), (doc) => {
        setUser(doc.data());
    });

    return (
        <View style={styles.container}>
            <Text style={styles.profileStyle}>Caregiver</Text>
            <Image style={styles.imageStyle} source={{ uri: user.pic }} />
            <Text style={styles.nameStyle}>{user.first} {user.last}</Text>
            <Text style={styles.locationStyle}>{user.location}</Text>
            <Text style={styles.bioStyle}>{user.bio}</Text>
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
        borderRadius: 70,
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
    },
    profileStyle: {
        fontFamily: 'Rubik',
        fontSize: 32,
        color: "#2D2D2A",
    }
})