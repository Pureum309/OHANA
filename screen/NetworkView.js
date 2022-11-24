import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View, StatusBar, ScrollView, SafeAreaView, Dimensions, TouchableOpacity, Image } from 'react-native';
import Network from "../comps/Network";
import { AntDesign } from '@expo/vector-icons';


const NetworkView = ({ navigation }) => {
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
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Network />
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

export default NetworkView