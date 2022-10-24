import React from "react";
import { useState, useCallback } from "react";
import { Alert, Modal, Pressable, Text, View, StyleSheet, } from 'react-native'
import PostButton from "../PostButton";

//for FONT USAGE
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const DropButton = ({ onPress }) => {

    const [modalVisible, setModalVisible] = useState(false);

    const pressOk = () => {
        setModalVisible(!modalVisible);
        { onPress() };
    }
    //For FONT USAGE
    const [fontsLoaded] = useFonts({
        'Rubik': require('../../assets/fonts/Rubik-Bold.ttf'),
        'Nunito': require('../../assets/fonts/Nunito-Regular.ttf')
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
        <View onLayout={onLayoutRootView}>
            <Modal
                animationType="none"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Post confirmation screen has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.warningText}>Are you sure?</Text>
                        <Text style={styles.regularText}>Do you want to proceed? You can still edit or delete this post later.</Text>
                        <View style={styles.containerForButtons}>
                            <Pressable onPress={() => setModalVisible(!modalVisible)} style={styles.nopeButton}>
                                <Text style={styles.nopeButtonText}>Nope.</Text>
                            </Pressable>
                            <Pressable style={styles.yupButton} onPress={pressOk}>
                                <Text style={styles.yupButtonText}>Yup!</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
            <PostButton
                title={"Tap To Post"}
                onPress={() => setModalVisible(!modalVisible)}
            />
        </View>
    )
}

export default DropButton;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: "rgba(18, 107, 138, 0.4)"
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    warningText: {
        color: "#00ADC3",
        fontSize: 30,
        fontWeight: "900",
        margin: 10,
        fontFamily: 'Nunito',
    },
    regularText: {
        margin: 10,
        fontSize: 20,
        fontFamily: 'Nunito',
    },
    containerForButtons: {
        display: "flex",
        flexDirection: "row",
    },
    nopeButton: {
        elevation: 8,
        backgroundColor: "#CDCECF",
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 12,
        margin: 10
    },
    nopeButtonText: {
        margin: 10,
        fontSize: 25,
        fontFamily: 'Nunito'
    },
    yupButton: {
        elevation: 8,
        backgroundColor: "#00ADC3",
        borderRadius: 15,
        color: "blue",
        paddingVertical: 10,
        paddingHorizontal: 12,
        margin: 10
    },
    yupButtonText: {
        margin: 10,
        color: "white",
        fontSize: 25,
        fontFamily: 'Nunito'
    },
});
