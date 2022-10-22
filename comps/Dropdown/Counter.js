import React, { useState } from "react";
import { StyleSheet, Text, Button, View, Pressable } from "react-native";

import { setChosenCounter } from "../DropMenuComp";

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

    return (
        <View style={styles.container}>
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
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#0A0908',
        paddingHorizontal: 50,
    },

})