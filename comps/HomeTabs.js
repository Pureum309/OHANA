import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from "react";
import { Text, View } from 'react-native';

import PostActivityCard from "../comps/PostActivityCard";

function NewTab() {
    return (
        <View>
            <Text>*** New task cards will go here...</Text>
        </View>
    );
}

function InProgressTab() {
    return (
        <View>
            <PostActivityCard />
            <PostActivityCard />
            <PostActivityCard />


        </View>
    );
}

function AcceptedTab() {
    return (
        <View>
            <Text>Accepted task cards will go here...</Text>
        </View>
    );
}

const Tab = createMaterialTopTabNavigator();

function HomeLowerTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="New"
                component={NewTab}
            />
            <Tab.Screen
                name="In Progress"
                component={InProgressTab}
            />
            <Tab.Screen
                name="Accepted"
                component={AcceptedTab}
            />
        </Tab.Navigator>
    );
}

export default HomeLowerTabs;