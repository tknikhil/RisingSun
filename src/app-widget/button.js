import { TouchableOpacity, Text, StyleSheet} from 'react-native'
import React from 'react'

const Button = ({ onPress,text }) => {
    return (
      <TouchableOpacity style={styles.Button} onPress={onPress}>
        <Text style={styles.ButtonText}>{text}</Text>
      </TouchableOpacity>
    );
  };

  const styles=StyleSheet.create({
    Button: {
      alignSelf: 'flex-end',
      // marginLeft: 'auto',
        width:'25%',
        height:40,
        right:'10%',
        marginBottom:'10%',
        justifyContent:'center',
        backgroundColor: '#008000', // Green logo color
        // paddingVertical: 10,
        // paddingHorizontal: 20,
        alignItems:'center',
        borderRadius: 5,
      },
      ButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF', // White login button text color
      },
  });

export default Button