import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function RewardCard() {
    //For FONT USAGE
    const [fontsLoaded] = useFonts({
        'Rubik': require('../../assets/fonts/Rubik-Bold.ttf'),
        'Nunito': require('../../assets/fonts/Nunito-Regular.ttf'),
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
        <View style={[styles.container, { borderColor: "#126B8A" }]} onLayout={onLayoutRootView}>
            <View style={styles.display}>
                <View style={styles.imgCont}>
                    <Image style={styles.imgStyle} source={require('../../assets/reward.png')} />
                </View>
                <View style={styles.textCont}>
                    <View>
                        <Text style={styles.numText}>54</Text>
                    </View>
                    <View style={{ width: 150, }}>
                        <Text style={styles.text}>Total hours of volunteering</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const deviceWidth = Dimensions.get('window').width;
const radius = 16

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        width: deviceWidth - 25,
        height: 200,
        borderRadius: radius,
        // alignItems: 'center',
        paddingLeft: 15,
        paddingTop: 15,
        // borderColor: '#6AC278',
        borderWidth: 3,
        shadowColor: '#171717',
        shadowOffset: { width: 3, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    display: {
        flexDirection: "row",
        justifyContent: "center",
    },
    textCont: {
        paddingTop: "5%",
        paddingLeft: "10%",
    },
    text: {
        fontFamily: "Nunito",
        fontSize: 20,
    },
    numText: {
        fontFamily: "Rubik",
        fontSize: 50,
    },
    imgCont: {

    },
    imgStyle: {
        resizeMode: "contain",
        width: 100,
        top: "-33%"
    }

});