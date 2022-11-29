import React, { useLayoutEffect } from "react";
import { View, Text, Dimensions, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import { caregiver_info } from '../comps/CareGiverUser/careGiverInfo'
import ProfileLowerTabs from "../comps/ProfileTabs";

import Header from "../comps/Header";
import CareGiverProfile from '../comps/CareGiverUser/careGiverProfile'

import { AntDesign } from '@expo/vector-icons';


const CareGiverProfileScreen = ({ navigation }) => {

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
        <ScrollView>
            <View style={styles.container}>
                <CareGiverProfile
                    name={caregiver_info.name}
                    location={caregiver_info.location}
                    bio={caregiver_info.bio}
                />
                <ProfileLowerTabs />
            </View>
        </ScrollView>
    )
}

export default CareGiverProfileScreen

const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: deviceHeight,
    },
});