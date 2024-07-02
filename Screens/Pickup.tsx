import {AntDesign, Ionicons} from '@expo/vector-icons';
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
        <Text style={styles.headerText}>Pickup</Text>
        <TouchableOpacity style={styles.musicButton}>
          <AntDesign name="customerservice" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.header2}>
        <Text style={styles.headerText2}>Wahab Bhai Dahi Bhallay</Text>
        <View style={styles.iconsContainer}>
          <AntDesign name="ellipsis1" size={24} color="black" />
          <AntDesign name="dingding" size={24} color="black" />
        </View>
      </View>
      <View style={styles.lastpart}>
        <Text style={styles.smalltext}>Order Details</Text>
        <Text style={styles.text}>Woqv-vllh (#1909)</Text>
        <Text style={styles.smalltext}>Main Shazada Habib</Text>
        <View style={styles.items}>
          <Text>2 items</Text>
          <TouchableOpacity style={styles.moreButton}>
            <Text style={styles.more}>More</Text>
            <AntDesign name="down" size={18} color="black" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.pickupButton}>
          <Text style={styles.pickupButtonText}>Pick Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
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
  header2: {
    flexDirection: 'row',
    alignItems: 'center', // Center icons and text vertically
    padding: 25,
    backgroundColor: '#F8F8F8',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1, // Border at the bottom of the header
  },
  headerText2: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    flex: 1, // Make the text take up available space
  },
  backButton: {
    position: 'absolute',
    left: 16,
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
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto', // Push icons to the right
  },
  lastpart: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
    margin: 20,
    borderRadius: 15,
  },
  text: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  smalltext: {
    padding: 10,
    margin: 2,
  },
  more: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#140F7E',
  },
  items: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  moreButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pickupButton: {
    backgroundColor: '#140F7E', // Button color
    padding: 15,
    borderRadius: 10,
    marginTop: 20, // Space from the items section
    alignItems: 'center',
    marginTop: 400,
  },
  pickupButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
