import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';

import TextCard from './TextCard';
import IonicIcon from 'react-native-vector-icons/Ionicons'

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
                <TextInput style={styles.input} placeholder={'Tap to share what are you up to?'} value={task} onChangeText={text => setTask(text)} />
                <TouchableOpacity onPress={() => handleAddTask()}>
                    <View style={styles.addWrapper}>
                        {/* <Text style={styles.addText}>+</Text> */}
                        <IonicIcon name="add-circle-outline" color="#00A0C3" size="30px" />
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    tasksWrapper: {
        // paddingTop: 80,
        // paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    items: {
        // marginTop: 30,
    },
    writeTaskWrapper: {
        // position: 'absolute',
        // bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

        // shadowColor: '#171717',
        // shadowOffset: { width: 3, height: 4 },
        // shadowOpacity: 0.2,
        // shadowRadius: 3,
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 16,
        borderColor: '#2D2D2A',
        borderWidth: 1,
        width: 300,
        height: 100,
    },
    addWrapper: {
        // width: 60,
        // height: 60,
        // backgroundColor: '#FFF',
        // borderRadius: 60,
        // justifyContent: 'center',
        // alignItems: 'center',
        // borderColor: '#C0C0C0',
        // borderWidth: 1,
    },
    addText: {},
    iconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    }
});