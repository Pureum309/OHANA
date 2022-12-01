import React, { useState, useCallback } from "react";
import { View, Image, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';

//for FONT USAGE
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const CustomMarker = ({ item, setSelectedMarkerId, setIsMarkerDetailShow, coordinate }) => {
    const [tracksViewChanges, setTracksViewChanges] = useState(true);

    //For FONT USAGE
    const [fontsLoaded] = useFonts({
        'Nunito': require('../../assets/fonts/Nunito-Bold.ttf')
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
        <Marker
            tracksViewChanges={tracksViewChanges}
            coordinate={coordinate}
            onPress={() => {
                setSelectedMarkerId(item);
                // setIsMarkerDetailShow(true);
            }}
        >
            <View>
                <View style={{
                    height: 30,
                    width: 50,
                    borderWidth: 3,
                    borderColor: "#126B8A",
                    backgroundColor: '#00ADC3',
                    borderRadius: 3,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        fontSize: 20,
                        textAlign: 'center',
                        color: "#DDE2E5",
                        fontFamily: 'Nunito'
                    }}>Blen</Text>
                </View>
                <Image
                    source={require('../../assets/user8.jpeg')}
                    style={{
                        height: 50,
                        width: 50,
                        resizeMode: 'contain',
                        borderRadius: 60,
                        borderWidth: 3,
                        borderColor: "#126B8A"
                    }}
                    onLoadEnd={() => setTracksViewChanges(false)}
                />

            </View>
        </Marker>
    );
};

export default CustomMarker;