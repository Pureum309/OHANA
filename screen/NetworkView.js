import React from "react";
import { StyleSheet, Text, View, StatusBar, ScrollView, SafeAreaView } from 'react-native'

import Header from "../comps/Header";
import Network from "../comps/Network";
import OhanaCalendar from "./CalendarScreen";
import Map from "../comps/Map";


const NetworkView = (props) => {

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Text>This is Network</Text>
                    <Network />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // paddingTop: StatusBar.currentHeight,
        // justifyContent: 'center',
    },
});

export default NetworkView