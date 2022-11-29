import React, { useLayoutEffect, useCallback } from "react";

//Navigation components

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import IonicIcon from 'react-native-vector-icons/Ionicons'

import { Dimensions } from 'react-native'

//for FONT USAGE
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

//Import Screens

import HomeScreen from "../screen/HomeScreen";
import NetworkView from "../screen/NetworkView";
import Post from "../screen/Post";
import MapView from "../screen/MapView";
import Profile from "../screen/Profile";
import CareGiverProfileScreen from "../screen/CaregiverProfileScreen";

import AlertScreen from "../screen/AlertScreen";

import IntroScreen from "../screen/IntroScreen";
import LoginScreen, { loginUserRole } from "./Login/Login";
import TutorialComp from "./TutorialComp";
import ChatScreen from "../screen/ChatScreen";

import CGHomeScreen from "../screen/CGHomeScreen";
import ChatRoom from "./Chat/ChatRoom";
import ResigerScreen from "../screen/Register"

const fullScreenWidth = Dimensions.get('window').width;

let headerColor = "#E6F7F9"
let careHeader = "#126B8A"
let cgColor = "#DDE2E5"
let cgOpacity = 0.85

const Stack = createStackNavigator()

function HomeStackScreen() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: headerColor,
                    height: 150,
                },
                headerTitleStyle: {
                    fontSize: 36,
                    fontWeight: "700",
                    paddingRight: 14,
                    fontFamily: 'Rubik',
                    marginLeft: "25%",
                },
            }}
        >
            <Stack.Screen name="Home" options={{ headerShown: true }} component={HomeScreen} />
        </Stack.Navigator>
    );
}

function NetworkStackScreen() {

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

    if (loginUserRole == 1) {
        headerColor = "#E6F7F9"
        cgColor = "black"
    } else if (loginUserRole == 2) {
        headerColor = "#126B8A"
        cgColor = "#DDE2E5"
    }

    return (

        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: headerColor,
                    height: 150,
                    opacity: cgOpacity
                },
                headerTitleStyle: {
                    fontSize: 36,
                    fontWeight: '700',
                    paddingRight: 14,
                    fontFamily: 'Rubik',
                    marginLeft: "15%",
                    color: cgColor
                },
            }}
        >
            <Stack.Screen name="Network" options={{ headerShown: true }} component={NetworkView} />
        </Stack.Navigator>
    );
}

function PostStackScreen() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: headerColor,
                    height: 150,
                },
                headerTitleStyle: {
                    fontSize: 36,
                    fontWeight: '700',
                    paddingRight: 14,
                    fontFamily: 'Rubik',
                    marginLeft: "30%",
                },
            }}
        >
            <Stack.Screen name="Post" options={{ headerShown: true }} component={Post} />
        </Stack.Navigator>
    );
}

function MapStackScreen() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: headerColor,
                    height: 150,
                },
                headerTitleStyle: {
                    fontSize: 36,
                    fontWeight: '700',
                    paddingRight: 14,
                    fontFamily: 'Rubik',
                    marginLeft: "30%",
                },
            }}
        >
            <Stack.Screen name="Map" options={{ headerShown: true }} component={MapView} />
        </Stack.Navigator>
    );
}

function ProfileStackScreen() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: headerColor,
                    height: 150,
                },
                headerTitleStyle: {
                    fontSize: 36,
                    fontWeight: '700',
                    paddingRight: 14,
                    fontFamily: 'Rubik',
                    marginLeft: "20%",
                },
            }}
        >
            <Stack.Screen name="Profile" options={{ headerShown: true }} component={Profile} />
        </Stack.Navigator>
    );
}

function ChatStackScreen() {
    if (loginUserRole == 1) {
        headerColor = "#E6F7F9"
        cgColor = "black"
    } else if (loginUserRole == 2) {
        headerColor = "#126B8A"
        cgOpacity
    }

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: headerColor,
                    height: 150,
                    opacity: cgOpacity
                },
                headerTitleStyle: {
                    fontSize: 36,
                    fontWeight: '700',
                    paddingRight: 14,
                    fontFamily: 'Rubik',
                    marginLeft: "20%",
                    color: cgColor,
                },
            }}
        >
            <Stack.Screen name="Chat" options={{ headerShown: true }} component={ChatScreen} />
        </Stack.Navigator>
    );
}


/////////////////////**************CAREGIVER SCREEN ***********////////////
function CGHomeStackScreen() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: careHeader,
                    height: 150,
                    opacity: 0.85,
                },
                headerTitleStyle: {
                    fontSize: 36,
                    fontWeight: '700',
                    paddingRight: 14,
                    fontFamily: 'Rubik',
                    marginLeft: "25%",
                    color: cgColor,
                },
            }}
        >
            <Stack.Screen name="Home" options={{ headerShown: true }} component={CGHomeScreen} />
        </Stack.Navigator>
    );
}

function AlertStackScreen() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: careHeader,
                    height: 150,
                    opacity: 0.85,
                },
                headerTitleStyle: {
                    fontSize: 36,
                    fontWeight: '700',
                    paddingRight: 14,
                    fontFamily: 'Rubik',
                    marginLeft: "20%",
                    color: cgColor,
                },
            }}
        >
            <Stack.Screen name="Alerts" options={{ headerShown: true }} component={AlertScreen} />
        </Stack.Navigator>
    );
}

