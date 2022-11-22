import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import moment from 'moment';

//DATABASE for FIRBASE
import { loginUser } from "../Login/Login";
import { db } from '../../firebase/firebase';
import { doc, onSnapshot, collection, query, where, setDoc } from "firebase/firestore";


const ChatRoom = ({ route }) => {
    const { userId } = route.params;

    const [chats, setChats] = useState(null);
    const [message, setMesage] = useState("");

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
        <View>
            {chats != null &&
                chats.map((chat) => {
                    if (chat.from == userId) {
                        return <Text style={styles.fromTxt}>{chat.message}</Text>
                    } else {
                        return <Text style={styles.toTxt}>{chat.message}</Text>
                    }
                })
            }
            <TextInput style={styles.input} placeholder={'Write message'} onChangeText={setMesage} />
            <Button title="send" onPress={sendMessage} />
        </View >
    )
}

export default ChatRoom

const styles = StyleSheet.create({
    txtbox: {
        height: 150,
        margin: 8,
        borderRadius: 16,
        backgroundColor: "#FFFFFF"
    },
    container: {
        shadowColor: '#171717',
        shadowOffset: { width: 3, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,

        paddingHorizontal: 100,
    },
    fromTxt: {
        color: "green",
    },
    toTxt: {
        color: "blue",
    }
});