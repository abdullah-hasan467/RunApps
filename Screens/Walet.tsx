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
        <Text style={styles.headerText}>Wallet</Text>
      </View>
      <View style={styles.headerLow}>
        <Text style={styles.current}>Current Balance</Text>
        <Text style={styles.balance}>227.10 Tk</Text>
      </View>

      <View style={styles.dashboard}>
        <Text style={styles.recent}>Recent Transactions</Text>
      </View>

      <View style={styles.common}>
        <View style={styles.iconColumn}>
          <Ionicons name="paid" size={35} color="black" />
        </View>

        <View style={styles.textColumn}>
          <Text style={styles.boldtext}>Payout</Text>
          <Text style={styles.lighttext}>65889999</Text>
          <Text style={styles.lightdate}>23 May</Text>
        </View>
        <View style={styles.amountColumn}>
          <Text style={styles.money}>551.50 Tk</Text>
        </View>
      </View>

      <View style={styles.common}>
        <View style={styles.iconColumn}>
          <Ionicons name="paid" size={35} color="black" />
        </View>

        <View style={styles.textColumn}>
          <Text style={styles.boldtext}>Collection</Text>
          <Text style={styles.lighttext}>32555555</Text>
          <Text style={styles.lightdate}>23 May</Text>
        </View>
        <View style={styles.amountColumn}>
          <Text style={styles.moneyblack}>-152.65Tk</Text>
        </View>
      </View>
      <View style={styles.common}>
        <View style={styles.iconColumn}>
          <Ionicons name="upload" size={35} color="black" />
        </View>

        <View style={styles.textColumn}>
          <Text style={styles.boldtext}>Cash out</Text>
          <Text style={styles.lighttext}>ixopay-nagad</Text>
          <Text style={styles.lightdate}>23 May</Text>
        </View>
        <View style={styles.amountColumn}>
          <Text style={styles.moneyblack}>-152.65Tk</Text>
        </View>
      </View>
      <View style={styles.common}>
        <View style={styles.iconColumn}>
          <Ionicons name="paid" size={35} color="black" />
        </View>
        <View style={styles.textColumn}>
          <Text style={styles.boldtext}>Payout</Text>
          <Text style={styles.lighttext}>65889999</Text>
          <Text style={styles.lightdate}>23 May</Text>
        </View>
        <View style={styles.amountColumn}>
          <Text style={styles.moneyblack}>551.50 Tk</Text>
        </View>
      </View>
      <View style={styles.common}>
        <View style={styles.iconColumn}>
          <Ionicons name="paid" size={35} color="black" />
        </View>
        <View style={styles.textColumn}>
          <Text style={styles.boldtext}>Payout</Text>
          <Text style={styles.lighttext}>65889999</Text>
          <Text style={styles.lightdate}>23 May</Text>
        </View>
        <View style={styles.amountColumn}>
          <Text style={styles.moneyblack}>551.50 Tk</Text>
        </View>
      </View>
      <View style={styles.common}>
        <View style={styles.iconColumn}>
          <Ionicons name="paid" size={35} color="black" />
        </View>
        <View style={styles.textColumn}>
          <Text style={styles.boldtext}>Payout</Text>
          <Text style={styles.lighttext}>65889999</Text>
          <Text style={styles.lightdate}>23 May</Text>
        </View>
        <View style={styles.amountColumn}>
          <Text style={styles.moneyblack}>551.50 Tk</Text>
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
    padding: 20,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center', // Center align the text
  },
  current: {
    fontSize: 16,
    color: '#333', // Slightly darker text color
    marginBottom: 5, // Space between text
  },
  balance: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black', // Color for the balance text
  },
  dashboard: {
    marginLeft: 30,
    marginTop: 2, // Added top margin for separation from previous section
  },
  recent: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  common: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 20,
    padding: 10,
  },
  iconColumn: {
    flex: 1, // Takes up one part of the row
    alignItems: 'center', // Center the icon horizontally
  },
  textColumn: {
    flex: 2, // Takes up two parts of the row
    justifyContent: 'center',
  },
  amountColumn: {
    flex: 1, // Takes up one part of the row
    alignItems: 'flex-end', // Align text to the right
  },
  boldtext: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  lighttext: {
    fontSize: 16,
    color: '#666',
  },
  lightdate: {
    fontSize: 14,
    color: '#999',
  },
  money: {
    fontSize: 16,
    color: '#72C914',
    fontWeight: 'bold',
  },
  moneyblack: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
});
