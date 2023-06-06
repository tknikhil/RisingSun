import { View, Text ,Pressable,StyleSheet} from 'react-native'
import React ,{ useState } from 'react'
import CustRegisteration from './CustRegisteration';
import PersonalDetail from './PersonalDetail';
import Address from './Address';


const Form = () => {
    const [formData,setFormData] = useState({
    // Customer Register
        custCode:"",
        custName:"",
        custAliasName:"",
        custType:"",
    // Personal Detail
        phoneNumber:"",
        email:"",
        country:"",
        state:"",
        city:"",
    // Address
        addressLine1:"",
        addressLine2:"",
    });    

    const [screen,setScreen] = useState(0)
    const FormTitles =[
        "Customer Register",
        "Personal Detail",
        "Address",
    ]

    const ScreenDisplay =()=>{
      if (screen===0) return <CustRegisteration formData={formData} setFormData={setFormData}/>;
      else if (screen===1) return <PersonalDetail formData={formData} setFormData={setFormData}/>;
      else if(screen===2) return <Address formData={formData} setFormData={setFormData}/>;
  }
    const prevButton=()=>{ 
        setScreen ((curentScreen) => curentScreen-1) 
       
    }
   
  return (
    <>
    <View style={styles.wrapper}>
      <Text style={{fontSize:15}}>{FormTitles[screen]}</Text>
      <View>{ScreenDisplay()}</View>
   
    <View style={styles.btnContainer}>
      <Pressable disabled={screen===0} onPress={prevButton}>
        <Text style={styles.button}>Prev</Text>
      </Pressable>
      <Pressable disabled={screen===2} onPress={nextButton=()=>{
         setScreen ((curentScreen) => curentScreen+1)
      }}>
        <Text  style={styles.button}>Next</Text>
      </Pressable>
    </View>

    </View>
    </>
  )
}

const styles=StyleSheet.create({
    wrapper:{
        display: 'flex',
        alignItems: 'center',
    },
    btnContainer: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        alignContent: 'space-between'
    },
    button: {
        // alignSelf: 'flex-end',
        width:'100%',
        height:25,
        right:'10%',
        marginBottom:'10%',
        justifyContent:'center',
        backgroundColor: '#5D9C59', // Green logo color
        alignItems:'center',
        borderRadius: 5,
        fontSize: 11,
        fontWeight: 'bold',
        color: '#FFFFFF',
        paddingVertical:5,
        paddingHorizontal:10 ,
        // marginLeft:40,
        textAlign:'center'
    },
})
export default Form