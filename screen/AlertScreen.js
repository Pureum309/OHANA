import React, { useLayoutEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import AlertList from '../comps/Alerts/AlertList.js'

import { AntDesign } from '@expo/vector-icons';

const AlertScreen = ({ navigation }) => {

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
                        source={require('../assets/logocaregiver.png')} />
                </TouchableOpacity>
            ),
            headerRight: () => (
                <TouchableOpacity
                    style={{ marginRight: 30 }}
                    onPress={pressChat}
                >
                    <AntDesign name="message1" size={24} color="#DDE2E5"
                    />
                </TouchableOpacity>
            )
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <AlertList
                navigation={navigation}
            />
        </View>
    )
}

export default AlertScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
});


