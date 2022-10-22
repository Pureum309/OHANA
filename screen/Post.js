import React from "react";
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import DropMenuComp from "../comps/DropMenuComp";

const Post = () => {

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <DropMenuComp />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Post

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // paddingTop: StatusBar.currentHeight,
        // justifyContent: 'center',
    },
});