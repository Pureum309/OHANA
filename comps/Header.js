import React from "react";
import { View, StyleSheet, Text, Dimensions } from 'react-native'

const Header = (props) => {

    return (
        <View style={styles.container}>
            <Text style={styles.lableStyle}>{props.label}</Text>
        </View>
    )
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
        width: deviceWidth,
        height: 90,
        backgroundColor: '#DDF',
        justifyContent: 'flex-end',
        paddingBottom: 20,
        alignItems: 'center',

    },
    lableStyle: {
        fontSize: 24,
        fontWeight: '700',
    }
})

export default Header