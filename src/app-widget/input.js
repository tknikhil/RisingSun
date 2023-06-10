import { StyleSheet,TextInput } from 'react-native'
import React from 'react'

const Input = ({ placeholder, secureTextEntry, onChangeText, value }) => {
    return (
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        value={value}
      />
    );
  };

  const styles=StyleSheet.create({
   
      input: {
        height: 40,
        width:'100%',
        backgroundColor:'#FFFFFF',
        borderColor: '#0000FF', // Blue input border color
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius:5,
        color:'#0000FF'
      },
  });

export default Input