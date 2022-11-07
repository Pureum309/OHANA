import React, { useState } from "react";
import { View, Text } from 'react-native'

import UserCard from "./Network_User/UserCard";

import { user_txts } from "./Network_User/data";

//DATABASE for FIRBASE
import { loginUser } from "./Login/Login";
import { db } from '../firebase/firebase';
import { collection, onSnapshot } from "firebase/firestore";

const Network = (props) => {
    const [relationships, setRelationships] = useState([]);

    if (relationships.length == 0) {
        const relRef = collection(db, `users/${loginUser.user.uid}/relationships`);
        const unsub = onSnapshot(relRef, (snapshot) => {
            const tempRels = [];
            snapshot.forEach((doc) => {
                tempRels.push(doc.data());
            });

            setRelationships(tempRels);
        });
    }

    let index = 0;

    return (
        <View>
            {/* <UserCard name="Sun" rel="dd" /> */}
            {relationships.map(users => { return <UserCard name={[users.first, ' ', users.last]} rel={users.relationship} pic={user_txts[index++].pic} /> })}
        </View>
    )
}

export default Network