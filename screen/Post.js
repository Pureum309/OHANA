import React from "react";
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import DropMenuComp from "../comps/DropMenuComp";
import Popup from "../comps/Popup";

const Post = () => {

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text>This is Profile</Text>
                    <DropMenuComp />
                    <Popup/>               
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Post 

/*<DropMenuComp />*/