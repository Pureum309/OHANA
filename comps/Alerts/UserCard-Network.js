import React, { useCallback, useState } from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import UserCard from "../Network_User/UserCard";

//for FONT USAGE
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const UserCardNetwork = ({ navigation }) => {

    const [show, setShow] = useState(false)

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

    const onTapGoChat = () => {
        navigation.navigate('Network')
    }

    return (
        <View onLayout={onLayoutRootView}>
            <TouchableOpacity onPress={() => setShow(true)}>
                <UserCard name="Angela Verena" task="Would like to join your network." pic={require("../../assets/user2.jpg")} />
            </TouchableOpacity>
            {
                show ?
                    <View style={styles.containerForButtons}>
                        <View>
                            <TouchableOpacity style={styles.acceptButton} onPress={() => onTapGoChat()}>
                                <Text style={styles.acceptButtonText}>Accept</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity
                                onPress={() => setShow(false)}
                                style={styles.declineButton}>
                                <Text style={styles.declineButtonText}>Decline</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    : null
            }
        </View>
    )
}

export default UserCardNetwork;

const styles = StyleSheet.create({
    containerForButtons: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 0,
        justifyContent: "center"
    },
    declineButton: {
        elevation: 8,
        width: 100,
        height: 46,
        backgroundColor: "#fff",
        borderColor: "#00ADC3",
        borderWidth: 2,
        borderRadius: 15,
        marginTop: 10,
    },
    declineButtonText: {
        marginLeft: 25,
        margin: 10,
        fontSize: 15,
        fontFamily: 'Nunito'
    },
    acceptButton: {
        elevation: 8,
        width: 100,
        height: 46,
        backgroundColor: "#00ADC3",
        borderRadius: 15,
        margin: 10
    },
    acceptButtonText: {
        marginLeft: 25,
        margin: 13,
        color: "white",
        fontSize: 15,
        fontFamily: 'Nunito'
    },
});
