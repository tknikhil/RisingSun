import { View,StyleSheet,Dimensions} from 'react-native'
import React from 'react'
import { Input } from '../../app-widget'

const PersonalDetail = (formData,setFormData) => {
  // phoneNumber:"",
  // email:"",
  // country:"",
  // state:"",
  // city:"",
  return (
    <View style={styles.personalDetailConatiner}>
    <Input placeholder="Phone No."  secureTextEntry={false}
        onChangeText={(phoneNumber) => setFormData(... formData, phoneNumber)}
        value={formData.phoneNumber}/>
    <Input placeholder="Email"  secureTextEntry={false}
        onChangeText={(email) => setFormData(... formData, email)}
        value={formData.email}/>
    <Input placeholder="Country"  secureTextEntry={false}
        onChangeText={(country) => setFormData(... formData, country)}
        value={formData.country}/>
    <Input placeholder="State"  secureTextEntry={false}
        onChangeText={(state) => setFormData(... formData, state)}
        value={formData.state}/>
    <Input placeholder="City"  secureTextEntry={false}
        onChangeText={(city) => setFormData(... formData, city)}
        value={formData.city}/>
  </View>
  )
}


export default PersonalDetail
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles=StyleSheet.create({
 
});