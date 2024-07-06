import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

function DeliveriesScreen() {
  return (
    <View style={styles.deliveriesContainer}>
      <View style={styles.details}>
        <Text style={styles.bold}>Wahab Bhai Dahi Bhallay</Text>
        <Text style={styles.bold}>Icons</Text>
      </View>
      <Text style={styles.textDelivary}>Pearl City Hotel, Peshawar</Text>
      <View style={styles.greenLineSeparator} />

      <View style={styles.payments}>
        <Text style={styles.paymentsText}>Payment</Text>
        <View style={styles.rowSpace}>
          <Text style={styles.collectCash}>Collect Cash</Text>
          <Text style={styles.collectCash}>264.50 Tk</Text>
        </View>
      </View>
      <View style={styles.greenLineSeparator} />
      <View style={styles.arrived}>
        <Text style={styles.Arrivedtext}> Arrive at 23.13</Text>
      </View>

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
      <View style={styles.buttonContainer}>
        <Button
          title="Arrived at the customer"
          color="#03198A"
          onPress={() => alert('Arrived at the vendor')}
        />
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
    left: 20,
    right: 20,
    alignItems: 'center',
    backgroundColor: '#03198A',
    borderRadius: 10,
    padding: 15,
  },
  textDelivary: {
    padding: 5,
    paddingBottom: 15,
    margin: 10,
    textAlign: 'center',
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
  greenLineSeparator: {
    height: 2,
    backgroundColor: 'lightgray',
    marginHorizontal: 20,
    marginBottom: 15,
  },
  payments: {
    margin: 15,
  },
  paymentsText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  rowSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  collectCash: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  Arrivedtext: {
    padding: 5,
    paddingBottom: 15,
    margin: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
