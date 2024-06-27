import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ensure to install expo vector icons or modify accordingly if using a different icon library
import { AntDesign } from '@expo/vector-icons';
export default function App() {
  return (
    <View style={styles.container}>
      {/* Header Portion */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="green" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Absences</Text>
      </View>

      {/* Black Border */}
      <View style={styles.blackBorder} />

      {/* Section with Reload Button */}
      <View style={styles.sectionWithReload}>
        <View style={styles.nothingContainer}>
          <Text style={styles.nothing}></Text>
        </View>
        <TouchableOpacity style={styles.reloadButton}>
          <Ionicons name="reload" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Light Gray Border with Week and Date and Buttons */}
      <View style={styles.dateContainer}>
        <TouchableOpacity style={styles.backButton}>
        <AntDesign name="left" size={30} color="white" />
        </TouchableOpacity>
        <View style={styles.dateTextContainer}>
          <Text style={styles.dateText}>Week 22</Text>
          <Text style={styles.dateSubText}>30.02.2022-02.02.2022</Text>
        </View>
        <TouchableOpacity style={styles.forwardButton}>
          <AntDesign name="right" size={30} color="white" />
        </TouchableOpacity>
      </View>

      {/* Light Gray Portion with Text */}
      <View style={styles.lightGrayContainer}>
        <Text style={styles.lightGrayText}>Yearly balance</Text>
        <Text style={styles.lightGrayText}>AVAILABLE BALANCE HOLIDAYS</Text>
        <Text style={styles.lightGrayText}>0 days</Text>
      </View>

      {/* No Data Message */}
      <View style={styles.noDataContainer}>
        <Text style={styles.noDataText}>No data</Text>
      </View>

      {/* Widget with Logo */}
      <TouchableOpacity style={styles.widget}>
        <AntDesign name="pluscircle" size={40} color="#597FAC" />
      </TouchableOpacity>
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
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  backButton: {
    position: 'absolute',
    left: 16,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  blackBorder: {
    width: '100%',
    height: 3,
    backgroundColor: 'black',
  },
  sectionWithReload: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7D7D7D',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  reloadButton: {
    position: 'absolute',
    right: 16,
  },
  nothingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nothing: {
    backgroundColor: '#353A40',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#4A4F55',
  },
  dateTextContainer: {
    flex: 1,
    alignItems: 'center',
  },
  dateText: {
    fontSize: 16,
    color: 'white',
  },
  dateSubText: {
    fontSize: 14,
    color: 'white',
  },
  forwardButton: {
    position: 'absolute',
    right: 16,
  },
  lightGrayContainer: {
    padding: 16,
    backgroundColor: '#7D7D7D',
  },
  lightGrayText: {
    fontSize: 16,
    color: 'white',
  },
  noDataContainer: {
    justifyContent: 'center',
    backgroundColor: 'lightgray',
    padding: 20,
  },
  noDataText: {
    fontSize: 14,
    color: 'black',
  },
  widget: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 25,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});

