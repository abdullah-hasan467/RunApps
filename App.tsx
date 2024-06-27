import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Absences from './Screens/Absences';
import LoginPage from './Screens/Login';
import MyProfilePage from './Screens/MyProfilePage';
import SchedulePage from './Screens/SchedulePage';
import WelcomePage from './Screens/WelcomePage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={WelcomePage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="My profile Page"
            component={MyProfilePage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Schedule"
            component={SchedulePage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Absences"
            component={Absences}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
