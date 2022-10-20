import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';


export default function PostInput() {
    // "text" stores what the user types inside the field
    const [text, setText] = React.useState("");

    // testing output of "text"
    console.log(text);
    return (
        <View>
            <TextInput
                value={text}
                label="Tap to share what you are up to..."
                right={<TextInput.Icon icon="microphone" />}
                style={styles}
                onChangeText={text => setText(text)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    height: 190,
    margin: 20,
    borderRadius: 16,
    backgroundColor: "#FFFFFF"
});