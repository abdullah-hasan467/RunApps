import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';

const data = [
  {id: '1', key: 'ID', value: '1118856'},
  {id: '2', key: 'NAME', value: '(GUL) C BM SIRAJUL HAQUE'},
  {id: '3', key: 'EMAIL', value: 'rajon.exe@gmail.com'},
  {id: '4', key: 'Password', value: '*************'},
  {id: '5', key: 'PHONE NUMBER', value: '+08813163612'},
  {id: '6', key: 'SHORT REFERRAL URL', value: 'https://google.com'},
  {id: '7', key: 'JOIN AT', value: '03.03.2023'},
  {id: '8', key: 'ACTIVE CONTRACT', value: '03.03.2023'},
  {id: '9', key: 'DOCUMENTS', value: ''},
];

export default function MyProfilePage({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My profile</Text>
      </View>
      <View style={styles.graySection}>
        <Text style={styles.sectionText} />
      </View>
      <Text style={styles.sectionTitle}>
        {' '}
        <Text style={styles.PersonalInfo}>Personal Info</Text>
      </Text>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.key}</Text>
            <Text style={styles.itemValue}>{item.value}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
      <Button
        buttonStyle={styles.btn}
        title="Book Schedule"
        titleStyle={styles.btnTitle}
        onPress={() => navigation.navigate('Schedule')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfefe',
    paddingHorizontal: 5,
    paddingTop: 40,
    borderRadius: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    position: 'absolute',
    left: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    flex: 1,
    textAlign: 'center',
  },
  graySection: {
    backgroundColor: '#353b31', // dark gray color
    padding: 10,
    paddingTop: 5,
    marginLeft: -10,
    marginRight: -10,
  },
  sectionText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f1f2ef',
    shadowOpacity: 1,
    marginLeft: -10,
    marginRight: -10,
    color: 'black',
  },
  item: {
    backgroundColor: 'white',
    padding: 1,
    marginVertical: 8,
    marginLeft: 10,
  },
  itemText: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 3,
  },
  addIdText: {
    fontSize: 12,
    color: 'black',
    fontWeight: 'bold',
  },
  itemValue: {
    fontSize: 12,
    color: 'black',
    padding: 2,
    fontWeight: 'bold',
  },
  separator: {
    height: 1.5,
    width: '100%',
    backgroundColor: '#ccc',
  },
  btn: {
    backgroundColor: '#61ca18', // light green color
    marginBottom: 10,
  },
  btnTitle: {
    color: 'white', // white text color for the button
    fontWeight: 'bold',
  },
});
