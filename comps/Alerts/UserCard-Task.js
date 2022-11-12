import React,{useState, useCallback} from "react";
import { TouchableOpacity, Alert, Modal, Text, View, StyleSheet} from "react-native";
import UserCard from "../Network_User/UserCard";
import PostActivityCard from "../PostActivityCard";

//for FONT USAGE
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const UserCardTask = () =>{ 
    
    const [modalVisible, setModalVisible] = useState(false);

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
    
    return(     
        <View onLayout={onLayoutRootView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("New Task screen has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <PostActivityCard 
                        category = "Clothes Return"
                        datetime = "Sept 12, 2022"
                        location = "1538 King George Blv, Surrey, BC V3R 5H1"
                        />
                        <View style={styles.buttonCont}>
                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={styles.closeButton}>
                                <Text style={styles.closeButtonText}>Back to Alerts</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>       
               <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                    <UserCard name="Zo Adisa" task="Just posted a new task." pic={require("../../assets/userPhoto.png")} />
               </TouchableOpacity>
                 
        </View>
    )
}

export default UserCardTask;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: "rgba(18, 107, 138, 0.4)"
    },
    modalView: {
        height: '100%',
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
    buttonCont: {
        display: "flex",
        flexDirection: "row",
    },
    closeButton: {
        backgroundColor: "#CDCECF",
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 12,
        margin: 10
    },
    closeButtonText: {
        fontSize: 25,
        fontFamily: 'Nunito'
    },
});