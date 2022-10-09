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
import { DayOfTheWeek } from "expo-calendar";

const fullScreenWidth = Dimensions.get('window').width;

const Stack = createStackNavigator()

function HomeStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
}

function NetworkStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Network" component={NetworkView} />
        </Stack.Navigator>
    );
}

function PostStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Post" component={Post} />
        </Stack.Navigator>
    );
}

function MapStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Map" component={MapView} />
        </Stack.Navigator>
    );
}

function ProfileStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

export default function Navigation(props) {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerTitle: () => <Text>Header</Text>,
                    tabBarIcon: ({ focused, color, size, padding }) => {
                        let iconName;
                        if (route.name == 'Home') {
                            iconName = focused ? 'home' : 'md-home-outline'
                        } else if (route.name == 'Network') {
                            iconName = focused ? 'ios-magnet' : 'ios-magnet-outline'
                        } else if (route.name == 'Post') {
                            iconName = focused ? 'add-circle' : 'add-circle-outline'
                        } else if (route.name == 'Map') {
                            iconName = focused ? 'map' : 'map-outline'
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
                    activeTintColor: 'Black',
                    inactiveTintColor: 'grey',
                    lableStyle: { fontSize: 16 },
                    style: { width: fullScreenWidth }
                }}>
                <Tab.Screen name="Home" component={HomeStackScreen} />
                <Tab.Screen name="Network" component={NetworkStackScreen} />
                <Tab.Screen name="Post" component={PostStackScreen} />
                <Tab.Screen name="Map" component={MapStackScreen} />
                <Tab.Screen name="Profile" component={ProfileStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}