import React, { useState, useCallback } from "react";
import { StyleSheet, Text, View, Dimensions, ImageBackground } from 'react-native'

//for FONT USAGE
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import PostButton from "../comps/PostButton";

const IntroScreen = ({ navigation }) => {

    const image = require('../assets/introbackground.png');

    const onPressExploring = () => {
        navigation.navigate('Main');
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

        <View style={styles.container} onLayout={onLayoutRootView}>
            <ImageBackground source={image} resizeMode='cover' style={styles.image}>
                <Text>This is Intro page</Text>
                <PostButton title="START EXPLORING" onPress={onPressExploring} />
                <PostButton title="VIEW TUTORIALS" />
            </ImageBackground>
        </View>


    )
}

const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    }
});

export default IntroScreen
