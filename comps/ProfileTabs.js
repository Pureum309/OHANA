import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useState } from "react";
import { Text, View, Modal } from 'react-native';
import { List } from 'react-native-paper';

//Firebase imports
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase';

//for FONT USAGE
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import PostActivityCard from "../comps/PostActivityCard";

//Needed for Back button
const logout = async () => {
    await signOut(auth);
    console.log("user logged out");
}

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
    const [modalVisible, setModalVisible] = useState(false);

    const pressOk = () => {
        setModalVisible(!modalVisible);
        { onPress() };
    }

    //For FONT USAGE
    const [fontsLoaded] = useFonts({
        'Rubik': require('../../assets/fonts/Rubik-Bold.ttf'),
        'Nunito': require('../../assets/fonts/Nunito-Regular.ttf')
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    })

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View>
            <Modal
                animationType="none"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Post confirmation screen has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
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
                    <List.Accordion
                        title="Sign out"
                        left={props => <List.Icon {...props} icon="logout" />}>
                        <List.Item
                            title="Sign out"
                            onPress={logout}
                        />
                    </List.Accordion>
                </List.Section>
            </Modal>
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