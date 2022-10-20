import React from "react";
import { View, Text, SafeAreaView, ScrollView } from 'react-native'

import DropMenuComp from "../comps/DropMenuComp";

const Post = (props) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text>This is Profile</Text>
                    <DropMenuComp />
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

export default Post