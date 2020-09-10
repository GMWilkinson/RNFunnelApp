/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  StatusBar,
  Button
} from 'react-native';

import Landing from './screens/Landing';
import Login from './screens/Login';
import Register from './screens/Register';
// import Menu from './screens/Menu';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from './screens/Menu';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <Stack.Navigator 
          screenOptions={{
            headerShown: false
        }}>
          <Stack.Screen name="Landing" component={Landing} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen 
            name="Menu"
            component={Menu} 
            options={{
              headerShown: false,
              headerTitle: null
            }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
