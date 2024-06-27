import React, {useState} from 'react';
import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';

export default function LoginPage({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handlePress = () => {
    if (username === '' && password === '') {
      navigation.navigate('My profile Page');
      setErrorMessage('');
    } else {
      setErrorMessage('Username or Password is incorrect');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../img/Welcome.png')} style={styles.img} />
      <View style={styles.form}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Name"
          value={username}
          onChangeText={setUsername}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <Button title="Submit" onPress={handlePress} />
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9f9', // Example background color, adjust as needed
    justifyContent: 'center',
    alignItems: 'center', // Center the content horizontally
    paddingHorizontal: 20,
  },
  img: {
    width: 200, // Adjust the width of the logo
    height: 200, // Adjust the height of the logo
    marginBottom: 20, // Space between the logo and the form
  },
  form: {
    backgroundColor: 'white',
    padding: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 10, // Adding border radius to make the form corners rounded
    marginBottom: 20, // Adding margin to separate the form from the button
    width: '100%', // Make the form take up the full width of its parent
    maxWidth: 400, // Set a max width for the form
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderColor: 'blue',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});
