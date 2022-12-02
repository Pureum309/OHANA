import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TouchableOpacity, Keyboard, ScrollView } from 'react-native';

import TextCard from './TextCard';
import IonicIcon from 'react-native-vector-icons/Ionicons'

import { TextInput } from 'react-native-paper';

import { setChosenText, removeChosenText } from '../DropMenuComp';

export default function PostTask() {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const handleAddTask = () => {
        Keyboard.dismiss();
        setTaskItems([...taskItems, task])
        setTask(null);
        setChosenText(task);
    }

    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy)
        removeChosenText(index);
    }

    return (
        <View style={styles.container}>
            {/* Added this scroll view to enable scrolling when list gets longer than the page */}
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1
                }}
                keyboardShouldPersistTaps='handled'
            >
                {
                    taskItems.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                                <TextCard text={item} />
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>

            {/* Write a task */}
            {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.writeTaskWrapper}
            >
                <TextInput
                    style={styles.input}
                    placeholder="Tap to share what are you up to?"
                    mode="outlined"
                    theme={{
                        colors: {
                            primary: '#00ADC3', // Outline color here
                        },
                    }}
                    left={<TextInput.Icon
                        icon="microphone-outline"
                        size={30}
                        iconColor={"#00ADC3"}
                    />}
                    right={<TextInput.Icon
                        icon="plus-circle-outline"
                        size={30}
                        iconColor={"#00ADC3"}
                        onPress={() => handleAddTask()}
                    />}

                    value={task}
                    onChangeText={text => setTask(text)}
                />
            </KeyboardAvoidingView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    writeTaskWrapper: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    input: {
        paddingVertical: 55,
        backgroundColor: '#FFF',
        width: 360,
    },
    iconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    }
});