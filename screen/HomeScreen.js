import React from "react";
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import Header from "../comps/Header";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Header />
            <Text>Hello this is testing</Text>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomeScreen
