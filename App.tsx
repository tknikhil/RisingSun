import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AdminScreen from './src/screens/AdminScreen';
import SalesScreen from './src/screens/SalesScreen';
import LoginScreen from './src/screens/LoginScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Admin" component={AdminScreen} />
        <Stack.Screen name="Sales" component={SalesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App
