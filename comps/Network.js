import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'

import { TextInput } from 'react-native-paper';

import UserCard from "./Network_User/UserCard";

import IonicIcon from 'react-native-vector-icons/Ionicons'

//DATABASE for FIRBASE
import { loginUser } from "./Login/Login";
import { db } from '../firebase/firebase';
import { collection, onSnapshot, query, where } from "firebase/firestore";

const Network = ({ navigation }) => {
    const [relationships, setRelationships] = useState([]);
    const [filter, setFilter] = useState("");

    const onChangeText = (e) => {
        setRelationships([]);
        setFilter(e);
    }

    const onPress = (userId, first, last, pic) => {
        let roomName = first
        if (last != null)
            roomName += " " + last;
        navigation.navigate('ChatRoom', { userId: userId, roomName: roomName, pic: pic });
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
            <View style={styles.inputCont}>
                <TextInput
                    style={styles.input}
                    //placeholder="Search"
                    label='Search'
                    mode="outlined"
                    theme={{
                        colors: {
                            primary: '#00ADC3', // Outline color here
                        },
                    }}
                    left={<TextInput.Icon icon="magnify" size={30} iconColor={"grey"} />}
                    onChangeText={onChangeText}
                />
            </View>
            {/* <UserCard name="Sun" rel="dd" /> */}
            {relationships.map(users => {
                return <TouchableOpacity onPress={() => onPress(users.userId, users.first, users.last, users.pic)} >
                    <UserCard key={users.uid} name={[users.first, ' ', users.last]} rel={users.relationship} pic={users.pic} />
                </TouchableOpacity>
            })}
        </View>
    )
}

export default Network

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    inputCont: {
        paddingTop: 5,
        alignItems: 'center',
    },
    input: {
        //height: 50,
        width: deviceWidth * 0.95,
        // margin: 12,
        //padding: 10,

        // borderColor: 'grey',
        // borderWidth: 1,
        // shadowColor: '#171717',
        // shadowOffset: { width: 3, height: 4 },
        // shadowOpacity: 0.2,
        // shadowRadius: 3,

    },
});