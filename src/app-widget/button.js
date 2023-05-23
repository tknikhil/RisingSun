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
        left:'25%',
        width:'25%',
        backgroundColor: '#00a300', // Green logo color
        paddingVertical: 10,
        paddingHorizontal: 20,
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