import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper';

import OhanaCalendar from "../comps/Calendar";
import { postCards } from "../comps/DropMenuComp";
import PostActivityCard from "../comps/PostActivityCard";

const HomeScreen = ({ navigation }) => {
    const [key, setKey] = useState(0);

    React.useEffect(() => {
        const focusHandler = navigation.addListener('focus', () => {
            setKey(key + 1);
        });
        return focusHandler;
    }, [navigation])

    return (
        <PaperProvider key={key}>
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.container}>
                        <Text>This is Home</Text>
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

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // paddingTop: StatusBar.currentHeight,
        // justifyContent: 'center',
    },
});

export default HomeScreen
