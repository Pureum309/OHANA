import React from "react";
import { StyleSheet, Text, View, StatusBar, ScrollView, SafeAreaView } from 'react-native'
import Header from "../comps/Header";

import Network from "./Network";
import OhanaCalendar from "./CalendarScreen";
import Map from "../comps/Map";

const HomeScreen = () => {

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Header label="Ohana Logo" />
                    <Text>Hello this is testing</Text>
                    <Network />
                    <OhanaCalendar />
                    <Text>Testing Map</Text>
                    <Map />
                    <StatusBar barStyle="dark-content" />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: StatusBar.currentHeight,
        // justifyContent: 'center',
    },
});

export default HomeScreen
