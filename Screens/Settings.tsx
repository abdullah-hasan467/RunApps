import {Ionicons} from '@expo/vector-icons'; // Ensure to install expo vector icons or modify accordingly if using a different icon library
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Switch} from 'react-native';

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      {/* Header Portion */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={35} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Settings</Text>
      </View>

      <View style={styles.items}>
        <Text style={styles.header2}>Your preferences</Text>
        <View>
          <Text style={styles.header3}>Time</Text>
          <Text style={styles.header6}>Clock</Text>
        </View>
      </View>

      <View style={styles.header4}>
        <Text style={styles.header3}>Preferred Chat Language</Text>
        <Text style={styles.header6}>Bangla</Text>
      </View>

      <View style={styles.itemsRow}>
        <Text style={styles.header2}>Map preferences</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#72C914' : 'lightblue'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={styles.items4}>
        <View>
          <Text style={styles.header3}>Enable Map</Text>
          <Text style={styles.header6}>
            Offline mode is not configured. Additional data usuage will occur
          </Text>
        </View>
      </View>
      <View style={styles.header4}>
        <Text style={styles.header3}>Mapbox Metrics</Text>
        <Text style={styles.header6}>
          Enabling Mapbox Metrics will allow rider app to send anonymous
          location info to Mapbox and will be used to improve map and routing
          information
        </Text>
        <View>
          <Text style={styles.header5}>Heat Map</Text>
        </View>
      </View>

      <View style={styles.items}>
        <Text style={styles.header2}>Miscellaneous</Text>
        <View>
          <Text style={styles.header3}>Troubleshoot notification</Text>
        </View>
      </View>
      <View style={styles.header4}>
        <Text style={styles.header3}>System Settings</Text>
        <Text style={styles.header6}>
          Rider App settings for storage, notification, and data usage.
        </Text>
        <View>
          <Text style={styles.header5}>Version</Text>
          <Text style={styles.header6}>v4.2221.1</Text>
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
    backgroundColor: '#72C914',
  },
  backButton: {
    position: 'absolute',
    left: 16,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    margin: 3,
  },
  items: {
    padding: 20,
    marginLeft: 30,
  },
  itemsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginLeft: 30,
  },
  header2: {
    fontSize: 20,
    color: '#72C914',
    paddingTOP: 30,
  },
  header3: {
    marginLeft: 30,
    fontSize: 16,
  },
  items4: {
    padding: 20,
    marginLeft: 30,
  },
  header5: {
    marginLeft: 30,
    paddingTop: 10,
  },
  header6: {
    marginLeft: 12,
    fontSize: 14,
    marginLeft: 30,
  },
  header4: {
    padding: 20,
    marginLeft: 30,
    fontSize: 20,
    color: '#72C914',
    borderBottomColor: '#EBEBEB',
    borderBottomWidth: 2,
    borderRadius: 2,
  },
});
