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
import { doc, onSnapshot, collection, query, orderBy } from "firebase/firestore";

function NewTab({ navigation }) {
    const [key, setKey] = useState(0);
    const [posts, setPosts] = useState([]);


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

    if (posts.length == 0) {
        const postsRef = collection(db, `users/${loginUser.user.uid}/posts`);
        const q = query(postsRef, orderBy("datetime", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const tempPosts = [];
            snapshot.forEach((doc) => {
                tempPosts.push(doc.data());
            });
            if (tempPosts.length != 0)
                setPosts(tempPosts);
        });
    }

    let index = 0;

    return (
        <PaperProvider key={key}>
            <View style={styles.container} onLayout={onLayoutRootView}>
                {
                    posts.map((post) => {
                        return (
                            <TouchableOpacity >
                                <PostActivityCard
                                    // category={item.category}
                                    // datetime={item.datetime}
                                    // location={item.location}
                                    // counter={item.counter}
                                    // tasks={item.tasks} 
                                    category={post.category}
                                    datetime={moment(post.datetime, "MMMM Do, YYYY hh:mm A")}
                                    location={post.location}
                                    counter={post.counter}
                                    tasks={post.tasks}
                                    id={post.id}
                                />
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </PaperProvider>
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