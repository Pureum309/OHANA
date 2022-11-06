import React from "react";
import { useState } from "react";
import { Text, Button, View, StyleSheet } from 'react-native';

function ProfileLowerTabs() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <View style={styles.container}>
            <View style={styles.blocTabs}>
                <Button
                    title="Tab 1"
                    style={styles.tabs}
                    onClick={() => toggleTab(1)} />

                <Button
                    title="Tab 2"
                    style={styles.activeTabs}
                    // className={toggleState === 2 ? "tabs activeTabs" : "tabs"}
                    onClick={() => toggleTab(2)} />

                <Button
                    title="Tab 3"
                    style={styles.tabs}
                    onClick={() => toggleTab(3)} />
            </View>

            <View style={styles.contentTabs}>
                <View
                    style={styles.activeContent}>
                    <Text>
                        Tab 1 user information
                    </Text>
                </View>

                <View
                // className={toggleState === 2 ? "content  activeContent" : "content"}
                >
                    <Text>
                        Tab 2 user information
                    </Text>
                </View>

                <View
                // className={toggleState === 3 ? "content  activeContent" : "content"}
                >
                    <Text>
                        Tab 3 user information
                    </Text>
                </View>
            </View>
        </View>
    );
}

export default ProfileLowerTabs;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        width: 500,
        height: 300,
        wordBreak: "break-all",
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
    },
    blocTabs: {
        display: "flex",
    },
    tabs: {
        padding: 15,
        textAlign: "center",
        width: "50%",
        boxSizing: "content-box",
        position: "relative",
    },
    activeTabs: {
        background: "white",
    },
    button: {
        border: "none",
    },
    contentTabs: {
        flexGrow: 1,
    },
    content: {
        background: "white",
        padding: 20,
        width: "100%",
        height: "100%",
        display: "none",
    },
    activeContent: {
        display: "block",
    },
});