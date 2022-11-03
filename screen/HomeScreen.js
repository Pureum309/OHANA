import React, { useState, useCallback } from "react";
import { StyleSheet, Text, View, StatusBar, ScrollView, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper';

import { postCards } from "../comps/DropMenuComp";
import PostActivityCard from "../comps/PostActivityCard";
//for FONT USAGE
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const HomeScreen = ({ navigation }) => {
    const [key, setKey] = useState(0);

    console.log("current role" + role + "!!!!!!!!!!!!!!!!!!!!!!!!!");

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

    return (
        <PaperProvider key={key}>
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.container} onLayout={onLayoutRootView}>
                        <Text style={styles.textStyle}>Morning Zo,</Text>
                        <Text style={styles.textStyle}>What are you up to today?</Text>
                        {
                            postCards.map((item) => {
                                return (
                                    <TouchableOpacity >
                                        <PostActivityCard
                                            category={item.category}
                                            datetime={item.datetime}
                                            location={item.location}
                                            counter={item.counter}
                                            tasks={item.tasks} />
                                    </TouchableOpacity>
                                )
                            })
                        }
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

export default HomeScreen
