import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useState } from "react";
import { Text, View } from 'react-native';
import { List } from 'react-native-paper';

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

    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);

    return (
        <View>
            <List.Section title="Accordions">
                <List.Accordion
                    title="Edit Profile"
                    left={props => <List.Icon {...props} icon="account" />}>
                    <List.Item title="First item" />
                    <List.Item title="Second item" />
                </List.Accordion>
                <List.Accordion
                    title="Settings"
                    left={props => <List.Icon {...props} icon="cog" />}>
                    <List.Item title="First item" />
                    <List.Item title="Second item" />
                </List.Accordion>
                <List.Accordion
                    title="Invite to network"
                    left={props => <List.Icon {...props} icon="account-multiple-outline" />}>
                    <List.Item title="First item" />
                    <List.Item title="Second item" />
                </List.Accordion>
                <List.Accordion
                    title="Help"
                    left={props => <List.Icon {...props} icon="help-circle-outline" />}>
                    <List.Item title="First item" />
                    <List.Item title="Second item" />
                </List.Accordion>
            </List.Section>

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