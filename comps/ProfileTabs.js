import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from "react";
import { Text, View } from 'react-native';

import PostActivityCard from "../comps/PostActivityCard";

function HomeScreen() {
    return (
        <View>
            <PostActivityCard />
            <PostActivityCard />
            <PostActivityCard />
        </View>
    );
}

function SettingsScreen() {
    return (
        <View>
            <Text>Even more things go here!</Text>

        </View>
    );
}

const Tab = createMaterialTopTabNavigator();

function ProfileLowerTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Summary" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
}

export default ProfileLowerTabs;