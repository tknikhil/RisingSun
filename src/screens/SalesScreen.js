import { View, Text, StyleSheet } from 'react-native'
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
  return (
    
     <View style={styles.container}>
      <Text style={styles.header}>Customer</Text>
      <TouchableOpacity style={styles.dropdownSelector} onPress={()=>{setIsDropDownOpen(!isDropDownOpen)}}>
        <Text>{selectedCustomer}</Text>
        {isDropDownOpen?<Icon name="up" size={20}/>:<Icon name="down" size={20}/>}
      </TouchableOpacity>
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
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#f9fde9",
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
  borderColor:'#6699cc',
  backgroundColor:'#fff',
  marginTop:5,
  marginLeft:10,
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  paddingLeft:15,
  paddingRight:15
},
dropdownArea:{
  width:'91%',
  height:200,
  borderBottomLeftRadius:10,
  borderBottomRightRadius:10,
  marginLeft:19,
  // borderWidth:1,
  // borderColor:'#6699cc',
  backgroundColor:'#fff',
  elevation:5,
},
searchInput:{
  width:'100%',
  height:40,
  borderBottomLeftRadius:5,
  borderBottomRightRadius:5,
  borderEndWidth:1,
  // borderColor:'#6699cc',
  alignSelf:'center',
  elevation:2
},
ddownItems:{
  width:'95%',
  height:50,
  borderBottomWidth:.2,
  alignSelf:'center',
  borderBottomColor:'#8e8e8e',
  justifyContent:'center'
},
rowContainer:{
  flex: 1,
  flexDirection: 'row',
   justifyContent: 'center',
  // alignItems: 'center',
  marginTop:20,
},
parallelContainer: {
  flex:1,
    height: '95%',
    backgroundColor: '#F2F4D1',
    borderRadius:5,
    marginBottom: 10,
    marginHorizontal: 5,
    elevation:5
},
// buttonViewAlign:{
//   flex:1,
//   backgroundColor:'#000',
//   justifyContent: 'space-between', 
// },
buttonAlign:{
  alignSelf: 'flex-end',
}

});