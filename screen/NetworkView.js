import React from "react";
import { StyleSheet, Text, View, StatusBar, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import SearchBar from "../comps/SearchBar";
import Network from "../comps/Network";
import Search from "../comps/SearchBar";
import { FlexStyleProps } from "@ui-kitten/components/devsupport";


const NetworkView = (props) => {

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
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