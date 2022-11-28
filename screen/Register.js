import React, { useEffect, useState, useCallback } from 'react';
import { Text, View, Button, Image, TextInput, SafeAreaView, StyleSheet, ImageBackground, Dimensions } from 'react-native';

//for FONT USAGE
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../firebase/firebase';
import { collection, addDoc, setDoc, getDocs, getFirestore, getDoc, doc } from "firebase/firestore";

import CustomButton from '../comps/Login/CustomButton';
import RadioButton from '../comps/RadioButton';

import IonicIcon from 'react-native-vector-icons/Ionicons';

export default function Register({ navigation }) {
    const bgimage = require('../assets/introbackground.png')
    const logo = require('../assets/logoicon.png')
    const handleBack = () => {
        navigation.navigate('Login')
    }

    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [bio, setBio] = useState("");
    const [loc, setLoc] = useState("");
    const [em, setEmail] = useState("");
    const [ps, setPS] = useState("");
    const [rol, setRol] = useState(1);

    const [option, setOption] = useState(null);

    const selectRole = (value) => {
        setOption(value);

        if (value == "User") {
            setRol(1);
        } else if (value == "Care Giver") {
            setRol(2);
        }
    }

    const data = [
        { value: 'User' },
        { value: 'Care Giver' }
    ];

    const AddUser = async () => {

        if (first && last && loc && em && ps && bio) {
            console.log(first + last + loc + em + ps + bio);
            const user = await createUserWithEmailAndPassword(auth, em, ps);
            const docRef = doc(db, 'users', user.user.uid);
            await setDoc(docRef, {
                first: first,
                last: last,
                location: loc,
                bio: bio,
                role: rol
            });
            navigation.navigate('Login')

        } else {
            alert('All fields required!')
        }
    }

    //For FONT USAGE
    const [fontsLoaded] = useFonts({
        'Rubik': require('../assets/fonts/Rubik-Bold.ttf'),
        'Nunito': require('../assets/fonts/Nunito-Regular.ttf'),
        'Nunito-Bold': require('../assets/fonts/Nunito-Bold.ttf')
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    })

    if (!fontsLoaded) {
        return null;
    }
    //until here FONT USAGE

    return (
        <ImageBackground source={bgimage} resizeMode='cover' style={styles.bgImg}>
            <View style={styles.back_button}>
                <IonicIcon name="arrow-back-outline" size={30} color="#00ADC3"></IonicIcon>
                <CustomButton text="Go Back" onPress={handleBack} type="QUATERNARY" />
            </View>
            <Image
                source={logo}
                style={styles.logoImg}
                resizeMode="contain"
            />
            <SafeAreaView>
                <View style={styles.container}>
                    <View onLayout={onLayoutRootView}>
                        <Text style={{ fontFamily: 'Rubik', fontSize: 50, textAlign: 'center', paddingBottom: 30 }}>Sign Up </Text>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.hText}>Choose your position: </Text>
                        </View>
                        <View style={styles.radioCont}>
                            <RadioButton data={data} onSelect={(value) => selectRole(value)} />
                        </View>
                        {/* <View style={{ marginLeft: 10 }}>
                            <Text style={styles.hText}> Your option: {option}</Text>
                        </View> */}
                    </View>
                    <View style={styles.textCont}>
                        <View>
                            <Text style={styles.inText}>First name : </Text>
                            <TextInput
                                value={first}
                                placeholder="First Name"
                                onChangeText={(txt) => setFirst(txt)}
                                style={styles.textInput}
                            />
                        </View>
                        <View>
                            <Text style={styles.inText}>Last name :</Text>
                            <TextInput
                                value={last}
                                placeholder="Last Name"
                                onChangeText={(txt) => setLast(txt)}
                                style={styles.textInput}
                            />
                        </View>
                        <View>
                            <Text style={styles.inText}>Address :</Text>
                            <TextInput
                                value={loc}
                                placeholder="Location"
                                onChangeText={(txt) => setLoc(txt)}
                                style={styles.textInput}
                            />
                        </View>
                        <View>
                            <Text style={styles.inText}>Email :</Text>
                            <TextInput value={em}
                                placeholder="Email"
                                autoCapitalize="none"
                                onChangeText={(txt) => setEmail(txt)}
                                style={styles.textInput}
                            />
                        </View>
                        <View>
                            <Text style={styles.inText}>Password :</Text>
                            <TextInput value={ps}
                                placeholder="Password"
                                autoCapitalize="none"
                                secureTextEntry={true}
                                onChangeText={(txt) => setPS(txt)}
                                style={styles.textInput}
                            />
                        </View>
                        <View>
                            <Text style={styles.inText}>Personal Bio :</Text>
                            <TextInput
                                value={bio}
                                placeholder="Bio"
                                onChangeText={(txt) => setBio(txt)}
                                style={styles.textInput}
                            />
                        </View>
                    </View>
                    <View style={styles.buttonStyle}>
                        <CustomButton text="Sign Up" onPress={() => AddUser()} />
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        paddingTop: '10%',
    },
    textCont: {
        alignItems: 'center',
        paddingVertical: 10,
    },
    hText: {
        fontFamily: 'Nunito',
        fontSize: 18,
    },
    inText: {
        fontFamily: 'Nunito',
        color: 'grey'
    },
    textInput: {
        fontFamily: 'Nunito',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        width: 350,
    },
    radioCont: {
        alignItems: 'center'
    },
    back_button: {
        flexDirection: 'row',
        position: 'absolute',
        top: "4.5%",
        left: "3%",
        alignItems: 'center',
        paddingTop: 10,
    },
    buttonStyle: {
        alignItems: 'center',
    },

    bgImg: {
        flex: 1,
        justifyContent: 'center',
    },
    logoImg: {
        width: deviceWidth * 0.8,
        // width: deviceWidth * 0.4,

        position: 'absolute',
        zIndex: 0,
        opacity: 0.08,

        // top: deviceHeight * -0.15,
        // left: deviceWidth * 0.30,

        left: deviceWidth * 0.1,
        top: deviceHeight * 0.26,
    },

});