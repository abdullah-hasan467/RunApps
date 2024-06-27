import React from 'react';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import {Header, Icon} from 'react-native-elements';

// Define some mock shifts for demonstration
const shifts = [
  {area: 'Dhanmondi', time: '09:00 AM - 05:00 PM'},
  {area: 'JatraBari', time: '10:00 AM - 06:00 PM'},
  {area: 'Rampura', time: '08:00 AM - 04:00 PM'},
  {area: 'Bashundhura', time: '11:00 AM - 07:00 PM'},
  {area: 'JatraBari', time: '10:00 AM - 06:00 PM'},
  {area: 'Rampura', time: '08:00 AM - 04:00 PM'},
  {area: 'Bashundhura', time: '11:00 AM - 07:00 PM'},
];

export default function SchedulePage({navigation}) {
  // Calculate the total number of shifts
  const totalShifts = shifts.length;

  return (
    <View style={styles.container}>
      {/* Header with menu icon and title */}
      <Header
        containerStyle={styles.headerContainer}
        leftComponent={<Icon name="menu" color="#72C914" />}
        centerComponent={{text: 'Available Shifts', style: styles.headerText}}
        backgroundColor="white"
      />

      {/* Calendar component for selecting dates */}
      <CalendarStrip
        style={styles.calendar}
        calendarColor={'#353A40'}
        calendarHeaderStyle={{color: 'white'}}
        dateNumberStyle={{color: 'white'}}
        dateNameStyle={{color: 'white'}}
        highlightDateNumberStyle={{color: 'yellow'}}
        highlightDateNameStyle={{color: 'yellow'}}
        disabledDateNameStyle={{color: 'grey'}}
        disabledDateNumberStyle={{color: 'grey'}}
      />

      {/* Display total available shifts */}
      <Text style={styles.availableShifts}>
        Total Available Shifts: {totalShifts}
      </Text>

      {/* ScrollView to list all shifts */}
      <ScrollView contentContainerStyle={styles.shiftList}>
        {/* Map through shifts and display each shift */}
        {shifts.map((shift, index) => (
          <View key={index} style={styles.shiftItem}>
            <View style={styles.shiftDetails}>
              <Text style={styles.shiftArea}>{shift.area}</Text>
              <Text style={styles.shiftTime}>{shift.time}</Text>
            </View>
            {/* Button to take the shift */}
            <Button
              title="Take Shift"
              onPress={() => navigation.navigate('SchedulePage')}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

// Styles for SchedulePage component
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    borderBottomWidth: 0,
  },
  headerText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  calendar: {
    height: 150,
    paddingTop: 30,
    paddingBottom: 0,
  },
  availableShifts: {
    fontSize: 18,
    padding: 15,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  shiftList: {
    paddingHorizontal: 10,
  },
  shiftItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  shiftDetails: {
    flexDirection: 'column',
  },
  shiftArea: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  shiftTime: {
    fontSize: 14,
    marginTop: 10,
    color: '#888',
  },
});
