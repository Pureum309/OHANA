import React from "react";

//Navigation components

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import IonicIcon from 'react-native-vector-icons/Ionicons'

import { Text, Dimensions } from 'react-native'

//Import Screens

import HomeScreen from "../screen/HomeScreen";
import NetworkView from "../screen/NetworkView";
import Post from "../screen/Post";
import MapView from "../screen/MapView";
import Profile from "../screen/Profile";
import Header from "../comps/Header";

import IntroScreen from "../screen/IntroScreen";
import LoginScreen from "./Login/Login";
import TutorialComp from "./TutorialComp";

const fullScreenWidth = Dimensions.get('window').width;

const Stack = createStackNavigator()

function HomeStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
        </Stack.Navigator>
    );
}

function NetworkStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Network" options={{ headerShown: false }} component={NetworkView} />
        </Stack.Navigator>
    );
}

function PostStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Post" options={{ headerShown: false }} component={Post} />
        </Stack.Navigator>
    );
}

function MapStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Map" options={{ headerShown: false }} component={MapView} />
        </Stack.Navigator>
    );
}

function ProfileStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" options={{ headerShown: false }} component={Profile} />
        </Stack.Navigator>
    );
}

function TabNavigationScreen() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                // headerTitle: () => <Text>Header</Text>,
                header: (props) => <Header label={route.name} />,
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
        </Tab.Navigator>
    )
}


const Tab = createBottomTabNavigator();

export default function Navigation(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* All screens should be placed here to be navigated. */}
                <Stack.Screen name="Intro" component={IntroScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Main" component={TabNavigationScreen} options={{ title: '', headerShown: false }} />
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Tutorial" component={TutorialComp} options={{ headerShown: false }} />
                {/* All contents in TabNavigationScreen was here. */}
            </Stack.Navigator>
        </NavigationContainer >
    )
}