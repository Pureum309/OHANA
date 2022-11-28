import React, { useState, useCallback } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ImageBackground, Dimensions } from 'react-native';
import logo2 from '../../assets/logo2.png';
import CustomInput from '../../comps/Login/CustomInput';
import introbackground from '../../assets/introbackground.png'
//Needed for Back button
import CustomButton from '../../comps/Login/CustomButton';
import IonicIcon from 'react-native-vector-icons/Ionicons';
//for FONT USAGE
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

//DATABASE for FIRESTORE AND AUTH
import { auth, db } from '../../firebase/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

export var loginUser;
export var loginUserRole;

const isValidObjField = (obj) => {
    return Object.values(obj).every(value => value.trim())
}

const updateError = (error, stateUpdater) => {
    stateUpdater(error);
    setTimeout(() => {
        stateUpdater('')
    }, 2500);
}

const isValidEmail = (value) => {
    const regx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return regx.test(value);
}

export default function LoginScreen({ navigation }) {
    const { height } = useWindowDimensions();
    //Needed for Back button
    // const navigation = useNavigation();

    const [userInfo, setUserInfo] = useState({
        //Userinfo object with empty email and password strings
        email: '',
        password: ''
    })

    const [error, setError] = useState('');

    const { email, password } = userInfo;

    const handleOnChangeText = (value, fieldName) => {
        setUserInfo({ ...userInfo, [fieldName]: value });
    }

    const isValidForm = () => {
        //Only accept if all fields have a value
        if (!isValidObjField(userInfo))
            return updateError('All fields required!', setError);
        // Only a valid email id is allowed
        if (!isValidEmail(email))
            return updateError('Invalid email!', setError);
        //password must have 8 or more characters
        if (!password.trim() || password.length < 6)
            return updateError('Password is less than 8 characters!', setError);

        return true;
    }

    const submitForm = async () => {
        if (isValidForm()) {
            // submit form
            console.log(userInfo);
            console.log('Entered information is valid');

            const user = await signInWithEmailAndPassword(auth, userInfo.email, userInfo.password);
            loginUser = user;

            /* To add a sub-collection to a user. */
            // let uid = "QybGzVthlvYghF6waWpyh4aePWW2";
            // let userDocSnap = await getDoc(doc(db, 'users', uid));
            // await setDoc(doc(db, "users", user.user.uid, "relationships", uid), { ...docSnap.data(), relationship: "CO-WORKER" });

            // uid = "cUHRWgwFQJZbrfB6oY4EGEiWYbB3";
            // userDocSnap = await getDoc(doc(db, 'users', uid));
            // await setDoc(doc(db, "users", user.user.uid, "relationships", uid), { ...docSnap.data(), relationship: "CAREGIVER" });

            // uid = "hH16a6Z7bgPwiNnOFvieAbKcYOm2";
            // userDocSnap = await getDoc(doc(db, 'users', uid));
            // await setDoc(doc(db, "users", user.user.uid, "relationships", uid), { ...docSnap.data(), relationship: "FAMILY" });

            // uid = "q28volkElHcfdxD0zYevmeJpDZC3";
            // userDocSnap = await getDoc(doc(db, 'users', uid));
            // await setDoc(doc(db, "users", user.user.uid, "relationships", uid), { ...docSnap.data(), relationship: "CO-WORKER" });

            // uid = "jlkANgtZdQOoSCwKEfq4b74MuKv1";
            // userDocSnap = await getDoc(doc(db, 'users', uid));
            // await setDoc(doc(db, "users", user.user.uid, "relationships", uid), { ...docSnap.data(), relationship: "FRIEND" });

            // uid = "eMSSquaNvLdumvfNHz7iZqjUSbs2";
            // userDocSnap = await getDoc(doc(db, 'users', uid));
            // await setDoc(doc(db, "users", user.user.uid, "relationships", uid), { ...docSnap.data(), relationship: "NEIGHBOUR" });

            const docRef = doc(db, 'users', user.user.uid);
            const docSnap = await getDoc(docRef);
            const data = docSnap.data();
            loginUserRole = data.role;
            if (data.role == 1) {
                navigation.navigate('Main');
            } else if (data.role == 2) {
                navigation.navigate('CaregiverMain');
            }
        }
        // {
        //     loginUsers.map(user => {
        //         if (user.id == userInfo.email && user.password == userInfo.password) {
        //             console.log('Welcome Zo Adisa');
        //             setUserInfo('');
        //             if (user.role == 1) {
        //                 // Go to screen for users.
        //                 navigation.navigate('Main');
        //             }
        //             else if (user.role == 2) {
        //                 // Go to screen for caregivers.
        //                 navigation.navigate('CaregiverMain');
        //             }

        //             return;
        //         }
        //     })
        // }
        // if (userInfo.email == "test@gmail.com" && userInfo.password == "password") {
        //     console.log('Welcome Zo Adisa');
        //     setUserInfo('');
        //     navigation.navigate('Main');
        // }
    }

    //Needed for Back button
    const handleBack = () => {
        console.log("test")
        navigation.navigate('Intro')
    }
    /////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////Firebase User sign up////////////////////////////////
    const handleSignUP = async () => {
        navigation.navigate('Register')
        //Press write info on firebase
        // const user = await createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password);
        // console.log(user.user.uid);

        /* When pass and write the users add below */
        // const docRef = doc(db, 'users', user.user.uid);
        // await setDoc(docRef, { first: "Sarah", last: "Sun", location: "New West", bio: "", role: 1 });
    }

    ////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////

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
    //until here FONT USAGE

    return (
        <ImageBackground source={introbackground} style={styles.bgImg} resizeMode='cover' onLayout={onLayoutRootView}>
            <View style={styles.container}>
                <View style={styles.back_button}>
                    <IonicIcon name="arrow-back-outline" size={30} color="#00ADC3" />
                    <CustomButton text="Go Back" onPress={handleBack} type="QUATERNARY" />
                </View>
                <Image
                    source={logo2}
                    style={styles.logoImg}
                    resizeMode="contain"
                />

                <Text style={styles.login_text}>LOG IN</Text>

                {error ?
                    <Text style={{ color: 'red', fontSize: 16, testAlign: 'center', fontFamily: 'Nunito' }}>
                        {error}
                    </Text>
                    : null}

                <CustomInput
                    placeholder="Enter your email here..."
                    autoCapitalize='none'
                    value={email}
                    onChangeText={(value) => handleOnChangeText(value, 'email')}
                />

                <CustomInput
                    placeholder="Enter your password here..." secureTextEntry={true}
                    autoCapitalize='none'
                    value={password}
                    onChangeText={(value) => handleOnChangeText(value, 'password')}
                />

                <CustomButton text="Forgot Password?" type="TERTIARY" />

                <CustomButton text="LOG IN" onPress={submitForm} />
                <CustomButton text="New to OHANA? Create an Account" onPress={handleSignUP} />

                <Text style={{ fontFamily: 'Nunito' }}>Or log In With</Text>

                <CustomButton text="Continue with Google" type="SECONDARY" />
                <CustomButton text="Continue with Facebook" type="SECONDARY" />

            </View>
        </ImageBackground>
    )
}

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    // image: {
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     padding: 10
    // },
    back_button: {
        flexDirection: 'row',
        position: 'absolute',
        top: "4.5%",
        left: "3%",
        alignItems: 'center',
        paddingTop: 10,
    },
    // logo: {
    //     width: '50%',
    //     maxWidth: 300,
    //     maxHeight: 200
    // },
    login_text: {
        fontSize: 20,
        fontFamily: 'Nunito',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'center',
        paddingTop: 40,
    },
    bgImg: {
        flex: 1,
        justifyContent: 'center',
        height: deviceHeight
    },
    logoImg: {
        width: deviceWidth * 0.5,
        height: deviceHeight * 0.3,
        resizeMode: 'center'
    },
});
