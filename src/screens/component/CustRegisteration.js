import { View, Text } from 'react-native'
import React from 'react'
import { Input } from '../../app-widget'

const CustRegisteration = (formData,setFormData) => {
    // custCode:"",
    // custName:"",
    // custAliasName:"",
    // custType:"",
  return (
    <View>
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