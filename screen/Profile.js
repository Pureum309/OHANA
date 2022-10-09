import React from "react";
import { View, Text } from 'react-native'

import Header from "../comps/Header";

const Profile = (props) => {
    return (
        <View>
            <Header label="Profile" />
            <Text>This is Profile</Text>
        </View>
    )
}

export default Profile