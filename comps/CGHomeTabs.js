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
import CGPostCard from './CGPostCard';

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
        const postsRef = collection(db, `posts`);
        const q = query(postsRef, where("progress", "==", 0));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const tempPosts = [];
            snapshot.forEach((doc) => {
                tempPosts.push({ docId: doc.id, ...doc.data() });
            });
            tempPosts.sort(function (a, b) { return a.datetime < b.datetime });
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
                                <CGPostCard
                                    id={post.docId}
                                    progress={post.progress}
                                    category={post.category}
                                    tasks={post.tasks}
                                    userName={post.userName}
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
        const postsRef = collection(db, `posts`);
        const q = query(postsRef, where("progress", "==", 1));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const tempPosts = [];
            snapshot.forEach((doc) => {
                tempPosts.push({ docId: doc.id, ...doc.data() });
            });
            tempPosts.sort(function (a, b) { return a.datetime < b.datetime });
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
                                <CGPostCard
                                    id={post.docId}
                                    progress={post.progress}
                                    category={post.category}
                                    tasks={post.tasks}
                                    userName={post.userName}
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
        const postsRef = collection(db, `posts`);
        const q = query(postsRef, where("progress", "==", 2));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const tempPosts = [];
            snapshot.forEach((doc) => {
                tempPosts.push({ docId: doc.id, ...doc.data() });
            });
            tempPosts.sort(function (a, b) { return a.datetime < b.datetime });
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
                                <CGPostCard
                                    id={post.docId}
                                    progress={post.progress}
                                    category={post.category}
                                    tasks={post.tasks}
                                    userName={post.userName}
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

function CGHomeLowerTabs() {
    return (
        <ScrollView>
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
                    name="Accepted"
                    component={AcceptedTab}
                />
            </Tab.Navigator>
        </ScrollView>
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


export default CGHomeLowerTabs;