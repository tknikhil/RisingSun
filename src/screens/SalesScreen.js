  import { View, Text, StyleSheet ,Dimensions,Modal,TouchableOpacity, ScrollView,ActivityIndicator,Image,Animated} from 'react-native'
  import React,{useRef, useState,useEffect} from 'react'
  import ddown from "../../assets/json-request/ddown.json"
  import Icon from 'react-native-vector-icons/dist/AntDesign'
  import { FlatList, TextInput } from 'react-native-gesture-handler'
  import { Button } from '../app-widget'
  import Form from './component/Form'
  import { TabActions, useNavigation } from '@react-navigation/native';
  import LinearGradient from 'react-native-linear-gradient';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import { Print, HTML } from 'react-native-print';
  import RNFetchBlob from 'rn-fetch-blob';

  import RNHTMLtoPDF from 'react-native-html-to-pdf';
import { PermissionsAndroid } from 'react-native';

  import axios from 'axios';
  import { PAGINATION } from '../url/ConstantURL'
  import { Colors } from 'react-native/Libraries/NewAppScreen'
import { printToFileAsync } from 'expo-print'


import {BASE_URL,CUSTOMER_PAGINATION} from '../url/ConstantURL';
import ProductService from '../service/ProductService';

  const SalesScreen = ({}) => {
  const [selectedCustomer,setSelectedCustomer]=useState('Select Customer');
  const [products, setProducts] = useState([]);
  const [productList, setProductList] = useState([]);
  const [product1Price, setProduct1Price] = useState('199.99');
  const [isDropDownOpen,setIsDropDownOpen]=useState(false);
  const [data,setData]=useState(ddown);
  const searchRef=useRef();
  const navigation = useNavigation();

  const [product1Quantity, setProduct1Quantity] = useState('');
  const [product2Quantity, setProduct2Quantity] = useState('');
  const [product3Quantity, setProduct3Quantity] = useState('');

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isCustomerSelected, setIsCustomerSelected] = useState(false);


  

    const openPopup = () => {
      setIsPopupVisible(true);
    };

    const closePopup = () => {
      console.log('closePopup');
      setIsPopupVisible(false);
    };

  const onSearch=(txt)=>{
    if(txt !==''){
      let tempData = data.filter(item=>{
        return item.name.toLowerCase().match(txt.toLowerCase())
      });
      setData(tempData);
    }else{
      setData(ddown);
    }
    setIsCustomerSelected(false)
  }
  
  const handleSubmit =async ()=>{
    console.log('handleSubmit');
    
  }

    const [cdata, setCData] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);


  const fetchProductData= async ()=>{
    // try {
    //       const data = await fetchProduct();
    //       console.log('sales screen data:',data);
    //       setProductList(data.itemList);
    //     } catch (error) {
    //       console.error(error);
    //     }

    // try {
    //   const cachedData = await AsyncStorage.getItem('productData');
    //   console.log('Cached product cachedData:', cachedData);
    //   if (cachedData) {
    //     const data = JSON.parse(cachedData);
    //     console.log('Cached product data:', data);
    //     // Do whatever you want with the cached data
    //   } else {
    //     // Data not found in cache, fetch it from the server
    //     const data = await ProductService();
    //     // Do whatever you want with the fetched data
    //   }
    // } catch (error) {
    //   console.error(error);
    // }

    return new Promise((resolve, reject) => {
      ProductService()
        .then((data) => {
          console.log('sales screen data:', data);
          resolve(data);
        })
        .catch((error) => {
          console.error(error);
          reject(error);
        });
    });
  }

  fetchProductData()
  .then((productList) => {
    // Do something with the productList, e.g., set it to state
    console.log('sales Screen product',productList);
    setProductList(productList);
  })
  .catch((error) => {
    // Handle any errors that occurred during the fetch
    console.error('Error fetching data:', error);
  });

  const fetchData = async () => {
 
    setIsLoading(true);

    try {
      const accessToken = await AsyncStorage.getItem('accessToken');
      console.log('accessoken :', accessToken);
      const response = await axios.get(
        `${BASE_URL()}${CUSTOMER_PAGINATION()}${page}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(response.data.data);
      const newData = response.data.data.customerListInPage;
      console.log(newData);

      setCData((prevData) => [...prevData, ...newData]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();//get customer record


    // const productData=fetchProduct();
    // console.log('salesScreen',productData);
    // const fetchData = async () => {
    //   try {
    //     const data = await fetchProduct();
    //     setProductList(data.itemList);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    fetchProductData();

  }, []);

  const handleLoadMore = () => {
    if (!isLoading) {
      fetchData();
    }
  };
  const handleEditCustomer=()=>{
    console.log('handleCustomer');
  }

  const calculateTotal = (products) => {
    let total = 0;
    products.forEach((product) => {
      if (product.amount) {
        total += parseFloat(product.amount);
      }
    });
    return total.toFixed(2);
  };
    return (
        <View style={styles.container}>
        
              {/* DropDown */}
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
        <Button onPress={openPopup} text={'New'} style={styles.newbutton} />
          <Modal visible={isPopupVisible} animationType="slide" transparent={true}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
              <TouchableOpacity onPress={closePopup} style={{ marginTop: 10,marginLeft:'80%',backgroundColor:'white',borderColor:'red',borderWidth:3,borderRadius:30 }}>
                  <Icon name="close" size={20} color="red" />
                </TouchableOpacity>
              <View style={{ backgroundColor: 'white',borderRadius:20,width:'80%', height:'50%', }}>
              
              <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <Form />
  </ScrollView>
              
              </View>
              
            </View>
        </Modal>
      </View>
      </View>

      {isCustomerSelected &&(
      <View style={styles.columnContainer}>
      <View style={styles.columnBtnContainer}>
      <Button onPress={openPopup} text={'Edit'} style={styles.editbutton} />
      <Modal visible={isPopupVisible} animationType="slide" transparent={true}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <TouchableOpacity onPress={closePopup} style={{ marginTop: 10,marginLeft:'80%',backgroundColor:'white',borderColor:'red',borderWidth:3,borderRadius:30 }}>
                <Icon name="close" size={20} color="red" />
              </TouchableOpacity>
            <View style={{ backgroundColor: 'white', padding: 20,borderRadius:20,width:'80%',height:'40%' }}>
            
            <Form/>
            
            </View>
            
          </View>
        </Modal>
    </View>
      </View>
      )}

      </View>
      {isDropDownOpen? <View style={styles.dropdownArea}>
        <TextInput ref={searchRef} placeholder='Search' style={styles.searchInput} onChangeText={(txt)=>{onSearch(txt);}}/>
        <FlatList 
        data={cdata} 
        keyExtractor={(item) => item.custName}
        renderItem={({item})=>{
          return(
            <TouchableOpacity style={styles.ddownItems} onPress={()=>{
              setSelectedCustomer(item.custName);
              onSearch('');
              setIsDropDownOpen(false);
              setIsCustomerSelected(true);
              searchRef.current.clear();
            }}>
              <Text>{item.custName}</Text>
              
            </TouchableOpacity>
          );
        }}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
        isLoading ? <ActivityIndicator size="large" /> : null
        }
        />
      
      </View>:null}
    
      </View>
      
      <View style={styles.rowContainer}>
      
        <View style={styles.parallelContainer}>
          {/* First parallel container */}
          {/* Place your content here */}
          <ScrollView vertical>
          {productList.map((product, index) => (
      <View style={styles.productContainer}>
        <LinearGradient
    colors={['#F0F2E4', '#D2DAC2']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.productContainer}
  >
 
    <View style={styles.productBox}>
   
   
    <LinearGradient
    colors={['#2EAAFA', '#1F2F98']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.productBox}>
      <Text style={styles.productTitle}>{product.itmName}</Text>
      {/* <Text style={styles.price}>₹{product1Price}</Text>  */}
      {product.itemPriceList.length > 0 && (
                <Text style={styles.price}>₹{product.itemPriceList[0].itmPrice}</Text>
              )}
      </LinearGradient>
    </View>
  
    <TextInput
      style={styles.quantityInput}
      placeholder="Qty"
      value={product1Quantity}
      onChangeText={text => [
        console.log('onChangeText=========>',product1Price),
        setProduct1Quantity(text),
        updateProducts(1, text,product1Price)
      ]}
      keyboardType="numeric"
      // placeholderTextColor="#84889a"
    />
  </LinearGradient>
 
  </View>
  ))}
          </ScrollView>
        
        </View>
        <View style={styles.parallelContainer}>
          {/* Second parallel container */}
          <ScrollView horizontal>
      <View style={styles.table}>
        {/* Table column headers */}
        <View style={styles.columnHeaderContainer}>
          <Text style={[styles.columnHeader,{width:63}]}>Product</Text>
          <Text style={[styles.columnHeader,{width:35}]}>Qty</Text>
          <Text style={[styles.columnHeader,{width:43}]}>Rate</Text>
          <Text style={[styles.columnHeader,{width:37}]}>Amt</Text>
        </View>

        {/* Table rows */}
       
        {products.map((product, index) => {
          // Display the row only if the product quantity is filled
          if (product.quantity) {
            return (
              <View key={index} style={styles.tableRow}>
                <Text style={[styles.cell, { width: 63 }]}>{product.name || ''}</Text>
                <Text style={[styles.cell, { width: 35 }]}>{product.quantity || ''}</Text>
                <Text style={[styles.cell, { width: 43 }]}>{product.price || ''}</Text>
                <Text style={[styles.cell, { width: 37 }]}>{product.amount || ''}</Text>
              </View>
            );
          } else {
            return null; // Skip rendering the row if quantity is not filled
          }
        })}
      </View>
    </ScrollView>
      
    <View style={styles.bottomBlock}>
      <Text style={styles.totalLabel}>Total: {    calculateTotal(products)} INR</Text>
    </View> 
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

    bottomBlock: {
      // backgroundColor: '#f2f2f2',
      borderColor:'grey',
      borderWidth:1,
      width:'100%',
      padding: 10,
      marginTop: 20,
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    taxLabel: {
      textAlign:'right',
      borderBottomColor:  '#E8E8E8',
      borderBottomWidth:1,
      width:'100%',
      fontSize: 13,
      fontWeight: 'bold',
      color: 'gray',
    },
    totalLabel: {
      fontSize: 14,
      fontWeight: 'bold',
      color: 'black',
    },

    price: {
      color: '#fff',
      fontSize: 12,
      fontWeight: 'bold',
      textAlign: 'right',
      marginTop: 15,
    },

    table: {
      margin: 10,
    },
    columnHeaderContainer: {
      flexDirection: 'row',
    },
    columnHeader: {
      flex: 1,
      borderWidth:1,
      borderColor:'grey',
      paddingVertical: 10,
      paddingHorizontal: 5,
      fontWeight: 'bold',
      textAlign: 'center',
      color:'black'
    },
    tableRow: {
      flexDirection: 'row',
    },
    cell: {
      flex: 1,
      paddingVertical: 10,
      paddingHorizontal: 5,
      borderWidth: 1,
      borderColor: '#D3D3D3',
      textAlign: 'center',
      fontSize:11,
      color: 'black',
    },

    productBoxContainer: {
      elevation: 2, // Apply elevation to this wrapping View
      width:'100%',
      borderRadius: 5,
    },
    productContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 5,
      overflow: 'hidden',
      marginTop:5,
      width:'100%',
    },
    productBox: {
      width: '80%',
      height: 90,
      justifyContent: 'center',
      borderRadius: 5,
    },
    productTitle: {
      fontSize: 16,
      color: 'white',
      textAlign: 'center',
    },
    productPrice: {
      fontSize: 12,
      color: 'white',
      textAlign: 'center',
    },
    quantityInput: {
      backgroundColor:'#fff',
      fontSize: 14,
      borderWidth: 1,
      borderColor: '#84889a',
      padding: 5,
      width: '25%',
      borderRadius: 5,
      color:'black',
      marginLeft:'-7%'
    },
    container: {
      flex: 1,
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
    },
    columnDropdownContainer:{
      alignSelf: 'flex-start',
    },
    Text:{
      color:'blue',
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
      color:'grey'
    },
    dropdownContainer: {
      width: windowWidth * 0.95,
      height: windowHeight * 0.2,
      alignSelf: 'center',
      borderRadius: windowWidth * 0.01,
      zIndex:2,
      color:'grey'
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
      color:'grey'
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
      color:'blue',
    },
    ddownItems: {
      width: windowWidth * 0.95,
      height: windowHeight * 0.05,
      borderBottomWidth: 0.2,
      borderBottomColor: '#8e8e8e',
      justifyContent: 'center',
      color: 'grey',
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
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.3,
      shadowRadius: 6.27,
    },
    submitBtnContainer:{
      marginBottom:-10,
      marginLeft:windowWidth/1.5,
      width:windowWidth/3,
    },
    columnBtnContainer:{
      width:windowWidth*.15,
      height:windowHeight/1-windowHeight,
      marginLeft:10,
    },
  });
    