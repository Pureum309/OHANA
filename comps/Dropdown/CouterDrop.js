// import * as React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import CounterView from './Counter';
import { Button } from 'react-native-paper';
import React, { useState, useCallback } from "react";

import IonicIcon from 'react-native-vector-icons/Ionicons'

//for FONT USAGE
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const CouterDrop = () => {
    const [show, setShow] = useState(false);

    const onPress = () => {
        setShow(!show);
    }
    //For FONT USAGE
    const [fontsLoaded] = useFonts({
        'Rubik': require('../../assets/fonts/Rubik-Bold.ttf'),
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
        <View style={styles.container} onLayout={onLayoutRootView}>
            <View style={show ? styles.dropdownExpand : styles.dropdown}>
                <View style={styles.textCont}>
                    <IonicIcon name="person-add-outline" onPress={onPress} size="18" style={show ? styles.focusIconExpand : styles.focusIcon} />
                    <Text style={[styles.selectedTextStyle, { paddingRight: 105 }]} >Add Number of Caregivers</Text>
                    <IonicIcon name="add-outline" onPress={onPress} size="16" />
                </View>
                {show &&
                    <CounterView />
                }
            </View>
        </View>
    );
};
export default CouterDrop;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        // paddingTop: 5,
        paddingBottom: 15,
    },
    dropdown: {
        height: 50,
        borderColor: '#2D2D2A',
        borderWidth: 1,
        borderRadius: 8,
        //paddingHorizontal: 8,

        display: "flex",
        justifyContent: 'center'
    },
    dropdownExpand: {
        height: 100,
        borderColor: '#00A0C3',
        borderWidth: 1,
        borderRadius: 8,
        //paddingHorizontal: 8,
        color: "#00A0C3",

        display: "flex",
        justifyContent: 'center'
    },
    textCont: {
        display: "flex",
        flexDirection: 'row',
        position: 'absolute',
        backgroundColor: 'white',
        // left: 22,
        top: 15,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,

    },
    selectedTextStyle: {
        fontSize: 16,
        fontFamily: 'Nunito'
    },

    focusIcon: {
        paddingHorizontal: 4,
        color: '#00A0C3',
    },

    focusIconExpand: {
        paddingHorizontal: 4,
        color: '#00A0C3',
    }



})