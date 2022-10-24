import React from "react";
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import { user_info } from '../comps/UserProfile/user_info'


import Header from "../comps/Header";
import UserProfile from '../comps/UserProfile/user_profile'


const Profile = () => {
    return (
        <View style={styles.container}>
            <Text>This is Profile</Text>
            <UserProfile
                name={user_info.name}
                location={user_info.location}
                bio={user_info.bio}
            />
        </View>
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