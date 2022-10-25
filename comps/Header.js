
import React, { useState, useCallback } from "react";
import { View, StyleSheet, Text, Dimensions, Image, StatusBar, ScrollView, ImageBackground } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
//for FONT USAGE
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const Header = (props) => {
    //For FONT USAGE
    const [fontsLoaded] = useFonts({
        'Rubik': require('../assets/fonts/Rubik-Bold.ttf'),
        'Nunito': require('../assets/fonts/Nunito-Regular.ttf')
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
        <ImageBackground source={require('../assets/Header.png')} resizeMode='cover' style={styles.bgImgStyle} >
            <View style={styles.container}>
                <Image
                    style={styles.imageStyle}
                    source={require('../assets/logoicon.png')}
                    onClick={() => {
                        window.location.href = '../screen/HomeScreen'
                    }} />
                <Text style={styles.textStyle} >{props.label}</Text>
                <AntDesign name="message1" size={24} color="black" />
            </View>
        </ImageBackground>
    )
}

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container: {
        //content direction
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25,

        //backgound container color
        width: deviceWidth,
        height: deviceHeight * 0.20,

        //need to be delete later
        // backgroundColor: '#DDF',
        // padding: StatusBar.currentHeight,
        paddingTop: 30,
    },
    imageStyle: {
        height: 60,
        width: 60,
        resizeMode: 'contain',
        // marginTop: 15,
    },
    textStyle: {
        fontSize: 24,
        fontWeight: '700',
        paddingLeft: 20,
        fontFamily: 'Rubik',
    },
    bgImgStyle: {
        width: deviceWidth,
        height: deviceHeight * 0.20,
    }
})

export default Header