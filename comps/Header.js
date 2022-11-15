
import React, { useState, useCallback } from "react";
import { View, StyleSheet, Text, Dimensions, Image, StatusBar, ScrollView, ImageBackground, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
//for FONT USAGE
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from "@react-navigation/native";

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
    //FONT USAGE END

    const imageClick = () => {
        console.log("!!!");
        props.navigation.navigate('Home');
    }

    const chatClick = () => {
        console.log("test");
        props.navigation.navigate('Chat');
    }

    return (
        <ImageBackground source={require('../assets/Header.png')} resizeMode='cover' style={styles.bgImgStyle} onLayout={onLayoutRootView} >
            <View style={styles.container}>
                <TouchableOpacity onPress={imageClick}>
                    <Image
                        style={styles.imageStyle}
                        source={require('../assets/logoicon.png')} />
                </TouchableOpacity>
                <Text style={styles.textStyle} >{props.label}</Text>
                <TouchableOpacity onPress={chatClick}>
                    <AntDesign name="message1" size={24} color="black"
                    />
                </TouchableOpacity>
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
        paddingHorizontal: 30,

        //backgound container color
        width: deviceWidth,
        height: deviceHeight * 0.20,

        //need to be delete later
        // backgroundColor: '#DDF',
        // padding: StatusBar.currentHeight,
        paddingTop: 30,
    },
    imageStyle: {
        height: 40,
        width: 40,
        resizeMode: 'contain',
        // marginTop: 15,
    },
    textStyle: {
        fontSize: 36,
        fontWeight: '700',
        paddingRight: 14,
        fontFamily: 'Rubik',
    },
    bgImgStyle: {
        width: deviceWidth,
        height: deviceHeight * 0.20,
    }
})

export default Header