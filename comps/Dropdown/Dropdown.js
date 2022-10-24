import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

import IonicIcon from 'react-native-vector-icons/Ionicons'

import { setChosenCategory, setChosenLocation } from '../DropMenuComp';
//for FONT USAGE
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const DropdownComponent = ({
    data,
    label_txt = "Label",
    icon_name = "heart",
    ph_txt = "Test Select",

}) => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: '#00A0C3' }]}>
                    {label_txt}
                </Text>
            );
        }
        return null;
    };

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

    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            {renderLabel()}
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: '#00A0C3' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                fontFamily="Nunito"
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? `${ph_txt}` : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);

                    if (label_txt == "Category")
                        setChosenCategory(item.label);
                    else if (label_txt == "Location")
                        setChosenLocation(item.label);
                }}
                renderLeftIcon={() => (
                    <IonicIcon
                        style={styles.icon}
                        color={isFocus ? '#00A0C3' : '#0A0908'}
                        name={icon_name}
                        size={20}
                    />
                )}
            />

        </View>
    );
};

export default DropdownComponent;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 15,
        paddingRight: 15,
        paddingLeft: 15,
    },
    dropdown: {
        height: 50,
        borderColor: '#0A0908',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
        color: '#00A0C3',
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});