import React from "react";
import { StyleSheet, Text, View, StatusBar, ScrollView, SafeAreaView, Dimensions } from 'react-native'

import Chat from "../comps/Chat";

const ChatScreen = (props) => {

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Chat />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: deviceHeight,
    },
});

export default ChatScreen