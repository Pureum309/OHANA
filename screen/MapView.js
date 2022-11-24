import React, { useLayoutEffect } from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native'

import Map from "../comps/Map";
import { AntDesign } from '@expo/vector-icons';

const MapView = ({ navigation }) => {
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
        <View>
            <Map />
        </View>
    )
}

export default MapView