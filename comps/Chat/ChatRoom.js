import React, { useState, useLayoutEffect } from "react";
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, SafeAreaView, StatusBar, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Avatar } from "react-native-elements";
import moment from 'moment';

import user1 from '../../assets/user1.jpg'
import user2 from '../../assets/user2.jpg'

import IonicIcon from 'react-native-vector-icons/Ionicons'

//DATABASE for FIRBASE
import { loginUser } from "../Login/Login";
import { db } from '../../firebase/firebase';
import { doc, onSnapshot, collection, query, where, setDoc } from "firebase/firestore";
import { NavigationContainer } from "@react-navigation/native";

const iconSize = 24
const lightBlue = "#00A0C3"
const iconSecColor = "#126B8A"

const ChatRoom = ({ route, navigation }) => {
    const { userId, roomName } = route.params;

    const [chats, setChats] = useState(null);
    const [message, setMesage] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Test",
            headerBackTitleVisible: false,
            headerTitleAlign: "left",
            headerStyle: { height: 150, backgroundColor: "#CFE0E2" },
            headerTitle: () => (
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                }}>
                    <Avatar
                        rounded
                        source={user1}
                    />
                    <Text style={{ color: "#126B8A", fontWeight: "700", fontSize: 20, marginLeft: 10 }}>{roomName}</Text>
                </View>
            ),
            headerLeft: () => (
                <TouchableOpacity
                    style={{ marginLeft: 10 }}
                    onPress={navigation.goBack}
                >
                    <IonicIcon
                        name="arrow-back-outline"
                        size="30"
                        color={lightBlue}
                    />
                </TouchableOpacity>
            ),
            headerRight: () => (
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: 80,
                        marginRight: 20,
                    }}
                >
                    <TouchableOpacity>
                        <IonicIcon
                            name="call"
                            size="24"
                            color={lightBlue}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <IonicIcon
                            name="videocam"
                            size="24"
                            color={lightBlue}
                        />
                    </TouchableOpacity>
                </View>
            )
        });
    }, [navigation]);

    let roomId = "";
    if (userId < loginUser.user.uid) {
        roomId = userId + loginUser.user.uid;
    } else {
        roomId = loginUser.user.uid + userId;
    }

    if (chats == null) {
        const cahtRef = collection(db, 'chatHistory');
        const q = query(cahtRef, where("roomId", "==", roomId));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const tempChat = [];
            snapshot.forEach((doc) => {
                tempChat.push({ docId: doc.id, ...doc.data() });
            });
            tempChat.sort(function (a, b) { return a.datetime > b.datetime });
            setChats(tempChat);
        });
    }

    const sendMessage = async () => {
        const chatRef = doc(collection(db, 'chatHistory'));
        await setDoc(chatRef, { from: loginUser.user.uid, to: userId, datetime: moment().format("MMMM Do, YYYY hh:mm A"), message: message, roomId: roomId });
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }} >
            <StatusBar style="light" />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
                keyboardVerticalOffset={90}
            >
                <>
                    <ScrollView>
                        {chats != null &&
                            chats.map((chat) => {
                                if (chat.from == userId) {
                                    return (
                                        <View style={styles.reciever}>
                                            {/* <Avatar
                                                position="absolute"
                                                rounded
                                                bottom={-15}
                                                left={-5}
                                                size={30}
                                                source={user1}
                                            /> */}
                                            <Text style={styles.recieverTxt}>{chat.message}</Text>
                                        </View>
                                    )
                                } else {
                                    return (
                                        <View style={styles.sender}>
                                            {/* <Avatar
                                                position="absolute"
                                                rounded
                                                bottom={-15}
                                                right={-5}
                                                size={30}
                                                source={user2}
                                            /> */}
                                            <Text style={styles.sendTxt}>{chat.message}</Text>
                                        </View>
                                    )
                                }
                            })
                        }
                    </ScrollView>
                    <View style={styles.footer}>
                        <TextInput
                            style={styles.textInput}
                            placeholder={'Write message'}
                            onChangeText={setMesage}
                        />
                        <TouchableOpacity onPress={sendMessage} activeOpacity={0.5} style={styles.acceptCont} >
                            <IonicIcon name="send" size={iconSize} color={iconSecColor} />
                        </TouchableOpacity >
                    </View >
                </>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default ChatRoom

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    footer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        padding: 15,
    },
    textInput: {
        bottom: 0,
        height: 40,
        flex: 1,
        marginRight: 15,
        borderColor: "transparent",
        backgroundColor: "#ECECEC",
        borderWidth: 1,
        padding: 10,
        color: "grey",
        borderRadius: 30,
    },
    recieverTxt: {
        // color: "green",
    },
    sendTxt: {
        // color: "blue",
    },
    reciever: {
        padding: 15,
        backgroundColor: "#ECECEC",
        alignSelf: "flex-start",
        borderRadius: 20,
        margin: 15,
        marginBottom: 5,
        maxWidth: "80%",
        position: "relative",

    },
    sender: {
        padding: 15,
        backgroundColor: "#00A0C3",
        alignSelf: "flex-end",
        borderRadius: 20,
        margin: 15,
        maxWidth: "80%",
        position: "relative",
    }
});