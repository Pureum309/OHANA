import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useState, useCallback } from "react";
import { Text, View, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, StyleSheet } from 'react-native';

import { Provider as PaperProvider } from 'react-native-paper';

import PostActivityCard from "../comps/PostActivityCard";

import moment from "moment";

//for FONT USAGE
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

//DATABASE for FIRESTORE
import { loginUser } from "../comps/Login/Login";
import { db } from '../firebase/firebase';
import { doc, onSnapshot, collection, query, where } from "firebase/firestore";

function NewTab({ navigation }) {
    const [key, setKey] = useState(0);
    const [posts, setPosts] = useState(null);

    React.useEffect(() => {
        const focusHandler = navigation.addListener('focus', () => {
            setKey(Math.random() + key + 1);
        });
        return focusHandler;
    }, [navigation])

    //For FONT USAGE
    const [fontsLoaded] = useFonts({
        'Rubik': require('../assets/fonts/Rubik-Bold.ttf'),
        'Nunito': require('../assets/fonts/Nunito-Regular.ttf')
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


    //Read DATA from FIRESTORE

    if (posts == null) {
        const postsRef = collection(db, 'posts');
        const q = query(postsRef, where("userId", "==", loginUser.user.uid), where("progress", "==", 0));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const tempPosts = [];
            snapshot.forEach((doc) => {
                tempPosts.push({ docId: doc.id, ...doc.data() });
            });
            tempPosts.sort(function (a, b) { return moment(a.createdTime, "MMMM Do, YYYY hh:mm:ss A") < moment(b.createdTime, "MMMM Do, YYYY hh:mm:ss A") });
            setPosts(tempPosts);
        });
    }

    return (
        <PaperProvider key={key}>
            <View style={styles.container} onLayout={onLayoutRootView}>
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
                                    cardColor="#6AC278"
                                />
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </PaperProvider>
    );
}

function InProgressTab({ navigation }) {
    const [key, setKey] = useState(0);
    const [posts, setPosts] = useState(null);

    React.useEffect(() => {
        const focusHandler = navigation.addListener('focus', () => {
            setKey(Math.random() + key + 1);
        });
        return focusHandler;
    }, [navigation])

    //For FONT USAGE
    const [fontsLoaded] = useFonts({
        'Rubik': require('../assets/fonts/Rubik-Bold.ttf'),
        'Nunito': require('../assets/fonts/Nunito-Regular.ttf')
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


    //Read DATA from FIRESTORE

    if (posts == null) {
        const postsRef = collection(db, 'posts');
        const q = query(postsRef, where("userId", "==", loginUser.user.uid), where("progress", "==", 1));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const tempPosts = [];
            snapshot.forEach((doc) => {
                tempPosts.push({ docId: doc.id, ...doc.data() });
            });
            tempPosts.sort(function (a, b) { return moment(a.datetime, "MMMM Do, YYYY hh:mm A") < moment(b.datetime, "MMMM Do, YYYY hh:mm A") });
            setPosts(tempPosts);
        });
    }

    return (
        <PaperProvider key={key}>
            <View style={styles.container} onLayout={onLayoutRootView}>
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
                                    cardColor="#EDC81B"
                                />
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </PaperProvider>
    );
}

function AcceptedTab({ navigation }) {
    const [key, setKey] = useState(0);
    const [posts, setPosts] = useState(null);

    React.useEffect(() => {
        const focusHandler = navigation.addListener('focus', () => {
            setKey(Math.random() + key + 1);
        });
        return focusHandler;
    }, [navigation])

    //For FONT USAGE
    const [fontsLoaded] = useFonts({
        'Rubik': require('../assets/fonts/Rubik-Bold.ttf'),
        'Nunito': require('../assets/fonts/Nunito-Regular.ttf')
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


    //Read DATA from FIRESTORE

    if (posts == null) {
        const postsRef = collection(db, 'posts');
        const q = query(postsRef, where("userId", "==", loginUser.user.uid), where("progress", "==", 2));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const tempPosts = [];
            snapshot.forEach((doc) => {
                tempPosts.push({ docId: doc.id, ...doc.data() });
            });
            tempPosts.sort(function (a, b) { return moment(a.datetime, "MMMM Do, YYYY hh:mm A") < moment(b.datetime, "MMMM Do, YYYY hh:mm A") });
            setPosts(tempPosts);
        });
    }

    return (
        <PaperProvider key={key}>
            <View style={styles.container} onLayout={onLayoutRootView}>
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
                                    cardColor="#00ADC3"
                                />
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </PaperProvider>
    );
}

const Tab = createMaterialTopTabNavigator();

function HomeLowerTabs() {
    return (
        <Tab.Navigator
            sceneContainerStyle={{ backgroundColor: '#fff' }}
            style={styles.container}
        >
            <Tab.Screen
                name="New"
                component={NewTab}
            />
            <Tab.Screen
                name="In Progress"
                component={InProgressTab}
            />
            <Tab.Screen
                name="Completed"
                component={AcceptedTab}
            />
        </Tab.Navigator>
    );
}

const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height: deviceHeight,
        // alignItems: 'center'
    },
    textStyle: {
        fontSize: 35,
        fontWeight: '600',
        paddingLeft: 20,
        fontFamily: 'Rubik',
    }
});


export default HomeLowerTabs;