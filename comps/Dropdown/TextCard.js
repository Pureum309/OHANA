import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import IonicIcon from 'react-native-vector-icons/Ionicons'


const TextCard = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <IonicIcon name="trash-outline" style={styles.circular} size="24" />
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        height: 150,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,

        shadowColor: '#171717',
        shadowOffset: { width: 10, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,

    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        // width: 24,
        // height: 24,
        // backgroundColor: '#00A0C3',
        // opacity: 0.4,
        // borderRadius: 5,
        // marginRight: 15,
    },
    itemText: {
        // maxWidth: '80%',
    },
    circular: {
        color: '#00A0C3',
        size: 20,
    },
});

export default TextCard;