import React, {useState} from 'react';
import {
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Start Shift</Text>
        </View>
        <TouchableOpacity style={styles.crossIcon}>
          <Icon name="close" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Vehicle Type Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Vehicle Type</Text>
        <View style={styles.widget}>
          <View style={styles.iconContainer}>
            <Icon name="bike" size={35} color="#72C914" />
          </View>
          <Text style={styles.widgetText}>Walker</Text>
        </View>
      </View>

      <View style={styles.line} />

      {/* Bag Type Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Bag Type</Text>
        <View style={styles.widget}>
          <View style={styles.iconContainer}>
            <Icon name="briefcase" size={35} color="#72C914" />
          </View>
          <Text style={styles.widgetText}>Standard Box</Text>
        </View>
      </View>

      <View style={styles.line} />

      {/* Enter Box Temperature Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Enter Your Box Temperature</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} keyboardType="numeric" required />
          <Text style={styles.temperatureUnit}>°C</Text>
        </View>
        <Text style={styles.averageTemp}>
          Average Human temperature is between 36.5°C to 37°C
        </Text>
      </View>

      <View style={styles.line} />

      {/* Privacy Policy Section */}
      <View style={styles.section}>
        <View style={styles.checkboxContainer}>
          <Icon name="checkbox-marked" size={24} color="#000" />
          <Text style={styles.checkboxText}>Privacy Policy</Text>
        </View>
        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>
            I am available to extend my shift
          </Text>
          <Switch
            value={isSwitchOn}
            onValueChange={() => setIsSwitchOn(!isSwitchOn)}
          />
        </View>
      </View>

      {/* Start Button */}
      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startButtonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 35,
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: 'center',
    marginLeft: 20,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  crossIcon: {
    color: '#72C914',
  },
  section: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  widget: {
    width: 130,
    height: 100, // Adjusted height to accommodate icon and title
    borderRadius: 10,
    alignItems: 'center', // Center items horizontally
    justifyContent: 'center', // Center items vertically
    padding: 10,
    backgroundColor: '#E1E1E1',
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center', // Center icon vertically
  },
  widgetText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#72C914',
  },
  line: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
  },
  temperatureUnit: {
    fontSize: 16,
    marginLeft: 5,
  },
  averageTemp: {
    marginTop: 10,
    fontSize: 13,
    color: '#777',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 16,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  switchText: {
    fontSize: 16,
  },
  startButton: {
    marginTop: 20,
    backgroundColor: '#72C914',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  startButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
