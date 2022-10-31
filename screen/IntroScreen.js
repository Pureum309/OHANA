import React, { useState, useCallback } from "react";
import { StyleSheet, Text, View, Dimensions, ImageBackground, Image } from 'react-native'

//for FONT USAGE
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import PostButton from "../comps/PostButton";

const IntroScreen = ({ navigation }) => {

    const image = require('../assets/introbackground.png');
    const logo = require('../assets/logo2.png')

    const onPressExploring = () => {
        navigation.navigate('Login');
    }

    const onPressTutorial = () => {
        navigation.navigate('Tutorial');
    }
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
    //until here FONT USAGE

    return (

        <ImageBackground source={image} resizeMode='cover' style={styles.bgImg}>
            <View style={styles.container} onLayout={onLayoutRootView}>
                <Image source={logo} style={styles.logoImg} />
                <View style={styles.txtContainers}>
                    <Text style={styles.introTxt}>Connect With Your Community.</Text>
                    <Text style={styles.introTxt}>Feel Free, Feel Accomplished</Text>
                </View>
                <View style={styles.btnContainer}>
                    <PostButton title="START EXPLORING" onPress={onPressExploring} style={styles.introBtn} txtStyle={styles.introBtnTxt} />
                    <PostButton title="VIEW TUTORIALS" onPress={onPressTutorial} style={styles.introBtn} txtStyle={styles.introBtnTxt} />
                </View>
            </View>
        </ImageBackground>


    )
}

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'center'
    },
    bgImg: {
        flex: 1,
        justifyContent: 'center',
    },
    logoImg: {
        width: deviceWidth * 0.5,
        height: deviceHeight * 0.3,
        resizeMode: 'center'
    },
    txtContainers: {
        PddingBottom: 0
    },
    introTxt: {
        fontSize: 16,
        fontFamily: 'Nunito',
    },
    btnContainer: {
        margin: 20
    },
    introBtn: {
        elevation: 8,
        backgroundColor: '#12688A',
        borderColor: "#126B8A",
        borderWidth: 2,
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 51,
        margin: 8,
        color: '#FFFFFF'
    },
    introBtnTxt: {
        fontSize: 18,
        color: "#FFFFFF",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
        fontFamily: 'Nunito-bold',
    }
});

export default IntroScreen
