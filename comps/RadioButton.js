import React, { useState, useCallback } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

//for FONT USAGE
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function RadioButton({ data, onSelect }) {
    const [userOption, setUserOption] = useState(null);
    const selectHandler = (value) => {
        onSelect(value);
        setUserOption(value);
    };

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
        <View style={styles.cont} onLayout={onLayoutRootView}>
            {data.map((item) => {
                return (
                    <Pressable
                        style={
                            item.value === userOption ? styles.selected : styles.unselected
                        }
                        onPress={() => selectHandler(item.value)}>
                        <Text style={styles.option}> {item.value}</Text>
                    </Pressable>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    cont: {
        flexDirection: "row"
    },
    option: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Nunito'
    },
    unselected: {
        backgroundColor: '#00ADC3',
        margin: 5,

        width: 150,
        height: 45,
        borderRadius: 5,
        justifyContent: 'center'
    },
    selected: {
        backgroundColor: '#126B8A',
        margin: 5,
        padding: 10,
        borderRadius: 5,

        width: 150,
        height: 45,
    },
});
