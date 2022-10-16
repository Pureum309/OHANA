import { Tab, TabBar } from "@ui-kitten/components";

export default function UserLower() {
    return (
        <TabBar
            selectedIndex={selectedIndex}
            onSelect={index => setSelectedIndex(index)}>
            <Tab title='USERS' />
            <Tab title='ORDERS' />
            <Tab title='TRANSACTIONS' />
        </TabBar>
    );
}