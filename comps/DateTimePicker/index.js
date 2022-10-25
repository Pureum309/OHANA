import React from "react";
import { Text, View, StyleSheet } from 'react-native';

import CustomDatePicker from './datepicker';
import moment from "moment";

const DTPicker = ({ chosenDatetime }) => {
    return (
        <View style={styles.container}>
            <View style={{ marginHorizontal: 15 }}>
                {/*<Text>Add Date/Time</Text>*/}
                <CustomDatePicker
                    textStyle={{
                        paddingVertical: 16,
                        paddingHorizontal: 10,
                        borderColor: '#0A0908',
                        borderWidth: 1,
                        borderRadius: 8,
                    }}
                    defaultDate={moment()}
                    onDateChnage={(value) => console.log('Date changed: ' + value)}
                />
                {/* <CustomDatePicker /> */}
            </View>
        </View>
    )
}

export default DTPicker;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'white',
    },
})