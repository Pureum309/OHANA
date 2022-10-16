import React from "react";
import { Tab, TabBar } from "@ui-kitten/components";

export default function UserLower() {

    //const [selectedIndex, setSelectedIndex] = React.useState(0);
    // selectedIndex={selectedIndex}
    //         onSelect={index => setSelectedIndex(index)}

    return (
        <TabBar>
            <Tab title='USERS' />
            <Tab title='ORDERS' />
        </TabBar>
    );
}