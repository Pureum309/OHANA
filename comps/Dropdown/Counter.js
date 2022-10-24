import React, { useState, useCallback } from "react";
import { StyleSheet, Text, Button, View, Pressable } from "react-native";

import { setChosenCounter } from "../DropMenuComp";

//for FONT USAGE
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const CounterView = () => {
    const [counter, setCounter] = useState(0);
    const incrementCounter = () => {
        setCounter(counter + 1);
        setChosenCounter(counter + 1);
    }
    let decrementCounter = () => {
        setCounter(counter - 1);
        setChosenCounter(counter - 1);
    }

    if (counter <= 0) {
        decrementCounter = () => {
            setCounter(0);
            setChosenCounter(0);
        }
    }
    //For FONT USAGE
    const [fontsLoaded] = useFonts({
        'Rubik': require('../../assets/fonts/Rubik-Bold.ttf'),
        'Nunito-bold': require('../../assets/fonts/Nunito-Bold.ttf')
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
            <View style={styles.btnCont}>
                <Pressable style={styles.button} onPress={decrementCounter}>
                    <Text style={styles.btntext}>-</Text>
                </Pressable>
                <Text style={styles.text}>{counter}</Text>
                <Pressable style={styles.button} onPress={incrementCounter}>
                    <Text style={styles.btntext}>+</Text>
                </Pressable>
            </View>
        </View >
    )
}

export default CounterView;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 16,
    },
    btnCont: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#00A0C3',
    },
    btntext: {
        fontSize: 20,
        lineHeight: 25,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        fontFamily: 'Nunito-bold',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#0A0908',
        paddingHorizontal: 50,
        fontFamily: 'Nunito-bold',
    },

})