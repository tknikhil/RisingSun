import { View, Text, Pressable, StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import CustRegisteration from './CustRegisteration';
import PersonalDetail from './PersonalDetail';
import Address from './Address';

const Form = () => {
  const [formData, setFormData] = useState({
    // Customer Register
    custCode: '',
    custName: '',
    custAliasName: '',
    custType: '',
    // Personal Detail
    phoneNumber: '',
    email: '',
    country: '',
    state: '',
    city: '',
    // Address
    addressLine1: '',
    addressLine2: '',
  });

  const [screen, setScreen] = useState(0);
  const FormTitles = ['Customer Register', 'Personal Detail', 'Address'];

  const isFormTitleFirst = screen === 0;
  const isFormTitleLast = screen === FormTitles.length - 1;

  const ScreenDisplay = () => {
    if (screen === 0) return <CustRegisteration formData={formData} setFormData={setFormData} />;
    else if (screen === 1) return <PersonalDetail formData={formData} setFormData={setFormData} />;
    else if (screen === 2) return <Address formData={formData} setFormData={setFormData} />;
  };

  const prevButton = () => {
    setScreen((currentScreen) => currentScreen - 1);
  };

  const submitForm = () => {
    console.log('Submit form');
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.title}>{FormTitles[screen]}</Text>
      <View style={styles.formContainer}>{ScreenDisplay()}</View>

      <View style={styles.btnContainer}>
        {!isFormTitleFirst && (
          <Pressable onPress={prevButton} style={styles.button}>
            <Text style={styles.buttonText}>Prev</Text>
          </Pressable>
        )}
        {!isFormTitleLast ? (
          <Pressable onPress={() => setScreen((currentScreen) => currentScreen + 1)} style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </Pressable>
        ) : (
          <Pressable onPress={submitForm} style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
   padding:5
  },
  title: {
    fontSize: 18,
    color: '#9E9EFF',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
   
  },
  btnContainer: {
    // backgroundColor:'grey',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    // marginBottom: 20,
  },
  button: {
    backgroundColor: '#5D9C59',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Form;