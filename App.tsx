import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AdminScreen from './src/screens/AdminScreen';
import SalesScreen from './src/screens/SalesScreen';
import LoginScreen from './src/screens/LoginScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={styles.root}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Admin" component={AdminScreen} />
        <Stack.Screen name="Sales" component={SalesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App
const styles=StyleSheet.create({
root:{
  flex:1
}
});