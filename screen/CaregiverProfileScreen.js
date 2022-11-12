import React from "react";
import { View, Text, Dimensions, StyleSheet, ScrollView } from 'react-native'
import { caregiver_info } from '../comps/CareGiverUser/careGiverInfo'
import ProfileLowerTabs from "../comps/ProfileTabs";


import Header from "../comps/Header";
import CareGiverProfile from '../comps/CareGiverUser/careGiverProfile'


const CareGiverProfileScreen = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <CareGiverProfile
                    name={caregiver_info.name}
                    location={caregiver_info.location}
                    bio={caregiver_info.bio}
                />
                <ProfileLowerTabs />
            </View>
        </ScrollView>
    )
}

export default CareGiverProfileScreen

const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: deviceHeight,
    },
});