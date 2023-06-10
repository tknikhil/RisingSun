import { View,StyleSheet,Dimensions} from 'react-native'
import React from 'react'
import { Input } from '../../app-widget'

const CustRegisteration = (formData,setFormData) => {
    // custCode:"",
    // custName:"",
    // custAliasName:"",
    // custType:"",
  return (
    <View style={styles.formContainer}>
      
      <Input placeholder="Customer Code"  secureTextEntry={false}
          onChangeText={(custCode) => setFormData(... formData, custCode)}
          value={formData.custCode}/>

<Input placeholder="Customer Name"  secureTextEntry={false}
          onChangeText={(custName) => setFormData(... formData, custName)}
          value={formData.custName}/>

<Input placeholder="Customer Alias Name"  secureTextEntry={false}
          onChangeText={(custAlias) => setFormData(... formData, custAlias)}
          value={formData.custAlias}/>
    </View>
  )
}


export default CustRegisteration
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles=StyleSheet.create({
  formContainer:{
    margin:'10%',
    width:windowWidth*.7,
    height:'65%',
  }
});