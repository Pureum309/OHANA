import React, { useState, useCallback, useLayoutEffect } from "react";
import { StyleSheet, Text, View, StatusBar, ScrollView, SafeAreaView, TouchableOpacity, Dimensions, Image } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper';
import HomeLowerTabs from "../comps/HomeTabs";

import { AntDesign } from '@expo/vector-icons';

import moment from "moment";

//for FONT USAGE
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

//DATABASE for FIRESTORE
import { loginUser } from "../comps/Login/Login";
import { db } from '../firebase/firebase';
import { doc, onSnapshot } from "firebase/firestore";

const HomeScreen = ({ navigation }) => {
    const [key, setKey] = useState(0);
    const [firstName, setFirstname] = useState("");

    const pressChat = () => {
        console.log("test");
        navigation.navigate('Chat');
    }

    const pressHome = () => {
        console.log("!!!");
        navigation.navigate('Home');
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitleVisible: false,
            headerLeft: () => (
                <TouchableOpacity
                    style={{ marginLeft: 30 }}
                    onPress={pressHome}
                >
                    <Image
                        style={{
                            height: 40,
                            width: 40,
                            resizeMode: 'contain',
                        }}
                        source={require('../assets/logoicon.png')} />
                </TouchableOpacity>
            ),
            headerRight: () => (
                <TouchableOpacity
                    style={{ marginRight: 30 }}
                    onPress={pressChat}
                >
                    <AntDesign name="message1" size={24} color="black"
                    />
                </TouchableOpacity>
            )
        });
    }, [navigation]);

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

    return (
        <PaperProvider key={key}>
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.container} onLayout={onLayoutRootView}>
                        <Text style={[styles.textStyle, { paddingTop: 15, }]}>{getGreeting()}, {firstName}</Text>
                        <Text style={[styles.textStyle, { paddingBottom: 15, }]}>What are you up to today?</Text>
                        <HomeLowerTabs />
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
    },
});

export default HomeScreen
