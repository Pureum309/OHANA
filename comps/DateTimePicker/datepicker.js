import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableHighlight, View, Platform, DatePickerIOS } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

import moment from 'moment';
import { setChosenDatetime } from '../DropMenuComp'

const CustomDatePicker = (props) => {
    const { textStyle, defaultDate } = props;
    const [date, setDate] = useState(moment(defaultDate));
    const [show, setShow] = useState(false);
    const dateTimeFormat = "MMMM Do, YYYY hh:mm A";
    const [dateText, setDateText] = useState(moment().format(dateTimeFormat));

    setChosenDatetime(date);

    const onChange = (e, selectedDate) => {
        setDate(moment(selectedDate));
    }

    const onCancelPress = () => {
        setDate(moment(defaultDate));
        setShow(false);
    }

    const onDonePress = () => {
        setDateText(moment(date).format(dateTimeFormat));
        onDateChange(date);
        setShow(false);
        setChosenDatetime(date);
    }

    const onDateChange = (date) => {
        setDate(date);
        // chosenDate = date;
        console.log('selected time is ' + date);
    }

    return (
        <>
            <TouchableHighlight
                activeOpacity={0}
                onPress={() => setShow(true)}
            >
                <View>
                    <Text style={textStyle}>{dateText}</Text>

                    <Modal
                        transparent={true}
                        animationType="slide"
                        visible={show}
                        supportedOrientations={['portrait']}
                        onRequestClose={() => setShow(false)}
                    >
                        <View style={{ flex: 1 }}>
                            <TouchableHighlight
                                style={{
                                    flex: 1,
                                    alignItems: 'flex-end',
                                    flexDirection: 'row'
                                }}
                                activeOpacity={1}
                                visible={show}
                                onPress={() => setShow(false)}
                            >
                                <TouchableHighlight
                                    underlayColor={'#FFFFFF'}
                                    style={{
                                        flex: 1,
                                        borderTopColor: "#E9E9E9",
                                        borderTopWidth: 1,
                                    }}
                                    onPress={() => console.log('datepicker clicked')}
                                >
                                    <View style={{
                                        backgroundColor: 'white',
                                        height: 254,
                                        overflow: 'hidden'
                                    }}>
                                        <View style={{ marginTop: 20 }}>
                                            <DatePickerIOS
                                                // timeZoneOffsetInMinutes={0}
                                                date={new Date(date)}
                                                mode="datetime"
                                                display="spinner"
                                                locale="en-CA"
                                                minimumDate={new Date(moment().subtract(100, 'years').format('yyyy-MM-DD'))}
                                                maximumDate={new Date(moment().add(100, 'years').format('yyyy-MM-DD'))}
                                                // onChange={onChange}
                                                onDateChange={onDateChange}
                                            />
                                        </View>
                                        <TouchableHighlight
                                            underlayColor={'transparent'}
                                            onPress={onCancelPress}
                                            style={[
                                                styles.btnText, styles.btnCancel
                                            ]}
                                        >
                                            <Text>Cancel</Text>
                                        </TouchableHighlight>
                                        <TouchableHighlight
                                            underlayColor={'transparent'}
                                            onPress={onDonePress}
                                            style={[
                                                styles.btnText, styles.btnDone
                                            ]}
                                        >
                                            <Text>Done</Text>
                                        </TouchableHighlight>

                                    </View>
                                </TouchableHighlight>
                            </TouchableHighlight>
                        </View>
                    </Modal>
                </View>
            </TouchableHighlight>
        </>
    )
}

CustomDatePicker.defaultProps = {
    textStyle: {},
    defaultDate: moment(),
    onDateChange: () => { },

}

