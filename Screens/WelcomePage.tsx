import React, {useEffect} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

export default function Welcome({navigation}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 1000); // 3 seconds delay

    return () => clearTimeout(timer); // Clean up the timer
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require('../img/FoodHublogo.png')}
          style={styles.image}
        />
        <Text style={styles.title}>
          Food<Text style={styles.subtitle}>hub</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer} />
    </View>
  );
}

const {width} = Dimensions.get('window');
const fontSize = width * 0.2; // Dynamically set font size based on screen width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#61ca18',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20, // Add some space between content and button
  },
  image: {
    width: 70,
    height: 70,
    marginRight: 10, // Add some space between image and text
  },
  title: {
    fontSize: fontSize, // Dynamically set font size
    fontWeight: 'bold',
    color: 'black',
  },
  subtitle: {
    fontSize: fontSize, // Dynamically set font size
    fontWeight: 'bold',
    color: 'white',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
  btn: {
    backgroundColor: '#61ca18', // Button background color
    color: 'black', // Button text color
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    shadowOffset: 10,
    shadowOpacity: 1,
  },
});
