import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import logo2 from '../../assets/logo2.png'
import CustomInput from '../../comps/Login/CustomInput';
import CustomButton from '../../comps/Login/CustomButton';
import { useNavigation } from '@react-navigation/native';

const isValidObjField = (obj) => {
    return Object.values(obj).every(value => value.trim())
} 

const updateError = (error, stateUpdater) => {
    stateUpdater(error);
    setTimeout(()=>{
        stateUpdater('')
    }, 2500);
}

const isValidEmail = (value) => {
    const regx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return regx.test(value);
} 

export default function LoginScreen({}){
    //keeps user from scrolling past screen limits
    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const [userInfo, setUserInfo] = useState({
        //Userinfo object with empty email and password strings
        email: '',
        password: ''
    })

    const [error, setError] = useState('');

    const {email, password} = userInfo;

    const handleOnChangeText = (value, fieldName) => {
        setUserInfo({ ...userInfo, [fieldName]: value});
    }
    
    const isValidForm = () => {
        //Only accept if all fields have a value
        if(!isValidObjField(userInfo)) 
            return updateError('All fields required!', setError);
        // Only a valid email id is allowed
        if(!isValidEmail(email)) 
            return updateError('Invalid email!', setError);
        //password must have 8 or more characters
        if(!password.trim() || password.length < 8) 
            return updateError('Password is less than 8 characters!', setError);
        
            return true;
    }

    const submitForm = () => {
        if(isValidForm()){
            // submit form
            console.log(userInfo)
            console.log('Entered information is valid')
        }
        if(userInfo.email == "zo_adisa123@gmail.com" && userInfo.password == "password"){
            console.log('Welcome Zo Adisa');
            setUserInfo('');
            navigation.navigate('Home');
            
        }
    }

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <Image 
            source={logo2} 
            style={[styles.logo, {height: height * 0.3}]} 
            resizeMode="contain"
            />

            <Text style={styles.text}>LOG IN</Text>

            {error ? 
                <Text style={{color: 'red', fontSize: 16, testAlign: 'center' }}>
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

            <CustomButton text="Forgot Password?"  type="TERTIARY"/>
        
            <CustomButton text="LOG IN" onPress={submitForm}/>
            
            <Text>Or log In With</Text>

            <CustomButton text="Continue with Google"  type="SECONDARY"/>
            <CustomButton text="Continue with Facebook"  type="SECONDARY"/>
             
            <CustomButton text="New to OHANA? Create an Account" type="TERTIARY"/>   
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 20
    },
    logo: {
        width: '50%',
        maxWidth: 300,
        maxHeight: 200
    },
    text: {
        fontSize: 20,
        paddingBottom: 15
    }
  });