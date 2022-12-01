import React, { useCallback } from "react";
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import IonicIcon from 'react-native-vector-icons/Ionicons';
import moment from "moment";

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

//DATABASE for FIRESTORE
import { db } from '../../firebase/firebase';
import { doc, setDoc, getDoc } from "firebase/firestore";

const iconSize = 20
const iconFirColor = "#00A0C3"

const CGNewTaskCard = ({
    id = "",
    taskTitle = "Clothes Return",
    date = "Mar 09, 1990",
    time = "2:30pm",
    detail = "Return clothes at my local clothing store. All the items are listed in the photo below.",
    location = "1538 KingGeorge Blv, Surrey, BC V3R 5H1",
    counter = 0,
    pic = "https://firebasestorage.googleapis.com/v0/b/ohana-db-18be1.appspot.com/o/userPlaceholder.png?alt=media&token=f4a5d66c-88bf-4015-9247-def23ba809a9",
    onPress,
    navigation,
    userName,
    userId
}) => {

    //For FONT USAGE
    const [fontsLoaded] = useFonts({
        'Rubik': require('../../assets/fonts/Rubik-Bold.ttf'),
        'Nunito': require('../../assets/fonts/Nunito-Regular.ttf'),
        'Nunito-bold': require('../../assets/fonts/Nunito-Bold.ttf')
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
        onPress();
        let postDocSnap = await getDoc(doc(db, 'posts', id));
        await setDoc(doc(db, "posts", id), { ...postDocSnap.data(), progress: 1 });
    }

    const onPressChat = (userId, userName, pic) => {
        onPress();
        navigation.navigate('ChatRoom', { userId: userId, roomName: userName, pic: pic });
        //navigate to Chatroom;
    }


    return (
        <View style={styles.cardPadding} onLayout={onLayoutRootView}>
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <Image style={styles.imageStyle} source={{ uri: pic }} />
                    <View>
                        <Text style={styles.nameStyle}>{taskTitle}</Text>
                        <Text style={styles.statusStyle}>{date} | {time}</Text>
                    </View>
                </View>
                <View style={styles.taskLabelCont}>
                    <Text style={styles.taskTitleStyle}>Detail:
                        <Text style={styles.taskStyle}> {detail}</Text>
                    </Text>

                </View>
                <View style={styles.taskLabelCont}>
                    <Text style={styles.taskTitleStyle}>Location:
                        <Text style={styles.taskStyle}> {location}</Text>
                    </Text>
                </View>
                {/* <View>
                        <Text style={styles.taskImageLabelStyle}>Photo:</Text>
                        <View style={styles.taskImageCont}>
                            <Image style={styles.taskImageStyle} source={require("../../assets/newTaskImage.jpg")} />
                        </View>
                    </View> */}
                <View style={styles.taskLabelCont}>
                    <Text style={styles.taskTitleStyle}>Number of Caregiver(s):
                        <Text style={styles.taskStyle}> {counter}</Text>
                    </Text>
                </View>
                <View style={styles.borderWidth} />
                <View style={styles.bottomCont}>
                    <TouchableOpacity onPress={() => onPressChat(userId, userName, pic)}>
                        <View style={styles.commentCont}>
                            <AntDesign name="message1" size={iconSize} color={iconFirColor} />
                            <Text style={styles.commetStyle}>Chat</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={accept}>
                        <View style={styles.acceptCont}>
                            <IonicIcon name="checkmark-circle-outline" size={iconSize} color={iconFirColor} />
                            <Text style={styles.acceptStyle}>Accept</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default CGNewTaskCard;

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
        padding: 10,
    },
    container: {
        display: "flex",
        backgroundColor: "white",
        width: deviceWidth - 25,
        borderRadius: radius,
        padding: 20,
        elevation: 10
    },
    cardContainer: {
        display: "flex",
        flexDirection: "row",
    },

    ///////USER INFO STYLE/////////
    imageStyle: {
        height: 50,
        width: 50,
        borderRadius: 50,
        marginRight: 10,
    },

    nameStyle: {
        fontSize: 30,
        fontFamily: 'Nunito-bold',
        color: '#00ADC3'
    },
    statusStyle: {
        fontFamily: 'Nunito',
        fontSize: 20,
        color: 'grey'
    },

    //////BUTTON STYLE//////
    borderWidth: {
        borderTopWidth: 1,
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
        fontFamily: 'Nunito',
    },
    commentCont: {
        alignItems: 'center',
    },
    commetStyle: {
        paddingHorizontal: 5,
        fontFamily: 'Nunito',
    },

    //////TASK STYLE//////
    taskTitleStyle: {
        fontSize: 21,
        fontFamily: 'Nunito-bold',
        paddingVertical: 10,
    },
    taskStyle: {
        fontSize: 17,
        fontFamily: 'Nunito',
        color: "#2D2D2A",
    },
    taskImageCont: {
        display: 'flex',
        alignItems: 'center',
        padding: 5,
    },
    taskImageStyle: {
        height: 225,
        width: 125,
    },
    taskLabelCont: {
        display: 'flex',
        flexDirection: 'row',
        margin: 10,
    },
    taskImageLabelStyle: {
        fontSize: 21,
        fontFamily: 'Nunito-bold',
        paddingVertical: 10,
        paddingLeft: 10,
    }
})