import React from "react";
import { View, ScrollView } from "react-native";
import UserCardTask from "./UserCard-Task";

const Alerts = ({ navigation }) => {
    return (
        <ScrollView>
            <View>
                <UserCardTask
                    navigation={navigation}
                />
            </View>
        </ScrollView>
    )
}

export default Alerts;