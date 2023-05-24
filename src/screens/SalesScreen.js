import { View, Text, StyleSheet ,Dimensions} from 'react-native'
import React,{useRef, useState} from 'react'
import ddown from "../../assets/json-request/ddown.json"
import Icon from 'react-native-vector-icons/dist/AntDesign';
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Button } from '../app-widget';

const SalesScreen = () => {
 const [selectedCustomer,setSelectedCustomer]=useState('Select Customer');
 const [isDropDownOpen,setIsDropDownOpen]=useState(false);
 const [data,setData]=useState(ddown);
 const searchRef=useRef();
 const onSearch=(txt)=>{
  if(txt !==''){
    let tempData = data.filter(item=>{
      return item.name.toLowerCase().match(txt.toLowerCase())
    });
    setData(tempData);
  }else{
    setData(ddown);
  }
 }

 const handleSubmit =()=>{
  console.log('handleSubmit');
 }
 const handleNewCustomer=()=>{
  console.log('handleCustomer');
 }
 const handleEditCustomer=()=>{
  console.log('handleCustomer');
 }
  return (
   
     <View style={styles.container}>
      <View style={styles.dropdownContainer}>
      <Text style={styles.header}>Customer</Text>
      <View style={styles.rowDropdownContainer}>
    <View style={styles.columnDropdownContainer}>
      <TouchableOpacity style={styles.dropdownSelector} onPress={()=>{setIsDropDownOpen(!isDropDownOpen)}}>
        <Text>{selectedCustomer}</Text>
        {isDropDownOpen?<Icon name="up" size={20}/>:<Icon name="down" size={20}/>}
      </TouchableOpacity>
      </View>
      <View style={styles.columnContainer}>
      <Button onPress={handleNewCustomer} text={'New'} style={styles.newbutton} />
    </View>
    <View style={styles.columnContainer}>
    <Button onPress={handleEditCustomer} text={'Edit'} style={styles.editbutton} />
    </View>
    </View>
     {isDropDownOpen? <View style={styles.dropdownArea}>
      <TextInput ref={searchRef} placeholder='Search' style={styles.searchInput} onChangeText={(txt)=>{onSearch(txt);}}/>
      <FlatList data={data} renderItem={({item,index})=>{
        return(
          <TouchableOpacity style={styles.ddownItems} onPress={()=>{
            setSelectedCustomer(item.name);
            onSearch('');
            setIsDropDownOpen(false);
            searchRef.current.clear();
          }}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        );
      }}/>
     
     </View>:null}
   
     </View>
     
     <View style={styles.rowContainer}>
     
      <View style={styles.parallelContainer}>
        {/* First parallel container */}
        {/* Place your content here */}
      </View>
      <View style={styles.parallelContainer}>
        {/* Second parallel container */}
        {/* Place your content here */}
      </View>

    </View>
    <Button onPress={handleSubmit} text={'Submit'} style={styles.buttonAlign} />
    
    </View>
     
    
  )
}

export default SalesScreen
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fde9',
  },
  header: {
    fontSize: 19,
    fontWeight: '800',
    marginTop: windowHeight * 0.02,
    marginLeft: windowWidth * 0.02,
    color: '#F2F4D1',
  },
  rowDropdownContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: windowHeight * 0.002,
    width: windowWidth * 0.95,
  },
  columnDropdownContainer:{
    flex:1
  },
  dropdownSelector: {
    width: windowWidth * 0.60,
    height: windowHeight * 0.04,
    borderRadius: windowWidth * 0.01,
    borderWidth: 1,
    borderColor: '#6699cc',
    backgroundColor: '#fff',
    marginTop: windowHeight * 0.002,
    marginLeft: windowWidth * 0.02,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: windowWidth * 0.03,
    paddingRight: windowWidth * 0.03,
  },
  dropdownContainer: {
    backgroundColor: '#76a901',
    width: windowWidth * 0.95,
    height: windowHeight * 0.2,
    alignSelf: 'center',
    borderRadius: windowWidth * 0.01,
  },
  
  dropdownArea: {
    width: windowWidth * 0.60,
    height: windowHeight * 0.2,
    borderBottomLeftRadius: windowWidth * 0.01,
    borderBottomRightRadius: windowWidth * 0.01,
    marginLeft: windowWidth * 0.02,
    backgroundColor: '#fff',
    elevation: 5,
    position: 'absolute',
    top:windowHeight * 0.100, 
    left: 0,
    right: 0,
    bottom: 0,
  },
  searchInput: {
    width: '100%',
    height: windowHeight * 0.04,
    borderBottomLeftRadius: windowWidth * 0.01,
    borderBottomRightRadius: windowWidth * 0.01,
    borderEndWidth: 1,
    alignSelf: 'center',
    elevation: 2,
  },
  ddownItems: {
    width: windowWidth * 0.95,
    height: windowHeight * 0.05,
    borderBottomWidth: 0.2,
    //  alignSelf: 'center',
    borderBottomColor: '#8e8e8e',
    justifyContent: 'center',
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    top: windowHeight * -0.06,
  },
  parallelContainer: {
    flex: 1,
    height: windowHeight * 0.60,
    backgroundColor: '#F2F4D1',
    borderRadius: windowWidth * 0.01,
    marginBottom: windowHeight * 0.01,
    marginHorizontal: windowWidth * 0.01,
    elevation: 5,
  },
  newbutton:{
    width: windowWidth * 0.60,
  }
});