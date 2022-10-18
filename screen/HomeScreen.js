import React from "react";
import { StyleSheet, Text, View, StatusBar, ScrollView, SafeAreaView } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper';

import OhanaCalendar from "../comps/Calendar";


const HomeScreen = (props) => {

    return (
        <PaperProvider>
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.container}>
                        <Text>This is Home</Text>
                        <OhanaCalendar />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </PaperProvider>
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

export default HomeScreen
