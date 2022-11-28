import React, { useState } from "react";
import { View, Text, FlatList, TextInput, StyleSheet, Dimensions } from 'react-native'

import UserCard from "../Chat_User/UserCard";
import ChatRoom from "./ChatRoom";

import { user_txts } from "../Chat_User/data"

//DATABASE for FIRBASE
import { loginUser } from "../Login/Login";
import { db } from '../../firebase/firebase';
import { collection, onSnapshot, query, where } from "firebase/firestore";
import Search from "../SearchBar";
import { TouchableOpacity } from "react-native-gesture-handler";


const ChatList = (props) => {
    const [relationships, setRelationships] = useState([]);
    const [filter, setFilter] = useState("");

    const onChangeText = (e) => {
        setRelationships([]);
        setFilter(e);
    }

    const onPress = (userId, first, last) => {
        let roomName = first
        if (last != null)
            roomName += " " + last;
        props.navigation.navigate('ChatRoom', { userId: userId, roomName: roomName });
        //navigate to Chatroom;
    }

    if (relationships.length == 0) {
        const relRef = collection(db, `users/${loginUser.user.uid}/relationships`);
        const unsubscribe = onSnapshot(relRef, (snapshot) => {
            var tempRels = [];
            snapshot.forEach((doc) => {
                tempRels.push({ userId: doc.id, ...doc.data() });
            });

            if (filter.length != 0) {
                tempRels = tempRels.filter((user) =>
                    user.first.toLowerCase().includes(filter.toLowerCase()) ||
                    user.last.toLowerCase().includes(filter.toLowerCase())
                );
            }

            console.log(tempRels);

            if (tempRels.length != 0)
                setRelationships(tempRels);
        });
    }

    let index = 0;

    // console.log(relationships.filter(relationships => relationships.first.toLowerCase().includes("aa")));
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Search"
                onChangeText={onChangeText}
            />
            {/* <UserCard name="Sun" rel="dd" /> */}
            {relationships.map(users => {
                return <TouchableOpacity onPress={() => onPress(users.userId, users.first, users.last)} >
                    <UserCard key={users.uid} name={[users.first, ' ', users.last]} rel={users.relationship} pic={user_txts[index++].pic} userId={users.userId} />
                </TouchableOpacity>
            })}

        </View>
    )
}

export default ChatList
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    input: {
        height: 50,
        width: deviceWidth,
        // margin: 12,
        padding: 10,

        borderColor: 'grey',
        borderWidth: 1,
        shadowColor: '#171717',
        shadowOffset: { width: 3, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
});