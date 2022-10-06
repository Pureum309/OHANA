import React from "react";
import { View, Text } from 'react-native'

import UserCard from "../comps/Network_User/UserCard";
import Header from "../comps/Header";

import { user_txts } from "../comps/Network_User/data"

const Network = () => {
    return (
        <View>
            {/* <UserCard name="Sun" rel="dd" /> */}
            {user_txts.map(users => { return <UserCard name={users.name} rel={users.rel} /> })}
        </View>
    )
}

export default Network