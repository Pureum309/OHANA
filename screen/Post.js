import React from "react";
import { View, Text } from 'react-native'
import DropdownComponent from "../comps/Dropdown/Dropdown";
import PostInput from "../comps/PostTextInput";

import Header from "../comps/Header";

import { category_data, location_data } from '../comps/Dropdown/data';

const Post = (props) => {
    return (
        <View>
            <Text>This is Profile</Text>
            {/* User input field */}
            <PostInput />
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

        </View>
    )
}

export default Post