import React from "react";
import { View, Text } from 'react-native'

import UserCard from "./Chat_User/UserCard";

import { user_txts } from "./Chat_User/data"

const Chat = (props) => {
    return (
        <View>
            {/* <UserCard name="Sun" rel="dd" /> */}
            {user_txts.map(users => { return <UserCard name={users.name} rel={users.rel} pic={users.pic} /> })}
        </View>
    )
}

export default Chat