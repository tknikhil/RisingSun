import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AdminScreen from './src/screens/AdminScreen';
import SalesScreen from './src/screens/SalesScreen';
import LoginScreen from './src/screens/LoginScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import BottomBarNavigation from './src/screens/BottomBarNavigation';
import Form from './src/screens/component/Form';
import CustRegisteration from './src/screens/component/CustRegisteration';
import PersonalDetail from './src/screens/component/PersonalDetail';
import Address from './src/screens/component/Address';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={styles.root}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Admin" component={AdminScreen} />
        <Stack.Screen name="Sales" component={SalesScreen} />
        <Stack.Screen name="BottomNavBar" component={BottomBarNavigation}/>
        <Stack.Screen name='Form' component={Form} />
        {/* <Stack.Screen name='CustRegistration' component={CustRegisteration} />
        <Stack.Screen name='PersonalDetail' component={PersonalDetail} />
        <Stack.Screen name='Address' component={Address} /> */}
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