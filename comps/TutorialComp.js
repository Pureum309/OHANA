import React from "react";
import { Text, View } from "react-native";

import { StyleSheet, Dimensions } from 'react-native';


export default function TutorialComp() {
    return (
        <View>
            <Text style={styles.container}>testing Tutorial</Text>
        </View>
    );
}

// ******** Test Styling, can be changed later! **********
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        //alignItems: 'center'
        //justifyContent: 'center',
    },
});