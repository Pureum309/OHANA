import React, { useState, useCallback } from "react";
import { StyleSheet, Text, View, StatusBar, ScrollView, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper';
import HomeLowerTabs from "../comps/HomeTabs";

import { postCards } from "../comps/DropMenuComp";
import PostActivityCard from "../comps/PostActivityCard";
import CGHomeLowerTabs from "../comps/CGHomeTabs";

import moment from "moment";

//for FONT USAGE
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

//DATABASE for FIRESTORE
import { loginUser } from "../comps/Login/Login";
import { db } from '../firebase/firebase';
import { doc, onSnapshot, collection, query, orderBy } from "firebase/firestore";


const CGHomeScreen = ({ navigation }) => {
    const [key, setKey] = useState(0);
    const [firstName, setFirstname] = useState("");
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
    //Can unsubscribe the real-time data change later.
    const unsubscribe = onSnapshot(doc(db, 'users', loginUser.user.uid), (doc) => {
        setFirstname(doc.data().first);
    });

    //Using moment to greeting
    const getGreeting = () => {
        const hour = moment().hour();
        if (hour > 16) {
            return "Good evening";
        }
        if (hour > 11) {
            return "Good afternoon";
        }
        return 'Morning';
    }

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
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.container} onLayout={onLayoutRootView}>
                        <Text style={styles.textStyle}>{getGreeting()}, {firstName}</Text>
                        <Text style={styles.textStyle}>What are you up to today?</Text>
                        <CGHomeLowerTabs />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </PaperProvider>
    )
}

const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
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

export default CGHomeScreen