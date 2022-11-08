import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
//for FONT USAGE
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const UserCard = ({ name, rel, pic }) => {
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
        <View style={styles.cardPadding} style={styles.cardMargin} onLayout={onLayoutRootView}>
            <View style={styles.cardContainer}>
                <Image style={styles.imageStyle} source={pic} />
                <View style={styles.infoStyle}>
                    <Text style={styles.titleStyle}>{name}</Text>
                    <Text style={styles.categoryStyle}>{rel}</Text>
                </View>
            </View >
        </View>
    )
}

const deviceWidth = Math.round(Dimensions.get('window').width)
const radius = 20

const styles = StyleSheet.create({
    cardMargin: {
        marginBottom: 20,
    },
    cardPadding: {
        padding: 7,
    },
    cardContainer: {
        display: "flex",
        flexDirection: "row",
        // backgroundColor: "#DDF",
        width: deviceWidth - 25,
        height: 80,
        // borderRadius: radius,
        alignItems: 'center',
        borderColor: '#00ADC3',
        borderBottomWidth: 0.5
    },
    imageStyle: {
        height: 70,
        width: 70,
        marginLeft: 25,
        borderRadius: 50,
        // marginTop: 15,
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: '600',
        fontFamily: 'Nunito',
    },
    categoryStyle: {
        fontSize: 16,
        paddingTop: 2,
        fontWeight: '300',
        fontFamily: 'Nunito',
        color: 'grey'
    },
    infoStyle: {
        marginHorizontal: 10,
        // paddingTop: 30,
        marginVertical: 10,
    }


})

export default UserCard;