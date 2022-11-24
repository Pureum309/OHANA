import React from "react";
import { StyleSheet, Text, View, StatusBar, ScrollView, SafeAreaView, Dimensions } from 'react-native'
import CustomButton from "../comps/Login/CustomButton";
import IonicIcon from 'react-native-vector-icons/Ionicons';

import ChatList from "../comps/Chat/ChatList"
import Header from "../comps/Header";
import { PropsService } from "@ui-kitten/components/devsupport";
import ChatRoom from "../comps/Chat/ChatRoom";




const ChatScreen = (props) => {

    return (
        <>
            <Header label="Chat" navigation={props.navigation} />
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.container}>
                        <ChatList navigation={props.navigation} />
                        {/* <ChatRoom /> */}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: deviceHeight,
    },
    back_button: {
        flexDirection: 'row',
        position: 'absolute',
        top: 45,
        left: 10,
        alignItems: 'center',
        paddingTop: 10,
    }
});

export default ChatScreen