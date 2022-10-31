import React from 'react';
import {Text, StyleSheet, Pressable } from 'react-native';

export default function CustomButton ({
    onPress, 
    text, 
    type="PRIMARY",
}){
    return(
        <Pressable 
        onPress={onPress} 
        style={[styles.container, styles[`container_${type}`]]}>
            <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '85%',
        padding: 15,
        margin: 10,
        alignItems: 'center',
        borderRadius: 5,
    },

    container_PRIMARY: {
        backgroundColor: '#00ADC3',
        elevation: 5,
        marginBottom: 30
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
        fontSize: 15
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