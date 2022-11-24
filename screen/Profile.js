import React, { useLayoutEffect } from "react";
import { View, Text, Dimensions, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import { user_info } from '../comps/UserProfile/user_info'

import UserProfile from '../comps/UserProfile/user_profile'
import ProfileLowerTabs from "../comps/ProfileTabs";

import { AntDesign } from '@expo/vector-icons';

const Profile = ({ navigation }) => {
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
        <ScrollView>
            <View style={styles.container}>
                <UserProfile
                    name={user_info.name}
                    location={user_info.location}
                    bio={user_info.bio}
                />
                <ProfileLowerTabs />
            </View>
        </ScrollView>
    )
}

export default Profile

const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: deviceHeight,
    },
});