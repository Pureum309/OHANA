import { Searchbar } from 'react-native-paper';
import React, { useState } from "react";

export default function Search() {
    const [input, setInput] = useState("");
    return (
        <View style={styles.container}>
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