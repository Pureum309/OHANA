
import React from "react";
import { View, StyleSheet, Text, Dimensions, Image, StatusBar, ScrollView, ImageBackground } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const Header = (props) => {

    return (
        <ImageBackground source={require('../assets/Header.png')} resizeMode='cover' style={styles.bgImgStyle} >
            <View style={styles.container}>
                <Image
                    style={styles.imageStyle}
                    source={require('../assets/logoicon.png')}
                    onClick={() => {
                        window.location.href = '../screen/HomeScreen'
                    }} />
                <Text style={styles.lableStyle}>{props.label}</Text>
                <AntDesign name="message1" size={24} color="black" />
            </View>
        </ImageBackground>
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
        height: deviceHeight * 0.20,

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
    bgImgStyle: {
        width: deviceWidth,
        height: deviceHeight * 0.20,
    }
})

export default Header