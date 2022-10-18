import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';


export default function PostInput() {
    return (
        <View>
            <TextInput
                label="Tap to share what you are up to..."
                right={<TextInput.Icon icon="microphone" />}
                style={styles}
            >
            </TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    height: 190,
    margin: 20,
    borderRadius: 16,
    backgroundColor: "#FFFFFF"
});