import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useState, useCallback } from "react";
import { Text, View, Modal, StyleSheet, Alert, Pressable, Button, TouchableOpacity, ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper';

import moment from "moment";

//for FONT USAGE
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

//Firebase imports
import { signOut } from "firebase/auth";
import { auth } from '../firebase/firebase';

//DATABASE for FIRESTORE
import { loginUser } from "../comps/Login/Login";
import { db } from '../firebase/firebase';
import { doc, onSnapshot, collection, query, where } from "firebase/firestore";

import PostActivityCard from "../comps/PostActivityCard";
import { loginUserRole } from "./Login/Login";
import RewardCard from './Reward';

function Summary({ navigation }) {
    const [key, setKey] = useState(0);
    const [posts, setPosts] = useState(null);

    React.useEffect(() => {
        const focusHandler = navigation.addListener('focus', () => {
            setKey(Math.random() + key + 1);
        });
        return focusHandler;
    }, [navigation])

    const postsRef = collection(db, 'posts');
    const q = query(postsRef, where("progress", "==", 1, "or", "progress", "==", 2));
    const unsubscribe = onSnapshot(q, (snapshot) => {
        const tempPosts = [];
        snapshot.forEach((doc) => {
            tempPosts.push({ docId: doc.id, ...doc.data() });
        });
        tempPosts.sort(function (a, b) { return moment(a.datetime, "MMMM Do, YYYY hh:mm A") < moment(b.datetime, "MMMM Do, YYYY hh:mm A") });
        setPosts(tempPosts);
    });

    return (
        <PaperProvider key={key}>
            <ScrollView>
                <View style={styles.postCont}>
                    <View style={{ alignItems: "center", paddingTop: 20, }}>
                        <RewardCard />
                    </View>
                    <Text
                        style={{
                            fontFamily: 'Nunito-bold',
                            fontSize: 20,
                            marginLeft: 20,
                            paddingTop: 30,
                        }}>Completed Tasks</Text>

                    {posts != null &&
                        posts.map((post) => {
                            return (
                                <TouchableOpacity >
                                    <PostActivityCard
                                        category={post.category}
                                        datetime={moment(post.datetime, "MMMM Do, YYYY hh:mm A")}
                                        location={post.location}
                                        counter={post.counter}
                                        tasks={post.tasks}
                                        id={post.docId}
                                    />
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </PaperProvider>
    );
}

function Posts({ navigation }) {
    const [key, setKey] = useState(0);
    const [posts, setPosts] = useState(null);

    React.useEffect(() => {
        const focusHandler = navigation.addListener('focus', () => {
            setKey(Math.random() + key + 1);
        });
        return focusHandler;
    }, [navigation])

    const postsRef = collection(db, 'posts');
    const q = query(postsRef, where("userId", "==", loginUser.user.uid));
    const unsubscribe = onSnapshot(q, (snapshot) => {
        const tempPosts = [];
        snapshot.forEach((doc) => {
            tempPosts.push({ docId: doc.id, ...doc.data() });
        });
        tempPosts.sort(function (a, b) { return moment(a.datetime, "MMMM Do, YYYY hh:mm A") < moment(b.datetime, "MMMM Do, YYYY hh:mm A") });
        setPosts(tempPosts);
    });

    //For FONT USAGE
    const [fontsLoaded] = useFonts({
        'Rubik': require('../assets/fonts/Rubik-Bold.ttf'),
        'Nunito': require('../assets/fonts/Nunito-Regular.ttf'),
        'Nunito-bold': require('../assets/fonts/Nunito-Bold.ttf')
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    })

    if (!fontsLoaded) {
        return null;
    }
    ///End FONT USAGE

    return (
        <PaperProvider key={key}>
            <ScrollView>
                <View style={styles.postCont} onLayout={onLayoutRootView}>
                    {posts != null &&
                        posts.map((post) => {
                            return (
                                <TouchableOpacity >
                                    <PostActivityCard
                                        category={post.category}
                                        datetime={moment(post.datetime, "MMMM Do, YYYY hh:mm A")}
                                        location={post.location}
                                        counter={post.counter}
                                        tasks={post.tasks}
                                        id={post.docId}
                                    />
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </PaperProvider>
    );
}


function SettingsScreen({ navigation }) {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const handleModal = () => setIsModalVisible(() => !isModalVisible);

    const pressOk = async () => {
        setIsModalVisible(!isModalVisible);
        console.log("user logged out");
        try {
            await signOut(auth);
            navigation.navigate('Login')
        } catch {
            alert("Error!")
        }
    }

    return (
        <View style={styles.container}>
            <List.Section style={styles.listSection}>
                <TouchableOpacity>
                    <List.Item
                        title="Edit Profile"
                        left={(props) => <List.Icon {...props} icon='account' />}
                        right={(props) => <List.Icon {...props} icon='chevron-right' />}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <List.Item
                        title="Settings"
                        left={(props) => <List.Icon {...props} icon='cog' />}
                        right={(props) => <List.Icon {...props} icon='chevron-right' />}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <List.Item
                        title="Invite to network"
                        left={(props) => <List.Icon {...props} icon='account-multiple-outline' />}
                        right={(props) => <List.Icon {...props} icon='chevron-right' />}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <List.Item
                        title="Help"
                        left={(props) => <List.Icon {...props} icon='help-circle-outline' />}
                        right={(props) => <List.Icon {...props} icon='chevron-right' />}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <List.Item
                        title="Sign out"
                        left={(props) => <List.Icon {...props} icon='logout' />}
                        right={(props) => <List.Icon {...props} icon='chevron-right' />}
                        onPress={handleModal}
                    />
                </TouchableOpacity>
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
    if (loginUserRole == 1) {
        return (
            <Tab.Navigator sceneContainerStyle={{ backgroundColor: '#fff' }}>
                <Tab.Screen name="Posts" component={Posts} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        );
    } else if (loginUserRole == 2) {
        return (
            <Tab.Navigator sceneContainerStyle={{ backgroundColor: '#fff' }}>
                <Tab.Screen name="Summary" component={Summary} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        );
    }
}

export default ProfileLowerTabs;

const styles = StyleSheet.create({
    container: {
        padding: 50,
    },
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
