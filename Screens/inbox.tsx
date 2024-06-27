import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const descriptions = [
  ['প্রতি অর্ডার এ অতিরিক্ত ৫ টাকা!!!                            17.05'],
  ['প্রতি অর্ডার এ অতিরিক্ত ৫ টাকা!!!                            17.05'],
  ['প্রতি অর্ডার এ অতিরিক্ত ৫ টাকা!!!                            17.05'],
  ['প্রতি অর্ডার এ অতিরিক্ত ৫ টাকা!!!                            17.05'],
];

export default function App() {
  const options = [
    'All',
    'নিয়ম কানুন',
    'সার্ভিস ফী',
    'ঘোষনা',
    'ট্রেনিং এবং রেগুলেটের',
  ];

  return (
    <View style={styles.container}>
      {/* Header Portion */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="green" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Inbox</Text>
      </View>

      {/* Horizontal Options */}
      <View style={styles.horizontalScrollContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {options.map((item, index) => (
            <View key={index} style={styles.optionContainer}>
              <Text style={styles.optionText}>{item}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.content}>
        {/* Vertical Line and FlatLists */}
        <View style={styles.descriptionContainer}>
          <View style={styles.verticalLine}></View>
          <View style={styles.flatListsContainer}>
            {descriptions.map((descArray, index) => (
              <View key={index} style={styles.flatListWrapper}>
                <FlatList
                  horizontal
                  data={descArray}
                  renderItem={({ item }) => (
                    <View style={styles.descriptionBox}>
                      <Text style={styles.descriptionText}>{item}</Text>
                      <View><TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Perks</Text>
                      </TouchableOpacity></View>
                    </View>
                  )}
                  keyExtractor={(item, index) => index.toString()}
                />
                {index < descriptions.length - 1 && <View style={styles.separator}></View>}
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  backButton: {
    padding: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    flex: 1,
  },
  horizontalScrollContainer: {
    paddingVertical: 10,
    backgroundColor: "lightgray",
  },
  horizontalScroll: {
    paddingHorizontal: 10,
  },
  optionContainer: {
    marginHorizontal: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  optionText: {
    fontSize: 16,
    fontWeight: '400',
  },
  content: {
    flex: 1,
    padding: 10,
  },
  descriptionContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-start',
  },
  verticalLine: {
    width: 3,
    height: '100%',
    backgroundColor: '#72C914',
    marginRight: 10,
  },
  flatListsContainer: {
    flex: 1,
  },
  flatListWrapper: {
    flex: 1,
    marginBottom: 10,
  },
  descriptionBox: {
    backgroundColor: '#fff',
    padding: 4,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10, // Added to ensure separation from the button
  },
  descriptionText: {
    fontSize: 16,
  },

  separator: {
    height: 2,
    backgroundColor: 'lightgray',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#95CC5A',
    paddingVertical: 8, // Adjusted padding to make the button more compact
    paddingHorizontal: 12, // Adjusted padding to make the button more compact
    borderRadius: 5,
    alignItems: 'left',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
