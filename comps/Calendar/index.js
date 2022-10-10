import React, { useState, } from 'react';
import { StyleSheet, Text, View, Button, Platform, TextInput } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import * as Calendar from "expo-calendar";
import { useEffect } from 'react';

export default function OhanaCalendar() {
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [friendNameText, setFriendNameText] = useState("");
    const startDate = selectedStartDate
      ? selectedStartDate.format('YYYY-MM-DD').toString()
      : '';
  
      useEffect(() => {
        (async () => {
          const { status } = await Calendar.requestCalendarPermissionsAsync();
          if (status === 'granted') {
            const calendars = await Calendar.getCalendarsAsync(
              Calendar.EntityTypes.EVENT
            );
            console.log('Here are all your calendars:');
            console.log({ calendars });
          }
        })();
      }, []);

      const addNewEvent = async () => {
        try {
          const calendarId = await createCalendar();
          
          const res = await Calendar.createEventAsync(calendarId, {
            endDate: getAppointementDate(startDate),
            startDate: getAppointementDate(startDate),
            title: 'Happy Birthday buddy ' + friendNameText,
          });
          Alert.alert('Event Created!');
        } catch (e) {
          console.log(e);
        }
      }

    return (
      <View style={styles.container}>
        <TextInput
        onChangeText={setFriendNameText}
        value={friendNameText}
        placeholder="Enter the name of your friend"
        style={styles.input}
      />
        <CalendarPicker onDateChange={setSelectedStartDate} />
        <Text style={styles.dateText}>Birthday: {startDate}</Text>
        <Button title={"Add to calendar"} onPress={addNewEvent} />
      </View>
    );
}

async function getDefaultCalendarSource() {
    const calendars = await Calendar.getCalendarsAsync(
      Calendar.EntityTypes.EVENT
    );
    const defaultCalendars = calendars.filter(
      (each) => each.source.name === 'Default'
    );
    return defaultCalendars.length
      ? defaultCalendars[0].source
      : calendars[0].source;
  }
  
  async function createCalendar() {
    const defaultCalendarSource =
      Platform.OS === 'ios'
        ? await getDefaultCalendarSource()
        : { isLocalAccount: true, name: 'Expo Calendar' };
    const newCalendarID = await Calendar.createCalendarAsync({
      title: 'Expo Calendar',
      color: 'blue',
      entityType: Calendar.EntityTypes.EVENT,
      sourceId: defaultCalendarSource.id,
      source: defaultCalendarSource,
      name: 'internalCalendarName',
      ownerAccount: 'personal',
      accessLevel: Calendar.CalendarAccessLevel.OWNER,
    });
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    marginTop: 50,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  dateText: {
    margin: 16,
  },
  
});