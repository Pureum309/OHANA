import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import introbackground from '../assets/introbackground.png'

//Needed for Back button
import CustomButton from "./Login/CustomButton";
import IonicIcon from 'react-native-vector-icons/Ionicons';

import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen');

export const COLORS = {
    primary: '#f52d56',
    title: '#072F4A',
    white: '#FFFFFF',
    lightGrey: '#D3D6D6',
    grey: '#C1C0C9',
    blue: '#087BB6',
    yellow: '#F4D03F',
};

export const SIZES = {
    h1: 22,
    h2: 20,
    h3: 18,
    h4: 16,
    h5: 14,
    h6: 12,

    width,
    height,
}

const slides = [
    {
        id: '1',
        image: require('../assets/tutorial1.png'),
        title: 'Build a Community',
        subtitle: 'Add friends, family, and neighbours to your network with ease by sending them a link.',
    },
    {
        id: '2',
        image: require('../assets/tutorial2.png'),
        title: 'Plan Your Daily Tasks and Errands',
        subtitle: 'Add tasks and errands to your calendar by posting them to your profile.',
    },
    {
        id: '3',
        image: require('../assets/tutorial3.png'),
        title: 'Get Help With Your Tasks',
        subtitle: 'Your network can accept your tasks and help you get the difficult ones done easier.',
    },
]

export default function TutorialComp({ navigation }) {

    //Needed for Back button
    const handleBack = () => {
        navigation.navigate('Intro')
    }

    const [showTutorialPage, setShowTutorialPage] = useState(false);

    const buttonLabel = (label) => {
        return (
            <View style={{
                padding: 12
            }}>
                <Text style={{
                    color: COLORS.title,
                    fontWeight: '600',
                    fontSize: SIZES.h4,
                }}>
                    {label}
                </Text>
            </View>
        )
    }

    if (!showTutorialPage) {
        return (
            <ImageBackground
                source={introbackground}
                style={styles.bgimage}
                resizeMode='cover'
            >
                <AppIntroSlider
                    data={slides}
                    renderItem={({ item }) => {
                        return (
                            <View style={{
                                flex: 1,
                                alignItems: 'center',
                                padding: 15,
                                paddingTop: 100,
                            }}>

                                <View style={styles.back_button}>
                                    <IonicIcon name="arrow-back-outline" size={30} color="#00ADC3"></IonicIcon>
                                    <CustomButton text="Go Back" onPress={handleBack} type="QUATERNARY" />
                                </View>
                                <Image
                                    source={item.image}
                                    style={{
                                        width: SIZES.width - 80,
                                        height: 400,
                                    }}
                                    resizeMode="contain"
                                />
                                <Text style={{
                                    fontWeight: 'bold',
                                    color: COLORS.title,
                                    fontSize: SIZES.h1,
                                }}>
                                    {item.title}
                                </Text>
                                <Text style={{
                                    textAlign: 'center',
                                    paddingTop: 5,
                                    color: COLORS.title
                                }}>
                                    {item.subtitle}
                                </Text>

                            </View>
                        )
                    }}
                    activeDotStyle={{
                        backgroundColor: COLORS.primary,
                        width: 30,
                    }}
                    showSkipButton
                    renderNextButton={() => buttonLabel("Next")}
                    renderSkipButton={() => buttonLabel("Skip")}
                    renderDoneButton={() => buttonLabel("Done")}
                    onDone={() => {
                        setShowTutorialPage(true);
                    }}
                />
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    back_button: {
        flexDirection: 'row',
        alignSelf: "flex-start",
        margin: 5,
    },
    bgimage: {
        flex: 1,
    },
});
