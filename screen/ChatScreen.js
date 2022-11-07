import React from "react";
import { StyleSheet, Text, View, StatusBar, ScrollView, SafeAreaView, Dimensions } from 'react-native'
import CustomButton from '../../comps/Login/CustomButton';
import IonicIcon from 'react-native-vector-icons/Ionicons';

import Chat from "../comps/Chat";



const ChatScreen = (props) => {

    const handleBack = () => {
        console.log("test")
        navigation.navigate('Home')
    }
    return (

        <SafeAreaView>
            <ScrollView>
                <View style={styles.back_button}>
                    <IonicIcon name="arrow-back-outline" size={30} color="#00ADC3" />
                    <CustomButton text="Go Back" onPress={handleBack} type="QUATERNARY" />
                </View>
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