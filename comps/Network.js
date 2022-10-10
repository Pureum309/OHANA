import React from "react";
import { View, Text } from 'react-native'

import UserCard from "./Network_User/UserCard";
import Header from "./Header";

import { user_txts } from "./Network_User/data"
import { ScrollView } from "react-native-gesture-handler";

const Network = (props) => {
    return (
        <View>
            {/* <UserCard name="Sun" rel="dd" /> */}
            {user_txts.map(users => { return <UserCard name={users.name} rel={users.rel} /> })}
        </View>
    )
}

export default Network