// ********** display caregiver profile ***********
function CaregiverProfileStackScreen() {
    return (
        <Stack.Navigator
            screenOptions={{
                title: "Profile",
                headerStyle: {
                    backgroundColor: careHeader,
                    height: 150,
                    opacity: 0.85,
                },
                headerTitleStyle: {
                    fontSize: 36,
                    fontWeight: '700',
                    paddingRight: 14,
                    fontFamily: 'Rubik',
                    marginLeft: "20%",
                    color: cgColor,
                },
            }}
        >
            <Stack.Screen name="Caregiver Profile" options={{ headerShown: true }} component={CareGiverProfileScreen} />
        </Stack.Navigator>
    );
}

function TabNavigationScreen() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                // headerTitle: () => <Text>Header</Text>,
                headerShown: false,
                tabBarIcon: ({ focused, color, size, padding }) => {
                    let iconName;
                    if (route.name == 'Home') {
                        iconName = focused ? 'home' : 'md-home-outline'
                    } else if (route.name == 'Network') {
                        iconName = focused ? 'people' : 'people-outline'
                    } else if (route.name == 'Post') {
                        iconName = focused ? 'add-circle' : 'add-circle-outline'
                    } else if (route.name == 'Map') {
                        iconName = focused ? 'location' : 'location-outline'
                    } else if (route.name == 'Profile') {
                        iconName = focused ? 'person' : 'person-outline'
                    }

                    return (
                        <IonicIcon
                            name={iconName}
                            size={size}
                            color={color}
                            style={{ paddingBottom: padding }}
                        />
                    );
                },
            })}
            tabBarOptions={{
                activeTintColor: '#126B8A',
                inactiveTintColor: '#126B8A',
                lableStyle: { fontSize: 16 },
                style: { width: fullScreenWidth }
            }}>
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Network" component={NetworkStackScreen} />
            <Tab.Screen name="Post" component={PostStackScreen} />
            <Tab.Screen name="Map" component={MapStackScreen} />
            <Tab.Screen name="Profile" component={ProfileStackScreen} />
            <Tab.Screen name="Chat" component={ChatStackScreen}
                options={{
                    tabBarButton: () => null,
                    tabBarVisible: false,
                }} />
        </Tab.Navigator>
    )
}

function TabCaregiverNavigationScreen() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                // headerTitle: () => <Text>Header</Text>,
                headerShown: false,
                tabBarIcon: ({ focused, color, size, padding }) => {
                    let iconName;
                    if (route.name == 'Home') {
                        iconName = focused ? 'home' : 'md-home-outline'
                    } else if (route.name == 'Network') {
                        iconName = focused ? 'people' : 'people-outline'
                    } else if (route.name == 'Alerts') {
                        iconName = focused ? 'notifications' : 'notifications-outline'
                    } else if (route.name == 'Profile') {
                        iconName = focused ? 'person' : 'person-outline'
                    }

                    return (
                        <IonicIcon
                            name={iconName}
                            size={size}
                            color={color}
                            style={{ paddingBottom: padding }}
                        />
                    );
                },
            })}
            tabBarOptions={{
                activeTintColor: '#126B8A',
                inactiveTintColor: '#126B8A',
                lableStyle: { fontSize: 18 },
                style: {
                    width: fullScreenWidth,
                }
            }}>
            <Tab.Screen name="Home" component={CGHomeStackScreen} />
            <Tab.Screen name="Network" component={NetworkStackScreen} />
            <Tab.Screen name="Alerts" component={AlertStackScreen} />
            <Tab.Screen name="Profile" component={CaregiverProfileStackScreen} />
            <Tab.Screen name="Chat" component={ChatStackScreen}
                options={{
                    tabBarButton: () => null,
                    tabBarVisible: false,
                }} />
        </Tab.Navigator >
    )
}


const Tab = createBottomTabNavigator();

export default function Navigation() {
    if (loginUserRole == 1) {
        careHeader = "#E6F7F9"
        cgColor = "black"
    } else if (loginUserRole == 2) {
        careHeader = "#126B8A"
    }
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: careHeader,
                        height: 150,
                    },
                    headerTitleStyle: {
                        fontSize: 36,
                        fontWeight: '700',
                        paddingRight: 14,
                        fontFamily: 'Rubik',
                        marginLeft: "25%",
                        color: cgColor,
                    },
                }}
            >
                {/* All screens should be placed here to be navigated. */}
                <Stack.Screen name="Intro" component={IntroScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Main" component={TabNavigationScreen} options={{ title: '', headerShown: false }} />
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Tutorial" component={TutorialComp} options={{ headerShown: false }} />
                <Stack.Screen name="CaregiverMain" component={TabCaregiverNavigationScreen} options={{ headerShown: false }} />
                {/* <Stack.Screen name="Chat" component={ChatScreen} options={{ headerShown: true }} /> */}
                <Stack.Screen name="ChatRoom" component={ChatRoom} options={{ headerShown: true }} />
                <Stack.Screen name="Register" component={ResigerScreen} options={{ headerShown: false }} />
                {/* All contents in TabNavigationScreen was here. */}
            </Stack.Navigator>
        </NavigationContainer >
    )
}