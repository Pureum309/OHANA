import React from "react";
import { View, Text } from 'react-native'
import { user_info } from '../comps/UserProfile/user_info'


import Header from "../comps/Header";
import UserProfile from '../comps/UserProfile/user_profile'
import UserTabView from "../comps/Tab";


const Profile = () => {
    return (
        <View>
            <Text>This is Profile</Text>
            <UserProfile
                name={user_info.name}
                location={user_info.location}
                bio={user_info.bio}
            />
            <UserTabView />
        </View>
    )
}

export default Profile