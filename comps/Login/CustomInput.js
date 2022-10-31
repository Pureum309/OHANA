import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

export default function CustomInput({
    placeholder,
    secureTextEntry,
    autoCapitalize,
    onChangeText
}) {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                autoCapitalize={autoCapitalize}
                onChangeText={onChangeText}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '85%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        margin: 10,
        elevation: 5
    }
});