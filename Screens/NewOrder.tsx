import {Ionicons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

function DeliveriesScreen() {
  return (
    <View style={styles.deliveriesContainer}>
      <View style={styles.mapWidget}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 23.813006,
            longitude: 90.426026,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        />
      </View>
      <View>
        <Text style={styles.textDelivary}>Delivery Details</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.bold}>Pickup</Text>
        <Text style={styles.bold}>2 mins</Text>
      </View>

      <View style={styles.smallText}>
        <Text style={styles.smallTextContent}>
          Wait until your friends have added their items to the group order
          cart, and the ready icon has appeared by their names
        </Text>
      </View>

      <View style={styles.details}>
        <Text style={styles.bold}>Drop Off</Text>
        <Text style={styles.bold}>6 mins</Text>
      </View>

      <View style={styles.smallText}>
        <Text style={styles.smallTextContent}>
          Wait until your friends have added their items to the group order
          cart, and the ready icon has appeared by their names
        </Text>
      </View>

      <View style={styles.greenLineSeparator} />

      <View style={styles.buttonContainer}>
        <Text style={styles.green}>45.35 TK</Text>
        <Button title="Accept" onPress={() => alert('Accepted')} />
      </View>
    </View>
  );
}

function StatusScreen() {
  return (
    <View style={styles.container}>
      <Text>Status Screen</Text>
    </View>
  );
}

function HistoryScreen() {
  return (
    <View style={styles.container}>
      <Text>History Screen</Text>
    </View>
  );
}

function WalletScreen() {
  return (
    <View style={styles.container}>
      <Text>Wallet Screen</Text>
    </View>
  );
}

function MapScreen() {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 23.813006,
          longitude: 90.426026,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Status') {
              iconName = focused
                ? 'information-circle'
                : 'information-circle-outline';
            } else if (route.name === 'Deliveries') {
              iconName = focused ? 'cube' : 'cube-outline';
            } else if (route.name === 'Map') {
              iconName = focused ? 'map' : 'map-outline';
            } else if (route.name === 'History') {
              iconName = focused ? 'time' : 'time-outline';
            } else if (route.name === 'Wallet') {
              iconName = focused ? 'wallet' : 'wallet-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#72C914',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Status" component={StatusScreen} />
        <Tab.Screen name="Deliveries" component={DeliveriesScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="History" component={HistoryScreen} />
        <Tab.Screen name="Wallet" component={WalletScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deliveriesContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  mapWidget: {
    height: 300,
    width: '90%',
    borderRadius: 20,
    overflow: 'hidden',
    margin: 20,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  textDelivary: {
    paddingLeft: 20,
    paddingBottom: 15,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  smallText: {
    marginHorizontal: 20,
    marginBottom: 15,
  },
  smallTextContent: {
    textAlign: 'center',
    fontSize: 14,
  },
  greenLineSeparator: {
    height: 4,
    backgroundColor: '#72C914',
    marginHorizontal: 20,
    marginBottom: 15,
  },
  green: {
    fontSize: 16,
    color: '#72C914',
    fontWeight: 'bold',
  },
});
