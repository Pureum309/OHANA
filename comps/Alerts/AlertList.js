import React from "react";
import { View, ScrollView } from "react-native";
import UserCardTask from "./UserCard-Task";
import UserCardMessage from "./UserCard-Message";
import UserCardNetwork from "./UserCard-Network";

const Alerts = () => {
    return (
        <ScrollView>
            <View>
                <UserCardTask />
            </View>
        </ScrollView>
    )
}

export default Alerts;