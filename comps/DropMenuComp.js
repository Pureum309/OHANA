import React from "react";
import { View, Text, Button } from 'react-native'

import { category_data, location_data } from './Dropdown/data';
import DropdownComponent from "./Dropdown/Dropdown";
import DTPicker from "./DateTimePicker/index";
import CouterDrop from "./Dropdown/CouterDrop";
import DateTimeDrop from "./Dropdown/DatetimeDrop";
import DropButton from "./Dropdown/DropButton";

var chosenDatetime = "";
var chosenCategory = "";
var chosenLocation = "";
var chosenCounter = "";

export const setChosenDatetime = (date) => {
    chosenDatetime = date;
}
export const setChosenCategory = (category) => {
    chosenCategory = category;
}
export const setChosenLocation = (location) => {
    chosenLocation = location;
}

export const setChosenCounter = (counter) => {
    chosenCounter = counter;
}


const DropMenuComp = (props) => {

    const onClick = () => {
        console.log("btn clicked! date/time:" + chosenDatetime
            + "; category: " + chosenCategory + "; lacation: " + chosenLocation + "; number:" + chosenCounter);
    }

    return (
        <View>
            <DropdownComponent
                label_txt="Category"
                data={category_data}
                icon_name="filter"
                ph_txt="Select Category"
            />
            <DropdownComponent
                label_txt="Location"
                data={location_data}
                icon_name="md-location-outline"
                ph_txt="Pick Location"
            />
            <DTPicker />
            <CouterDrop />

            <Button onPress={onClick} title="test" />
            <DropButton onPress={onClick} />
        </View>
    )
}

export default DropMenuComp