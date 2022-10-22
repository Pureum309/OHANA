import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-paper';


export default function PostInput() {
    // "text" stores what the user types inside the field
    const [userInputText, setText] = React.useState("");


    return (
        <View>
            <TextInput
                value={userInputText}
                label="Tap to share what you are up to..."
                right={<TextInput.Icon icon="microphone" />}
                style={styles}
                onChangeText={userInputText => setText(userInputText)}
            />
            {/* // testing output of "text" */}
            <Text>{userInputText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    height: 190,
    margin: 20,
    borderRadius: 16,
    backgroundColor: "#FFFFFF"
});