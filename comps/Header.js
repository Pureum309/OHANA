import { FlexStyleProps } from "@ui-kitten/components/devsupport";
import React from "react";
import { View, StyleSheet, Text, Dimensions, Image, StatusBar, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const Header = (props) => {

    return (
        <View style={styles.container}>
            <Image
                style={styles.imageStyle}
                source={require('../assets/Logo.png')}
                onClick={() => {
                    window.location.href = '../screen/HomeScreen'
                }} />
            <Text style={styles.lableStyle}>{props.label}</Text>
            <AntDesign name="message1" size={24} color="#126B8A" />
        </View>
    )
}

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

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
        height: deviceHeight * 0.15,

        //need to be delete later
        // backgroundColor: '#DDF',
        // padding: StatusBar.currentHeight,
        paddingTop: 30,
    },
    lableStyle: {
        fontSize: 24,
        fontWeight: '700',
    },
    imageStyle: {
        height: 60,
        width: 60,
        resizeMode: 'contain',
        // marginTop: 15,
    },
})

export default Header