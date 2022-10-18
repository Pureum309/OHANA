import React from "react";
import { View, Text } from 'react-native'
import DropdownComponent from "../comps/Dropdown/Dropdown";

import Header from "../comps/Header";

import { category_data, location_data } from '../comps/Dropdown/data';

const Post = (props) => {
    return (
        <View>
            <Text>This is Profile</Text>
            <DropdownComponent label_txt="Category" data={category_data} />
            <DropdownComponent label_txt="Location" data={location_data} />

        </View>
    )
}

export default Post