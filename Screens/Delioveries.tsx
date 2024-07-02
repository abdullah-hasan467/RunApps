import {Ionicons} from '@expo/vector-icons'; // Ensure to install expo vector icons or modify accordingly if using a different icon library
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header Portion */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="menu" size={35} color="#72C914" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Deliveries</Text>
      </View>
      <View style={styles.headerLow}>
        <View style={styles.textContainer}>
          <Text style={styles.current}>You have no pending deliveries</Text>
          <Text style={styles.balance}>
            Please make sure to move towards the current of your zone
          </Text>
        </View>
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
  backButton: {
    position: 'absolute',
    left: 16,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    margin: 3,
  },
  headerLow: {
    flex: 1, // Ensure the container takes available space
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
    padding: 20,
    margin: 10,
  },
  textContainer: {
    alignItems: 'center', // Center align the text horizontally
  },
  current: {
    fontSize: 16,
    color: '#333', // Slightly darker text color
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'center', // Center text
  },
  balance: {
    fontSize: 12,
    color: 'black', // Color for the balance text
    textAlign: 'center', // Center text
  },
});
