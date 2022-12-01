import React, { useCallback, useState } from "react";
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'

import IonicIcon from 'react-native-vector-icons/Ionicons'
import moment from "moment";

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

//DATABASE for FIRESTORE
import { db } from '../firebase/firebase';
import { doc, setDoc, getDoc } from "firebase/firestore";

const iconSize = 20
const iconFirColor = "#126B8A"
const iconSecColor = "#00A0C3"
let cardColor = "#6AC278";

const CGPostCard = ({
    id = "",
    userName = "AAA",
    category = "Sample",
    tasks = "Lorem ipsum",
    progress = 0,
    pic = "https://firebasestorage.googleapis.com/v0/b/ohana-db-18be1.appspot.com/o/userPlaceholder.png?alt=media&token=f4a5d66c-88bf-4015-9247-def23ba809a9",
    createTime = "Just Now"
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

    const accept = async () => {
        let postDocSnap = await getDoc(doc(db, 'posts', id));
        await setDoc(doc(db, "posts", id), { ...postDocSnap.data(), progress: progress + 1 });
    }

    let acceptText = "";
    if (progress == 0) {
        acceptText = "Accept";
    } else if (progress >= 1) {
        acceptText = "Done";
    }

    if (progress == 0) {
        cardColor = "#6AC278";
    } else if (progress == 1) {
        cardColor = "#EDC81B"
    } else {
        cardColor = "#00ADC3"
    }

    return (
        <View style={styles.cardPadding} onLayout={onLayoutRootView}>
            <View style={[styles.container, { borderColor: cardColor }]}>
                <View style={styles.cardContainer}>
                    <Image style={styles.imageStyle} source={{ uri: pic }} />
                    <View >
                        <Text style={styles.nameStyle}>{userName}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.statusStyle, { paddingRight: 7, color: '#ACB5BD' }]}>Posted:</Text>
                            <Text style={[styles.statusStyle, { color: '#ACB5BD' }]}>{createTime}</Text>
                        </View>
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
                    <TouchableOpacity onPress={accept} style={styles.acceptCont} >
                        <IonicIcon name="checkmark-circle-outline" size={iconSize} color={iconSecColor} />
                        <Text style={styles.acceptStyle}>{acceptText}</Text>
                    </TouchableOpacity >
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
        //borderColor: cardColor,
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