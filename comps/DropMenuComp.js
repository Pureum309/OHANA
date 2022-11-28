import React, { useState } from "react";
import { View, Text, Button, TextInputComponent, StyleSheet, Dimensions } from 'react-native'

import { category_data, location_data } from './Dropdown/data';
import DropdownComponent from "./Dropdown/Dropdown";
import DTPicker from "./DateTimePicker/index";
import CouterDrop from "./Dropdown/CouterDrop";
import DropButton from "./Dropdown/DropButton";
import PostTask from "./Dropdown/PostTask";
import moment from 'moment';

//DATABASE for FIRBASE
import { loginUser } from "./Login/Login";
import { db } from '../firebase/firebase';
import { doc, collection, onSnapshot, setDoc, getDoc } from "firebase/firestore";


export const postCards = [];

var chosenDatetime = "";
var chosenCategory = "";
var chosenLocation = "";
var chosenCounter = "";
var chosenText = [];

export const setChosenDatetime = (date) => {
    chosenDatetime = date;
}
export const setChosenCategory = (category) => {
    chosenCategory = category;
}
export const setChosenLocation = (location) => {
    chosenLocation = location;
}

export const setChosenCounter = (counter) => {
    chosenCounter = counter;
}

export const setChosenText = (text) => {
    chosenText.push(text);
}

export const removeChosenText = (index) => {
    chosenText.splice(index, 1);
}

export const removePostcard = (id) => {
    postCards = postCards.filter(card => {
        return card.id !== id;
    });
}

const init = () => {
    chosenDatetime = "";
    chosenCategory = "";
    chosenLocation = "";
    chosenCounter = "";
    chosenText = [];
}

const DropMenuComp = () => {
    const [curId, setCurrentId] = useState(0);

    const onClick = async () => {
        console.log("btn clicked! date/time:" + chosenDatetime
            + "; category: " + chosenCategory + "; lacation: " + chosenLocation + "; number:" + chosenCounter + "; text:" + chosenText);

        const docRef = doc(db, 'users', loginUser.user.uid);
        const docSnap = await getDoc(docRef);
        const data = docSnap.data();

        let picUrl = "";
        if (data.pic != null) {
            picUrl = data.pic;
        } else {
            picUrl = "https://firebasestorage.googleapis.com/v0/b/ohana-db-18be1.appspot.com/o/userPlaceholder.png?alt=media&token=f4a5d66c-88bf-4015-9247-def23ba809a9";
        }

        let post = {
            id: curId,
            datetime: moment(chosenDatetime).format("MMMM Do, YYYY hh:mm A"),
            category: chosenCategory,
            location: chosenLocation,
            counter: chosenCounter,
            tasks: chosenText,
            userName: data.first + " " + data.last,
            pic: picUrl,
            createdTime: moment().format("MMMM Do, YYYY hh:mm:ss A")
        };

        postCards.push(post);

        const postRef = doc(collection(db, 'posts'));
        await setDoc(postRef, { ...post, userId: loginUser.user.uid, progress: 0 });
        await setDoc(doc(db, "users", loginUser.user.uid, "posts", postRef.id), post);

        init();

        setCurrentId(curId + 1);

        console.log(postCards);
    }

    return (
        <View key={curId} style={styles.container}>
            <DropdownComponent
                label_txt="Category"
                data={category_data}
                icon_name="filter"
                ph_txt="Select Category"
            />
            <DropdownComponent
                label_txt="Location"
                data={location_data}
                icon_name="md-location-outline"
                ph_txt="Pick Location"
            />
            <DTPicker style={styles.couterStyle} />
            <CouterDrop />
            <PostTask />
            <DropButton onPress={onClick} />
        </View>
    )
}

export default DropMenuComp

const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingVertical: 50,
        height: "100%",
    },
    txt: {

    }
    //     couterStyle: {
    //         position: 'absolute',
    //     }
});