import React, { useCallback } from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

//for FONT USAGE
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function CustomButton({
    onPress,
    text,
    type = "PRIMARY",
}) {
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
    //until here FONT USAGE

    return (
        <Pressable
            onPress={onPress}
            style={[styles.container, styles[`container_${type}`]]}
            onLayout={onLayoutRootView} >
            <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '85%',
        padding: 10,
        margin: 10,
        alignItems: 'center',
        borderRadius: 5,
    },

    container_PRIMARY: {
        backgroundColor: '#00ADC3',
        elevation: 5,
        marginBottom: 20
    },

    container_SECONDARY: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#00ADC3',
        padding: 5,
        margin: 5,
    },

    container_TERTIARY: {},

    container_QUATERNARY: {
        padding: 1,
        margin: 1,
        width: 80,
        height: 25
    },

    text: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'Nunito',
    },

    text_SECONDARY: {
        color: '#00ADC3z'
    },

    text_TERTIARY: {
        color: '#00ADC3'
    },

    text_QUATERNARY: {
        color: 'black',
        fontSize: 18
    }
});