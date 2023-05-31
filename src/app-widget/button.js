import { TouchableOpacity, Text, StyleSheet} from 'react-native'
import React from 'react'

const Button = ({ onPress,text }) => {
    return (
      <TouchableOpacity style={[styles.Button]} onPress={onPress}>
        <Text style={styles.ButtonText}>{text}</Text>
      </TouchableOpacity>
    );
  };

  const styles=StyleSheet.create({
    Button: {
      alignSelf: 'flex-end',
      // marginLeft: 'auto',
        width:'100%',
        height:30,
        right:'10%',
        marginBottom:'10%',
        justifyContent:'center',
        backgroundColor: '#5D9C59', // Green logo color
        // paddingVertical: 10,
        // paddingHorizontal: 20,
        alignItems:'center',
        borderRadius: 5,
      },
      ButtonText: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#FFFFFF', // White login button text color
      },
  });

export default Button