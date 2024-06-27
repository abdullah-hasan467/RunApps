import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native';
import {Ionicons} from '@expo/vector-icons'; // Ensure to install expo vector icons or modify accordingly if using a different icon library
import {AntDesign} from '@expo/vector-icons';
import {} from '@expo/vector-icons';
export default function App() {
  return (
    <View style={styles.container}>
      {/* Header Portion */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="lightgreen" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Performance</Text>
      </View>

      {/* Black Border */}
      <View style={styles.scoring}>
        <Text style={styles.heading}> Scoring </Text>
        <Text style={styles.texts}>
          {' '}
          Track your weekly scores and ways to improve as a rider
        </Text>
        <Text style={styles.heading2}> Current batch </Text>
      </View>
      {/* Horizontal Flexbox Container 1 */}
      <View style={styles.horizontalFlexbox}>
        <View style={styles.iconContainer}>
          <Ionicons name="award" size={30} color="#1E90FF" />
        </View>
        <View style={styles.flexItem}>
          <Text style={styles.flexItemTitle}>You are in batch 5</Text>
          <Text style={styles.flexItemSubtitle}>
            Your batch determines when you get to book your shift
          </Text>
          <View style={styles.detailsContainer}>
            <TouchableOpacity>
              <Text style={styles.flexItemLink}>See batch details</Text>
            </TouchableOpacity>
            <Ionicons
              name="right"
              size={16}
              color="#1E90FF"
              style={styles.forwardIcon}
            />
          </View>
        </View>
      </View>

      <View style={styles.referal}>
        <Text style={styles.money}> Rider guidelines </Text>
      </View>
      <View style={styles.des}>
        <Text> Learn how to be a great rider and avoid suspension</Text>
      </View>

      {/* Horizontal Flexbox Container 1 */}
      <View style={styles.horizontalFlexbox}>
        <View style={styles.flexItem}>
          <Ionicons name="arrow-back" size={24} color="lightgreen" />
          <Text style={styles.flexItemTitle}>Low acceptance rate</Text>

          <View style={styles.detailsContainer}>
            <TouchableOpacity>
              <Text></Text>
              <Button title="Readmore" color="">
                {' '}
              </Button>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.flexItem}>
          <Ionicons name="arrow-back" size={24} color="lightgreen" />
          <Text style={styles.flexItemTitle}>Cancelled Order</Text>

          <View style={styles.detailsContainer}>
            <TouchableOpacity>
              <Text></Text>
              <Button title="Readmore" color="">
                {' '}
              </Button>
            </TouchableOpacity>
          </View>
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
    backgroundColor: 'lightgray',
  },
  money: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
  },

  des: {
    margin: 5,
    textAlign: 'center',
    justifyContent: 'center',
  },
  heading: {
    margin: 5,
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10,
  },
  texts: {
    marginLeft: 10,
    fontSize: 15,
  },
  heading2: {
    margin: 5,
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
  },
});
