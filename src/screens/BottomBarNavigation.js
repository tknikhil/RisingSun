import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SalesScreen from './SalesScreen'
import Report from './Report'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const BottomBarNavigation = () => {
  return (
    <Tab.Navigator
    
    screenOptions={{
      tabBarLabelStyle: { fontSize: 16 },
      tabBarStyle:{width:'100%',borderRadius:15},
      headerShown:false
    }}
  >
      <Tab.Screen 
      name="Sales"
      component={SalesScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="currency-inr" color={"#00ABF0"} size={20} />
        ),
      }} />
      <Tab.Screen 
      name="Report" 
      component={Report}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="note-text-outline" color={"#00ABF0"} size={20} />
        ),
      }}
      />
    </Tab.Navigator>
  )
}

export default BottomBarNavigation