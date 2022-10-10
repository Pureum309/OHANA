import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'

const UserCard = ({ name, rel }) => {
    return (
        <View style={styles.cardPadding}>
            <View style={styles.cardContainer}>
                <Image style={styles.imageStyle} source={require('../../assets/userPlaceholder.png')} />
                <View style={styles.infoStyle}>
                    <Text style={styles.titleStyle}>{name}</Text>
                    <Text style={styles.categoryStyle}>{rel}</Text>
                </View>
            </View >
        </View>
    )
}

const deviceWidth = Math.round(Dimensions.get('window').width)
const radius = 20

const styles = StyleSheet.create({
    cardPadding: {
        padding: 7,
    },
    cardContainer: {
        display: "flex",
        flexDirection: "row",
        // backgroundColor: "#DDF",
        width: deviceWidth - 25,
        height: 80,
        // borderRadius: radius,
        alignItems: 'center',
    },
    imageStyle: {
        height: 70,
        width: 70,
        marginLeft: 25,
        // marginTop: 15,
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: '600',
    },
    categoryStyle: {
        fontSize: 16,
        paddingTop: 2,
        fontWeight: '300',
        color: 'grey'
    },
    infoStyle: {
        marginHorizontal: 20,
        // paddingTop: 30,
        marginVertical: 30,
    }


})

export default UserCard;