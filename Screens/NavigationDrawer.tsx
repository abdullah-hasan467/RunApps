import {Ionicons} from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  Animated,
  Button,
  Dimensions,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type Shift = {
  name: string;
  time: string;
};

const shifts: Shift[] = [
  {name: 'Morning Shift', time: '08:00 AM - 12:00 PM'},
  {name: 'Afternoon Shift', time: '12:00 PM - 04:00 PM'},
  {name: 'Evening Shift', time: '04:00 PM - 08:00 PM'},
  {name: 'Night Shift', time: '08:00 PM - 12:00 AM'},
];

const menuItems = [
  'Available Shifts',
  'My Shifts',
  'Absences',
  'Inbox',
  'Payments',
  'Refer a Friend Rewards',
  'Performance',
  'Tutorial',
  'Rider Support',
  'Privacy Policy',
  'Settings',
];

const screenWidth = Dimensions.get('window').width;

const Stack = createStackNavigator();

type FoodDeliveryRaiderPageProps = {
  navigation: StackNavigationProp<any, any>;
};

const FoodDeliveryRaiderPage: React.FC<FoodDeliveryRaiderPageProps> = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(-screenWidth)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isMenuVisible ? 0 : -screenWidth,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isMenuVisible, slideAnim]);

  const handleTakeShift = (shift: Shift) => {
    navigation.navigate('ShiftDetails', {
      profileName: 'My profile',
      shiftName: shift.name,
      shiftTime: shift.time,
    });
  };

  const handleMenuItemPress = (item: string) => {
    setMenuVisible(false);
    Alert.alert(`${item} selected`);
  };

  const handleLogout = () => {
    setMenuVisible(false);
    Alert.alert('Logout selected');
    // Handle logout logic here
  };

  const renderItem: React.FC<{item: Shift}> = ({item}) => (
    <View style={styles.shiftWidget}>
      <Text style={styles.shiftWidgetText}>{item.name}</Text>
      <Text style={styles.shiftWidgetTime}>{item.time}</Text>
      <Button title="Take Shift" onPress={() => handleTakeShift(item)} />
    </View>
  );

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <Text style={styles.statusText}>Status</Text>
      </View>
      <TouchableOpacity style={styles.menuIcon} onPress={toggleMenu}>
        <Ionicons name="menu" size={32} color="black" />
      </TouchableOpacity>
      <View style={styles.notworkingwidget}>
        <View style={styles.notworkingstatusContainer}>
          <Text style={styles.notworkinstatusText}>Not Working</Text>
        </View>
      </View>
      <View style={styles.upcomingShift}>
        <View style={styles.iconContainer}>
          <Ionicons name="flash" size={30} color="black" />
        </View>
        <Text style={styles.upcomingShiftText}>Book Upcoming Shifts</Text>
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.message}>
        <Text style={styles.messageText}>
          Oh, you can’t work without shifts!
        </Text>
      </View>
      <FlatList
        data={shifts}
        renderItem={renderItem}
        keyExtractor={item => item.name}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.shiftWidgets}
      />
      <Modal
        visible={isMenuVisible}
        animationType="none"
        transparent={true}
        onRequestClose={toggleMenu}>
        <View style={styles.modalOverlay} onTouchStart={toggleMenu}>
          <Animated.View
            style={[
              styles.modalContent,
              {transform: [{translateX: slideAnim}]},
            ]}>
            <View style={styles.profileSection}>
              <Text style={styles.profileName}>Mahfuz</Text>
            </View>
            <View style={styles.menuItemsContainer}>
              {menuItems.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.menuItem}
                  onPress={() => handleMenuItemPress(item)}>
                  <Text style={styles.menuItemText}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity
              style={styles.logoutButton}
              onPress={handleLogout}>
              <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
};

const ShiftDetailsPage = ({route}) => {
  const {profileName, shiftName, shiftTime} = route.params;

  const handleShiftStartNow = () => {
    Alert.alert('Shift Started');
    // Handle the shift start logic here
  };

  const todayDate = new Date().toLocaleDateString();

  return (
    <View style={styles.container}>
      <Text style={styles.profileName}>{profileName}</Text>
      <Text style={styles.status}>Not Working</Text>
      <Text style={styles.upcomingShift}>Upcoming Shift</Text>
      <View style={styles.shiftWidge}>
        <Text style={styles.date}>{todayDate}</Text>
        <Text style={styles.shiftName}>{shiftName}</Text>
        <Text style={styles.shiftTime}>{shiftTime}</Text>
        <Button title="Shift Start Now" onPress={handleShiftStartNow} />
      </View>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={FoodDeliveryRaiderPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ShiftDetails"
          component={ShiftDetailsPage}
          options={{title: 'Shift Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  statusBar: {
    height: 100,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  statusText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 40,
  },
  menuIcon: {
    position: 'absolute',
    top: 50,
    left: 10,
  },
  notworkingwidget: {
    flexDirection: 'row',
    marginTop: 10,
    width: Dimensions.get('window').width,
    padding: 10,
    backgroundColor: 'white',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
  },
  notworkingstatusContainer: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 5,
  },
  notworkinstatusText: {
    fontSize: 12,
    color: 'red',
  },
  upcomingShift: {
    flexDirection: 'row',
    padding: 5,
    marginTop: 25,
  },
  iconContainer: {
    marginLeft: 5,
  },
  upcomingShiftText: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
  },
  seeAllButton: {
    padding: 7,
    marginRight: 10,
  },
  seeAllText: {
    fontSize: 14,
    color: '#007BFF',
    fontWeight: 'bold',
  },
  message: {
    marginTop: 1,
  },
  messageText: {
    fontSize: 16,
    color: '#888',
    marginLeft: 10,
  },
  shiftWidgets: {
    marginTop: 10,
    paddingVertical: 10,
    padding: 5,
  },
  shiftWidget: {
    width: 160,
    height: 160,
    marginLeft: 10,
    marginHorizontal: 5,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    alignItems: 'center',
  },
  shiftWidge: {},
  shiftWidgetText: {
    top: 10,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#5f9ea0',
  },
  shiftWidgetTime: {
    fontSize: 14,
    color: '#555',
    marginBottom: 25,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  modalContent: {
    width: '80%',
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  profileSection: {
    top: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 15,
  },
  menuItemsContainer: {
    flex: 1,
  },
  menuItem: {
    top: 100,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
  menuItemText: {
    fontSize: 15,
  },
  logoutButton: {
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    alignItems: 'center',
  },
  logoutButtonText: {
    fontSize: 18,
    color: 'red',
  },
  status: {
    fontSize: 15,
    marginBottom: 20,
    color: 'red',
    padding: 10,
  },
  date: {
    fontSize: 16,
    marginBottom: 10,
  },
  shiftName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  shiftTime: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
  },
});

export default App;
