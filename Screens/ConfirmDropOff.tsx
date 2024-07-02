import {Ionicons} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header Portion */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Confirm Drop-Off</Text>
        <TouchableOpacity style={styles.musicButton}>
          <Entypo name="cross" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.lastpart}>
        <View style={styles.payment}>
          <Text style={styles.bold}> Payment </Text>
          <Text style={styles.editbold}> Edit </Text>
        </View>

        <View style={styles.paymentTk}>
          <Text style={styles.bold}> Tk. 246.50 </Text>
          <Text> Collect cash from customer </Text>
        </View>
        <TouchableOpacity style={styles.pickupButton}>
          <Text style={styles.pickupButtonText}>Confirm Drop-Off</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#F8F8F8',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1, // Border at the bottom of the header
  },

  musicButton: {
    position: 'absolute',
    right: 16,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    margin: 3,
  },

  lastpart: {
    flex: 1,
    padding: 10,
    margin: 20,
  },

  pickupButton: {
    marginTop: 350,
    backgroundColor: '#140F7E', // Button color
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
    marginHorizontal: 40,
  },

  pickupButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  payment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10, // Space inside the payment section
  },
  bold: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  editbold: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#03198A',
  },
});
