import DateTimePicker from '@react-native-community/datetimepicker';
import React, {useEffect, useState} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const App = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const onChange = (selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode: any) => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.userName}>Mehafuz Mannan</Text>
        <Text style={styles.statusText}>Not Working</Text>
      </View>
      <Text style={styles.upcomingShift}>Upcoming Shift</Text>

      <View style={styles.shiftContainer}>
        <View style={styles.shiftDetails}>
          <View style={styles.shiftDate}>
            <Text style={styles.date}>
              {date.toLocaleString('default', {month: 'short'})}
            </Text>
            <Text style={styles.dateNumber}>{date.getDate()}</Text>
            <Text style={styles.today}>Today</Text>
          </View>
          <View style={styles.shiftInfo}>
            <Text style={styles.shiftTime}>22.45 - 12.00 (56 mins)</Text>
            <Text style={styles.shiftLocation}>Peswar</Text>
          </View>
        </View>
        <Text style={styles.areYouReady}>Are you ready?</Text>
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText}>Start Shift Now</Text>
        </TouchableOpacity>
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          //mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAECEE',
  },
  header: {
    backgroundColor: '#fff',
    marginBottom: 20,
    paddingVertical: 20,
    width: '100%',
    borderRadius: 10,
    //alignItems: "flex-start"
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 20,
    marginTop: 40,
  },
  statusText: {
    color: '#999',
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: '#f0f0f0',
    padding: 6,
    borderRadius: 10,
    marginBottom: 1,
    marginRight: 280,
  },
  upcomingShift: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 20,
  },
  shiftContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
  },

  shiftDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shiftDate: {
    alignItems: 'center',
    marginRight: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
  },
  date: {
    fontSize: 16,
    color: '#007bff',
  },
  dateNumber: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  today: {
    fontSize: 14,
    color: 'black',
  },
  shiftInfo: {
    flex: 1,
  },
  shiftTime: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  shiftLocation: {
    fontSize: 16,
    marginVertical: 5,
  },
  areYouReady: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 16,
    marginVertical: 10,
  },
  startButton: {
    backgroundColor: '#03198A',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;
