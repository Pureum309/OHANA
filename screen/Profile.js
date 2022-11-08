import React from "react";
import { View, Text, Dimensions, StyleSheet, ScrollView } from 'react-native'
import { user_info } from '../comps/UserProfile/user_info'


import Header from "../comps/Header";
import UserProfile from '../comps/UserProfile/user_profile'
import ProfileLowerTabs from "../comps/ProfileTabs";


const Profile = () => {
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