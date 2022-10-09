import React from "react";
import { View, Text } from 'react-native'

import Header from "../comps/Header";

const Post = (props) => {
    return (
        <View>
            <Header label="Post" />
            <Text>This is Profile</Text>
        </View>
    )
}

export default Post