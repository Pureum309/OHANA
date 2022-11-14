import React, { useCallback, useState } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'

import IonicIcon from 'react-native-vector-icons/Ionicons'
import moment from "moment";

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const iconSize = 20
const iconFirColor = "#126B8A"
const iconSecColor = "#00A0C3"

const CGPostCard = ({
    userName = "AAA",
    category = "Sample",
    tasks = "Lorem ipsum"
}) => {

    const [users, setUsers] = useState({});
    //For FONT USAGE
    const [fontsLoaded] = useFonts({
        'Rubik': require('../assets/fonts/Rubik-Bold.ttf'),
        'Nunito': require('../assets/fonts/Nunito-Regular.ttf'),
        'Nunito-bold': require('../assets/fonts/Nunito-Bold.ttf')
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    })

    if (!fontsLoaded) {
        return null;
    }
    ////Font USE Finished

    return (
        <View style={styles.cardPadding} onLayout={onLayoutRootView}>
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <Image style={styles.imageStyle} source={require("../assets/userPlaceholder.png")} />
                    <View >
                        <Text style={styles.nameStyle}>{userName}</Text>
                        <Text style={styles.statusStyle}>Just Now</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.taskTitleStyle} >{category}</Text>
                    <Text style={styles.taskStyle}>{tasks}</Text>
                </View>
                <View style={styles.borderWidth} />
                <View style={styles.bottomCont}>
                    <View style={styles.commentCont}>
                        <IonicIcon name="chatbox-ellipses-outline" size={iconSize} color={iconSecColor} />
                        <Text style={styles.commnetStyle}>Comment</Text>
                    </View>
                    <View style={styles.acceptCont}>
                        <IonicIcon name="checkmark-circle-outline" size={iconSize} color={iconSecColor} />
                        <Text style={styles.acceptStyle}>Accept</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CGPostCard;

const deviceWidth = Dimensions.get('window').width;
const radius = 16

const styles = StyleSheet.create({

    datetimeCont: {
        display: "flex",
        flexDirection: "row",
        paddingTop: 5,
    },

    locationCont: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        paddingTop: 5,
    },
    locationStyle: {
        color: '#126B8A',
        fontFamily: 'Nunito',
    },
    taskStyle: {
        paddingVertical: 13,
        fontFamily: 'Nunito',
    },

    ////CG POST STYLE
    cardPadding: {
        padding: 12,
    },
    container: {
        display: "flex",
        backgroundColor: "white",
        width: deviceWidth - 25,
        height: 230,
        borderRadius: radius,
        // alignItems: 'center',
        paddingLeft: 15,
        paddingTop: 15,
        borderColor: '#6AC278',
        borderWidth: 3,
        shadowColor: '#171717',
        shadowOffset: { width: 3, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    cardContainer: {
        display: "flex",
        flexDirection: "row",
        // backgroundColor: "#DDF",
        // width: deviceWidth - 25,
        // height: 80,
        // borderRadius: radius,
        alignItems: 'center',

    },
    ///////USER INFO STYLE/////////
    imageStyle: {
        height: 45,
        width: 45,
        borderRadius: 50,
        marginRight: 10,
    },
    nameStyle: {
        fontSize: 20,
        fontFamily: 'Nunito-bold',
    },
    statusStyle: {
        fontFamily: 'Nunito',
    },
    //////BUTTON STYLE//////
    borderWidth: {
        borderTopWidth: 0.5,
        borderColor: '#00ADC3',
        marginTop: 40,
        marginRight: 20,
    },
    bottomCont: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 60,
        paddingVertical: 10,
    },
    acceptCont: {

        alignItems: 'center',
    },
    acceptStyle: {
        // paddingHorizontal: 5,
        // marginTop: 2,
        fontFamily: 'Nunito',
    },
    commentCont: {
        alignItems: 'center',
    },
    commnetStyle: {
        paddingHorizontal: 5,
        fontFamily: 'Nunito',
    },
    //////TASK STYLE//////
    taskTitleStyle: {
        fontSize: 16,
        fontFamily: 'Nunito-bold',
        paddingVertical: 10,
    },
    taskStyle: {
        fontSize: 14,
        fontFamily: 'Nunito',
        color: "#2D2D2A",
    }
})