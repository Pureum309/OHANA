import React, { useCallback } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'

import IonicIcon from 'react-native-vector-icons/Ionicons'
import moment from "moment";

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const iconSize = 20
const iconFirColor = "#126B8A"
const iconSecColor = "#00A0C3"

const PostActivityCard = ({
    id = "",
    category = "Sample",
    datetime = "Mar 09, 1990",
    location = "Sample",
    counter = 0,
    tasks = [],
    cardColor = "green"
}) => {
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


    return (
        <View style={styles.cardPadding} onLayout={onLayoutRootView}>
            <View style={[styles.container, { borderColor: cardColor }]}>
                <Text style={styles.categoryStyle}>{category}</Text>
                <View style={styles.datetimeCont}>
                    <Text style={styles.datetimeStyle}>{moment(datetime).format('MMMM Do, YYYY')}</Text>
                    <Text style={styles.datetimeStyle}>|</Text>
                    <Text style={styles.datetimeStyle}>{moment(datetime).format('hh:mm A')}</Text>
                </View>
                <View style={styles.locationCont}>
                    <IonicIcon name="location-outline" size={iconSize} color={iconFirColor} />
                    <Text style={styles.locationStyle}>{location}</Text>
                </View>
                <Text style={styles.taskStyle}>{tasks.map((item, index) => {
                    if (index == 0)
                        return item;
                    else
                        return "\n" + item;
                })}</Text>
                <View style={styles.bottomCont}>
                    <View style={styles.commentCont}>
                        <IonicIcon name="chatbox-ellipses-outline" size={iconSize} color={iconSecColor} />
                        <Text style={styles.commnetStyle}>1 Comment</Text>
                        <IonicIcon name="chevron-down-outline" size={iconSize} color={iconSecColor} />
                    </View>
                    <View style={styles.editCont}>
                        <IonicIcon name="create-outline" size={iconSize} color={iconSecColor} />
                        <Text style={styles.editStyle}>Edit Task</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default PostActivityCard;

const deviceWidth = Dimensions.get('window').width;
const radius = 16

const styles = StyleSheet.create({
    cardPadding: {
        padding: 12,
    },

    container: {
        display: "flex",
        backgroundColor: "white",
        width: deviceWidth - 25,
        height: 200,
        borderRadius: radius,
        // alignItems: 'center',
        paddingLeft: 15,
        paddingTop: 15,
        // borderColor: '#6AC278',
        borderWidth: 3,
        shadowColor: '#171717',
        shadowOffset: { width: 3, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    categoryStyle: {
        fontSize: 25,
        fontFamily: 'Nunito-bold',
    },
    datetimeCont: {
        display: "flex",
        flexDirection: "row",
        paddingTop: 5,
    },
    datetimeStyle: {
        fontSize: 18,
        paddingRight: 10,
        fontFamily: 'Nunito'
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
    bottomCont: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 20,
        paddingTop: 15,
    },
    commentCont: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
    },
    commnetStyle: {
        paddingHorizontal: 5,
        fontFamily: 'Nunito',
    },
    editCont: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
    },
    editStyle: {
        paddingHorizontal: 5,
        marginTop: 2,
        fontFamily: 'Nunito',
    }


})