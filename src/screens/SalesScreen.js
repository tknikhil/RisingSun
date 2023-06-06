import { View, Text, StyleSheet ,Dimensions} from 'react-native'
import React,{useRef, useState} from 'react'
import ddown from "../../assets/json-request/ddown.json"
import Icon from 'react-native-vector-icons/dist/AntDesign';
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Button } from '../app-widget';

const SalesScreen = ({navigation}) => {
 const [selectedCustomer,setSelectedCustomer]=useState('Select Customer');
 const [isDropDownOpen,setIsDropDownOpen]=useState(false);
 const [data,setData]=useState(ddown);
 const searchRef=useRef();

 const [product1Quantity, setProduct1Quantity] = useState('');
 const [product2Quantity, setProduct2Quantity] = useState('');
 const [product3Quantity, setProduct3Quantity] = useState('');

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
  navigation.navigate('Form');
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
        <Text style={styles.Text}>{selectedCustomer}</Text>
        {isDropDownOpen?<Icon name="up" size={20}/>:<Icon name="down" size={20}/>}
      </TouchableOpacity>
      </View>
      <View style={styles.columnContainer}>
      <View style={styles.columnBtnContainer}>
      <Button onPress={handleNewCustomer} text={'New'} style={styles.newbutton} />
    </View>
    </View>
    <View style={styles.columnContainer}>
    <View style={styles.columnBtnContainer}>
    <Button onPress={handleEditCustomer} text={'Edit'} style={styles.editbutton} />
   </View>
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
        <View style={styles.productContainer}>
        <Text style={styles.productTitle}>Product 1</Text>
        <TextInput
          style={styles.quantityInput}
          placeholder="Qty"
          value={product1Quantity}
          onChangeText={text => setProduct1Quantity(text)}
          keyboardType="numeric"
          placeholderTextColor={'#84889a'}
        />
      </View>

      {/* Second parallel container */}
      <View style={styles.productContainer}>
        <Text style={styles.productTitle}>Product 2</Text>
        <TextInput
          style={styles.quantityInput}
          placeholder="Qty"
          value={product2Quantity}
          onChangeText={text => setProduct2Quantity(text)}
          keyboardType="numeric"
          placeholderTextColor={'#84889a'}
        />
      </View>

      {/* Third parallel container */}
      <View style={styles.productContainer}>
        <Text style={styles.productTitle}>Product 3</Text>
        <TextInput
          style={styles.quantityInput}
          placeholder="Qty"
          value={product3Quantity}
          onChangeText={text => setProduct3Quantity(text)}
          keyboardType="numeric"
          placeholderTextColor={'#84889a'}
        />
      </View>
      </View>
      <View style={styles.parallelContainer}>
        {/* Second parallel container */}
        {/* Place your content here */}
      </View>

    </View>
    <View style={styles.submitBtnContainer}>
    <Button onPress={handleSubmit} text={'Submit'} style={styles.newbutton} />
    </View>
    </View>
     
    
  )
}

export default SalesScreen
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },
  header: {
    fontSize: 19,
    fontWeight: '800',
    marginTop: windowHeight * 0.02,
    marginLeft: windowWidth * 0.02,
    color: '#9E9EFF',
  },
  rowDropdownContainer:{
    flex: 1,
    flexDirection: 'row',
    marginTop: windowHeight * 0.002,
    width: windowWidth * 0.95,
    // backgroundColor:'red'
  },
  columnDropdownContainer:{
    // flex:1,
    alignSelf: 'flex-start',
    // backgroundColor:'white'
  },
  Text:{
    color:'#8E8EAD',
  },
  dropdownSelector: {
    width: windowWidth * 0.60,
    height: windowHeight * 0.04,
    borderRadius: windowWidth * 0.01,
    borderWidth: 1,
    borderColor: '#8E8EAD',
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
    // backgroundColor: '#76a901',
    width: windowWidth * 0.95,
    height: windowHeight * 0.2,
    alignSelf: 'center',
    borderRadius: windowWidth * 0.01,
    zIndex:2
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
    height: windowHeight/3-windowHeight,
    fontSize:12,
    borderBottomLeftRadius: windowWidth * 0.01,
    borderBottomRightRadius: windowWidth * 0.01,
    borderEndWidth: 1,
    alignSelf: 'auto',
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
    width: windowWidth * 0.97,
    flexDirection: 'row',
    alignSelf:'center',
    justifyContent: 'center',
    top: windowHeight * -0.06,
    zIndex:1
  },
  parallelContainer: {
    flex: 1,
    height: windowHeight * 0.60,
    borderColor:'#8E8EAD',
    borderWidth:1,
    backgroundColor: '#fff',
    borderRadius: windowWidth * 0.02,
    marginBottom: windowHeight * 0.01,
    marginHorizontal: windowWidth * 0.01,
    // elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6.27,
    // elevation: 10,
  },
  submitBtnContainer:{
    marginBottom:10,
    marginLeft:windowWidth/1.5,
    width:windowWidth/3,
    // backgroundColor:'blue'
  },
  columnBtnContainer:{
    width:windowWidth*.15,
    height:windowHeight/1-windowHeight,
    marginLeft:10,
  },
 
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  productTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 10,
    color:'#84889a'
  },
  quantityInput: {
    flex: 1,
    textAlign:'center',
    borderWidth: 1,
    borderColor: '#8E8EAD',
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
    color:'#89CFF0',
  height:windowHeight*0.04,
  
  },
});
   