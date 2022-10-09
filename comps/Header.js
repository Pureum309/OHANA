import { FlexStyleProps } from "@ui-kitten/components/devsupport";
import React from "react";
import { View, StyleSheet, Text, Dimensions, Image, StatusBar, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const Header = (props) => {

    return (
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={require('../assets/userPlaceholder.png')} />
            <Text style={styles.lableStyle}>{props.label}</Text>
            <AntDesign name="message1" size={24} color="black" />
        </View>
    )
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
        //content direction
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25,

        //backgound container color
        width: deviceWidth,
        height: 90,
        // backgroundColor: '#DDF',
        padding: StatusBar.currentHeight,
    },
    lableStyle: {
        fontSize: 24,
        fontWeight: '700',
    },
    imageStyle: {
        height: 70,
        width: 70,
        resizeMode: 'contain',
        // marginTop: 15,
    },
})

export default Header