import React from "react";
import { View, Text } from 'react-native'
import UserLower from "../comps/User_Profile_Lower/user_lower";

// import Header from "../comps/Header";

const Profile = (props) => {
    return (

        <View>
            <Text>This is Profile</Text>
            <UserLower />
        </View>


    );
}

export default Profile