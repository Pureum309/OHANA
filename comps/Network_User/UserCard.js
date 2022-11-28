import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
//for FONT USAGE
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const UserCard = ({ id = "", name = "", rel = "", pic = "", tasks = [] }) => {
    //For FONT USAGE
    const [fontsLoaded] = useFonts({
        'Rubik': require('../../assets/fonts/Rubik-Bold.ttf'),
        'Nunito': require('../../assets/fonts/Nunito-Regular.ttf')
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    })

    if (!fontsLoaded) {
        return null;
    }

    const storage = getStorage();
    const userImgRef = ref(storage, 'images/user1.jpg');

    getDownloadURL(userImgRef);

    return (
        <View style={styles.cardPadding} style={styles.cardMargin} onLayout={onLayoutRootView}>
            <View style={styles.cardContainer}>
                <Image style={styles.imageStyle} source={{ uri: pic }} />
                <View style={styles.infoStyle}>
                    <Text style={styles.titleStyle}>{name}</Text>
                    <Text style={styles.categoryStyle}>{rel}</Text>
                    {
                        tasks.map((task) => {
                            return (
                                <Text style={styles.categoryStyle}>{task}</Text>
                            )
                        })
                    }
                </View>
            </View >
        </View>
    )
}

const deviceWidth = Math.round(Dimensions.get('window').width)
const radius = 20

const styles = StyleSheet.create({


    cardContainer: {
        display: "flex",
        flexDirection: "row",
        // backgroundColor: "#DDF",
        width: deviceWidth,
        height: 100,
        // borderRadius: radius,
        alignItems: 'center',
        borderColor: '#00ADC3',
        borderBottomWidth: 0.5
    },
    imageStyle: {
        height: 80,
        width: 80,
        marginLeft: 25,
        borderRadius: 50,
        // marginTop: 15,
    },
    titleStyle: {
        fontSize: 24,
        fontWeight: '600',
        fontFamily: 'Nunito',
    },
    categoryStyle: {
        fontSize: 18,
        fontWeight: '300',
        fontFamily: 'Nunito',
        color: 'grey'
    },
    infoStyle: {
        marginHorizontal: 20,
        marginVertical: 20,
    }


})

export default UserCard;