const styles = StyleSheet.create({
    btnText: {
        position: 'absolute',
        top: 0,
        height: 42,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnCancel: {
        left: 0,
    },
    btnDone: {
        right: 0,
    }
})

export default CustomDatePicker;


// import React, { useState } from "react";
// import { Button, View } from "react-native";
// import DateTimePickerModal from "react-native-modal-datetime-picker";

// const CustomDatePicker = () => {
//     const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

//     const showDatePicker = () => {
//         setDatePickerVisibility(true);
//     };

//     const hideDatePicker = () => {
//         setDatePickerVisibility(false);
//     };

//     const handleConfirm = (date) => {
//         console.warn("A date has been picked: ", date);
//         hideDatePicker();
//     };

//     return (
//         <View>
//             <Button title="Show Date Picker" onPress={showDatePicker} />
//             <DateTimePickerModal
//                 isVisible={isDatePickerVisible}
//                 mode="date"
//                 onConfirm={handleConfirm}
//                 onCancel={hideDatePicker}
//             />
//         </View>
//     );
// };

// export default CustomDatePicker;

// const CustomDatePicker = () => {
//     const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

//     const showDatePicker = () => {
//         setDatePickerVisibility(true);
//     };

//     const hideDatePicker = () => {
//         setDatePickerVisibility(false);
//     };

//     const handleConfirm = (date) => {
//         console.warn("A date has been picked: ", date);
//         hideDatePicker();
//     };

//     return (
//         <View>
//             <Button title="Show Date Picker" onPress={showDatePicker} />
//             <DateTimePickerModal
//                 isVisible={isDatePickerVisible}
//                 mode="date"
//                 display="inline"
//                 onConfirm={handleConfirm}
//                 onCancel={hideDatePicker}
//             />
//         </View>
//     );
// };

// export default CustomDatePicker;

// import * as React from 'react';
// import { Button } from 'react-native-paper';
// import { DatePickerModal } from 'react-native-paper-dates';

// export default function CustomDatePicker() {
//     const [date, setDate] = React.useState < Date | undefined > (undefined);
//     const [open, setOpen] = React.useState(false);

//     const onDismissSingle = React.useCallback(() => {
//         setOpen(false);
//     }, [setOpen]);

//     const onConfirmSingle = React.useCallback(
//         (params) => {
//             setOpen(false);
//             setDate(params.date);
//         },
//         [setOpen, setDate]
//     );

//     return (
//         <>
//             <Button onPress={() => setOpen(true)} uppercase={false} mode="outlined">
//                 Pick single date
//             </Button>
//             <DatePickerModal
//                 locale="en"
//                 mode="single"
//                 visible={open}
//                 onDismiss={onDismissSingle}
//                 date={date}
//                 onConfirm={onConfirmSingle}
//             // validRange={{
//             //   startDate: new Date(2021, 1, 2),  // optional
//             //   endDate: new Date(), // optional
//             //   disabledDates: [new Date()] // optional
//             // }}
//             // onChange={} // same props as onConfirm but triggered without confirmed by user
//             // saveLabel="Save" // optional
//             // saveLabelDisabled={true} // optional, default is false
//             // uppercase={false} // optional, default is true
//             // label="Select date" // optional
//             // animationType="slide" // optional, default is 'slide' on ios/android and 'none' on web
//             // startYear={2000} // optional, default is 1800
//             // endYear={2100} // optional, default is 2200
//             // closeIcon="close" // optional, default is "close"
//             // editIcon="pencil" // optional, default is "pencil"
//             // calendarIcon="calendar" // optional, default is "calendar"
//             />
//         </>
//     );
// }

// import React, { useState } from "react";
// import { Modal, StyleSheet, Text, TouchableHighlight, View, Platform, Button } from "react-native";
// import DateTimePicker from '@react-native-community/datetimepicker';

// const CustomDatePicker = () => {
//     const [date, setDate] = useState(new Date(1598051730000));
//     const [mode, setMode] = useState('date');
//     const [show, setShow] = useState(false);

//     const onChange = (event, selectedDate) => {
//         const currentDate = selectedDate;
//         setShow(false);
//         setDate(currentDate);
//     };

//     const showMode = (currentMode) => {
//         if (Platform.OS === 'android') {
//             setShow(false);
//             // for iOS, add a button that closes the picker
//         }
//         setMode(currentMode);
//     };

//     const showDatepicker = () => {
//         console.log("showDatepicker");
//         showMode('date');
//     };

//     const showTimepicker = () => {
//         console.log("showTimepicker");
//         showMode('time');
//     };

//     return (
//         <View>
//             <Button onPress={showDatepicker} title="Show date picker!" />
//             <Button onPress={showTimepicker} title="Show time picker!" />
//             <Text>selected: {date.toLocaleString()}</Text>
//             {show && (
//                 <DateTimePicker
//                     testID="dateTimePicker"
//                     value={date}
//                     mode={mode}
//                     is24Hour={true}
//                     onChange={onChange}
//                 />
//             )}
//         </View>
//     );
// };

// export default CustomDatePicker;

// import React, { useState } from 'react';
// import { DatePickerIOS, View, StyleSheet } from 'react-native';

// const CustomDatePicker = () => {

//     const [chosenDate, setChosenDate] = useState(new Date());

//     return (
//         <View style={styles.container}>
//             <DatePickerIOS
//                 date={chosenDate}
//                 onDateChange={setChosenDate}
//             />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//     },
// });

// export default CustomDatePicker;

// import React, { useState } from "react";
// import { Button, View } from "react-native";
// import DateTimePicker from '@react-native-community/datetimepicker';

// const CustomDatePicker = () => {
//     return (
//         <View>
//             <RNDateTimePicker
//                 value={new Date()}
//                 display="inline"
//             />
//         </View>
//     );
// };

// export default CustomDatePicker;


// import React, { useState } from 'react';
// import { DatePickerIOS, View, StyleSheet } from 'react-native';

// const CustomDatePicker = () => {
//     const [chosenDate, setChosenDate] = useState(new Date());

//     return (
//         <View style={styles.container}>
//             <DatePickerIOS
//                 date={chosenDate}
//                 onDateChange={setChosenDate}
//             />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//     },
// });

// export default CustomDatePicker;