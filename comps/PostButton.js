import {View, Button, StyleSheet, TouchableOpacity, Text} from "react-native"
import * as React from 'react';

export default function PostButton ({
    onPress, 
    title
}){   
    return (
    <View>
        <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        elevation: 8,
        backgroundColor: "#fff",
        borderColor: "#126B8A" ,
        borderWidth: 2,
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 12,
        margin: 20
      },
      buttonText: {
        fontSize: 18,
        color: "#86AAB6",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
})

