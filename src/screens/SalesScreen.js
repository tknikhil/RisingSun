import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SearchableDropDown } from '../app-widget'
import ddown from "../../assets/json-request/ddown.json"
import Icon from 'react-native-vector-icons/dist/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler'

const SalesScreen = () => {
 
  return (
    
     <View style={styles.container}>
      <Text style={styles.header}>Customer</Text>
      <TouchableOpacity style={styles.dropdownSelector}>
        <Text>Select Customer</Text>
        <Icon name="down" size={20}/> 
      </TouchableOpacity>
    </View>
    
  )
}

export default SalesScreen
const styles=StyleSheet.create({
  container:{
    flex:1
  },
  header:{
    fontSize:19,
    fontWeight:800,
    marginTop:10,
    marginLeft:10,
    color:'green',
  },
dropdownSelector:{
  width:'95%',
  height:40,
  borderRadius:10,
  borderWidth:1,
  borderColor:'#0000FF',
  marginTop:5,
  marginLeft:10,
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  paddingLeft:15,
  paddingRight:15
},
});