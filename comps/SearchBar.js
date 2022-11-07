import { Searchbar } from 'react-native-paper';
import React, { useState } from "react";
import { View, StatusBar } from 'react-native'

export default function Search() {
    const [input, setInput] = useState("");
    return (
        <View>
            <Searchbar
                placeholder="Search"
                onChangeText={(text) => {
                    setInput(text);
                }}
                value={input}
            />
            <StatusBar style="auto" />
        </View>
    );
}