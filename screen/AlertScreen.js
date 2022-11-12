import React from "react";
import { StyleSheet, View } from 'react-native'
import AlertList from '../comps/Alerts/AlertList.js'

const AlertScreen = () => {
    return (
            <View style={styles.container}>
                <AlertList/>
            </View>
    )
}

export default AlertScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
});


