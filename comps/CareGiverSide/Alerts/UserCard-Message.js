import React,{ useCallback } from "react";
import { TouchableOpacity, View } from "react-native";
import UserCard from "../Network_User/UserCard";

//for FONT USAGE
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const UserCardMessage = ({navigation}) =>{ 

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
    
    return(     
        <View onLayout={onLayoutRootView}>
               <TouchableOpacity onPress={() => onTapGoChat()}>
                    <UserCard name="August S." task="Sent you a message." pic={require("../../assets/user7.jpg")} />
                </TouchableOpacity> 
        </View>
    )
}

export default UserCardMessage;