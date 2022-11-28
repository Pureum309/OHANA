import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useState } from "react";
import { Text, View, Modal, StyleSheet, Alert, Pressable, Button } from 'react-native';
import { List } from 'react-native-paper';

//Firebase imports
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase';

//for FONT USAGE
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import PostActivityCard from "../comps/PostActivityCard";

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

    const [isModalVisible, setIsModalVisible] = useState(false);
    const handleModal = () => setIsModalVisible(() => !isModalVisible);

    const pressOk = async () => {
        setIsModalVisible(!isModalVisible);
        await signOut(auth);
        console.log("user logged out");
    }

    return (
        <View>
            <List.Section style={styles.listSection}>
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
                <List.Item
                    icon="logout"
                    title="Sign out"
                    onPress={handleModal}
                />
            </List.Section>

            <Modal visible={isModalVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.warningText}>Are you sure?</Text>
                        <Text style={styles.regularText}>Do you want to proceed?</Text>
                        <View style={styles.containerForButtons}>
                            <Pressable onPress={() => setIsModalVisible(!isModalVisible)} style={styles.nopeButton}>
                                <Text style={styles.nopeButtonText}>Nope.</Text>
                            </Pressable>
                            <Pressable style={styles.yupButton} onPress={pressOk}>
                                <Text style={styles.yupButtonText}>Yup!</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
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

const styles = StyleSheet.create({
    listSection: {
        margin: 20,
        borderRadius: 20,
        backgroundColor: "white",
        boxShadow: '1px 2px 9px #F4AAB9',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: "rgba(18, 107, 138, 0.4)"
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    warningText: {
        color: "#00ADC3",
        fontSize: 30,
        fontWeight: "900",
        margin: 10,
        fontFamily: 'Nunito',
    },
    regularText: {
        margin: 10,
        fontSize: 20,
        fontFamily: 'Nunito',
    },
    containerForButtons: {
        display: "flex",
        flexDirection: "row",
    },
    nopeButton: {
        elevation: 8,
        backgroundColor: "#CDCECF",
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 12,
        margin: 10
    },
    nopeButtonText: {
        margin: 10,
        fontSize: 25,
        fontFamily: 'Nunito'
    },
    yupButton: {
        elevation: 8,
        backgroundColor: "#00ADC3",
        borderRadius: 15,
        color: "blue",
        paddingVertical: 10,
        paddingHorizontal: 12,
        margin: 10
    },
    yupButtonText: {
        margin: 10,
        color: "white",
        fontSize: 25,
        fontFamily: 'Nunito'
    },
});
