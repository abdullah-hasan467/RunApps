import {Ionicons} from '@expo/vector-icons'; // Ensure to install expo vector icons or modify accordingly if using a different icon library
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      {/* Header Portion */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="lightgreen" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Refer a Friend Rewards</Text>
      </View>

      {/* Black Border */}
      <View style={styles.blackBorder} />

      {/* Horizontal Flexbox Container 1 */}
      <View style={styles.horizontalFlexbox}>
        <View style={styles.flexItem}>
          <Text style={styles.flexItemTitle}>EARNED</Text>
          <Text style={styles.flexItemValuegreen}>BDT 0.00</Text>
          <Text style={styles.flexItemSubtitle}>Balance for 6 months</Text>
          <View style={styles.detailsContainer}>
            <TouchableOpacity>
              <Text style={styles.flexItemLink}>See Details</Text>
            </TouchableOpacity>
            <Ionicons
              name="arrow-forward"
              size={16}
              color="#1E90FF"
              style={styles.forwardIcon}
            />
          </View>
        </View>
        <View style={styles.flexItem}>
          <Text style={styles.flexItemTitle}>PENDING</Text>
          <Text style={styles.flexItemValue}>BDT 0.00</Text>
          <Text style={styles.flexItemSubtitle}>Balance for today</Text>
          <View style={styles.detailsContainer}>
            <TouchableOpacity>
              <Text style={styles.flexItemLink}>See Details</Text>
            </TouchableOpacity>
            <Ionicons
              name="arrow-forward"
              size={16}
              color="#1E90FF"
              style={styles.forwardIcon}
            />
          </View>
        </View>
      </View>

      <View style={styles.referal}>
        <Text style={styles.money}> More friends, More mone </Text>
      </View>

      <View style={styles.des}>
        <Text>
          {' '}
          Refer friends and get money when they complete orders in certain
          amount of days. All you need to do share the link below with your
          friends where they can apply to become riders.
        </Text>
      </View>

      <View style={styles.linedweb}>
        <Text style={styles.linkcolor}>https://www.foodhub.com/a/s/s </Text>
        <Ionicons name="copy" size={30} style={styles.forwardIcon} />
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
    height: 10,
    backgroundColor: '#353A40',
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
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Elevation for Android
    elevation: 5,
  },
  flexItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  flexItemValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  flexItemValuegreen: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
    color: '#72C914',
  },
  flexItemSubtitle: {
    fontSize: 14,
    color: '#7D7D7D',
    marginBottom: 8,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexItemLink: {
    fontSize: 14,
    color: '#1E90FF',
    marginRight: 8,
  },
  forwardIcon: {
    marginLeft: 4,
  },
  referal: {
    padding: 20,
  },
  money: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
    justifyContent: 'center',
    textAlign: 'center',
  },

  des: {
    margin: 15,
    textAlign: 'center',
    justifyContent: 'center',
  },
  linedweb: {
    margin: 15,
    textAlign: 'center',
    justifyContent: 'center',
  },
  linkcolor: {
    color: 'b#5895CD',
  },
});
