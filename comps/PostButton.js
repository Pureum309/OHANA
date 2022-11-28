import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native"
import * as React from 'react';
import { useCallback } from "react";

//for FONT USAGE
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function PostButton({
    onPress,
    title,
    style = null,
    txtStyle = null,
}) {
    //For FONT USAGE
    const [fontsLoaded] = useFonts({
        'Rubik': require('../assets/fonts/Rubik-Bold.ttf'),
        'Nunito-bold': require('../assets/fonts/Nunito-Bold.ttf')
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
        <View onLayout={onLayoutRootView}>
            <TouchableOpacity onPress={onPress} style={style ? style : styles.buttonContainer}>
                <Text style={txtStyle ? txtStyle : styles.buttonText}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        elevation: 8,
        backgroundColor: "#fff",
        borderColor: "#126B8A",
        borderWidth: 2,
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 12,
        margin: 20

    },
    buttonText: {
        fontSize: 18,
        color: "#86AAB6",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
        fontFamily: 'Nunito-bold',
    }
})

