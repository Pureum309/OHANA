import React from "react";
import { StyleSheet, Text, View, StatusBar, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import SearchBar from "../comps/SearchBar";
import Network from "../comps/Network";
import Search from "../comps/SearchBar";


const NetworkView = (props) => {

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Search />
                    <Network />
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: deviceHeight,
    },
});

export default NetworkView