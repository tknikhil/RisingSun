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

    const isFormTitleFirst = screen === 0;
    const isFormTitleLast = screen === FormTitles.length - 1;

    const ScreenDisplay =()=>{
      if (screen===0) return <CustRegisteration formData={formData} setFormData={setFormData}/>;
      else if (screen===1) return <PersonalDetail formData={formData} setFormData={setFormData}/>;
      else if(screen===2) return <Address formData={formData} setFormData={setFormData}/>;
  }
    const prevButton=()=>{ 
        setScreen ((curentScreen) => curentScreen-1) 
       
    }

    const submitForm=()=>{
      console.log('Submit form')
    }
   
  return (
    <>
    <View style={styles.wrapper}>
      <Text style={{fontSize:18,color:'#9E9EFF',fontWeight:'bold',}}>{FormTitles[screen]}</Text>
      <View>{ScreenDisplay()}</View>
   
    <View style={styles.btnContainer}>
    {!isFormTitleFirst && (
            <Pressable onPress={prevButton} style={styles.buttonSpacing}>
              <Text style={styles.button}>Prev</Text>
            </Pressable>
          )}
          {!isFormTitleLast ? (
            <Pressable onPress={() => setScreen((currentScreen) => currentScreen + 1)} style={styles.buttonSpacing}>
              <Text style={styles.button}>Next</Text>
            </Pressable>
          ) : (
            <Pressable onPress={submitForm} style={styles.buttonSpacing}>
              <Text style={styles.button}>Submit</Text>
            </Pressable>
          )}
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
    justifyContent: 'space-between',
    
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
    buttonSpacing:{
      alignSelf:'center',
      marginHorizontal: '20%',
      width:'30%'
    }
})
export default Form