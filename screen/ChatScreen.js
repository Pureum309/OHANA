import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View, StatusBar, ScrollView, SafeAreaView, Dimensions, TouchableOpacity, Image } from 'react-native'
import CustomButton from "../comps/Login/CustomButton";
import IonicIcon from 'react-native-vector-icons/Ionicons';

import ChatList from "../comps/Chat/ChatList"
import Header from "../comps/Header";
import { PropsService } from "@ui-kitten/components/devsupport";
import ChatRoom from "../comps/Chat/ChatRoom";
import { AntDesign } from '@expo/vector-icons';

const ChatScreen = ({ navigation }) => {
    const pressChat = () => {
        console.log("test");
        navigation.navigate('Chat');
    }

    const pressHome = () => {
        console.log("!!!");
        navigation.navigate('Home');
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitleVisible: false,
            headerLeft: () => (
                <TouchableOpacity
                    style={{ marginLeft: 30 }}
                    onPress={pressHome}
                >
                    <Image
                        style={{
                            height: 40,
                            width: 40,
                            resizeMode: 'contain',
                        }}
                        source={require('../assets/logoicon.png')} />
                </TouchableOpacity>
            ),
            headerRight: () => (
                <TouchableOpacity
                    style={{ marginRight: 30 }}
                    onPress={pressChat}
                >
                    <AntDesign name="message1" size={24} color="black"
                    />
                </TouchableOpacity>
            )
        });
    }, [navigation]);

    return (
        <>
            {/* <Header label="Chat" navigation={props.navigation} /> */}
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.container}>
                        <ChatList navigation={navigation} />
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