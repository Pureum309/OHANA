import React from "react";
import { View, Text } from 'react-native'

import Header from "../comps/Header";
import Map from "../comps/Map";

const MapView = (props) => {
    return (
        <View>
            <Text>This is MapView</Text>
            <Map />
        </View>
    )
}

export default MapView