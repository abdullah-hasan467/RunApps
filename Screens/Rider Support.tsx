import {Ionicons} from '@expo/vector-icons'; // Ensure to install expo vector icons or modify accordingly if using a different icon library
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header Portion */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="close" size={35} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Rider Support</Text>
      </View>

      <View style={styles.greenline}>
        <Ionicons name="left" size={16} color="white" style={styles.left} />
      </View>
      <View style={styles.news}>
        <Text>খবর</Text>
      </View>

      {/* Black Border */}

      {/* Horizontal Flexbox Container 1 */}
      <View style={styles.horizontalFlexbox}>
        <View style={styles.flexItem}>
          <Text style={styles.flexItemValuegreen}>Tutorials</Text>
          <Text style={styles.flexItemSubtitle}>
            Recruitment tutorials.....
          </Text>
          <View style={styles.detailsContainer}></View>
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
    borderBottomWidth: 1,
    backgroundColor: '#353942',
  },
  backButton: {
    position: 'absolute',
    left: 16,
  },
  left: {
    margin: 20,
  },
  news: {
    padding: 20,
    margin: 10,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
  greenline: {
    width: '100%',
    height: 50,
    backgroundColor: '#72C914',
  },
  horizontalFlexbox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 16,
  },
  flexItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    padding: 20,
    backgroundColor: '#72C914',
    borderRadius: 8,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Elevation for Android
    elevation: 5,
  },

  flexItemValuegreen: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
    color: 'white',
    marginTop: 20,
  },
  flexItemSubtitle: {
    fontSize: 14,
    color: 'white',
    marginBottom: 8,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
