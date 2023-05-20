import { TouchableOpacity, Text, StyleSheet} from 'react-native'
import React from 'react'

const Button = ({ onPress }) => {
    return (
      <TouchableOpacity style={styles.loginButton} onPress={onPress}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    );
  };

  const styles=StyleSheet.create({
    loginButton: {
        left:115,
        backgroundColor: '#00a300', // Green logo color
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
      },
      loginButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF', // White login button text color
      },
  });

export default Button