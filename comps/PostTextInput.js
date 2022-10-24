import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-paper';


export default function PostInput() {
    // "text" stores what the user types inside the field
    const [userInputText, setText] = React.useState("");


    return (
        <View style={styles.container}>
            <TextInput
                value={userInputText}
                label="Tap to share what you are up to..."
                right={<TextInput.Icon icon="microphone" />}
                style={styles.txtbox}
                onChangeText={userInputText => setText(userInputText)}
            />
            {/* // testing output of "text" */}
            <Text>{userInputText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    txtbox: {
        height: 150,
        margin: 8,
        borderRadius: 16,
        backgroundColor: "#FFFFFF"
    },
    container: {
        shadowColor: '#171717',
        shadowOffset: { width: 3, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
});