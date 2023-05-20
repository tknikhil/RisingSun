import React, { useState ,useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Input,Button} from '../app-widget';
// import data from './../../assets/json-request/login.json'


const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   const [error, setError] = useState('');
  const [login, setUsers] = useState([]);

  // useEffect(() => {
  //   // Fetch user data from JSON file
  //   fetch('./../../assets/json-request/login.json')
  //     .then((response) => response.json())
  //     .then((data) => setUsers(data))
  //     .catch((error) => console.error(error));
  // }, []);
  useEffect(() => {
    // Load user data from JSON file
    const userData = require('../../assets/json-request/login.json');
    setUsers(userData);
    print(userData);
    console.log(userData);
  }, []);

  const handleLogin = () => {
    print("handleLogin");
    console.log("handleLogin");
    // Find the user by username and password
    const user = login.find(
      (u) => u.email === email && u.password === password
    );
    console.log(user);
    if (user) {
      // User found, navigate to the appropriate screen based on role
      if (user.role === 'admin') {
        // Display admin screen
        console.log('Display admin screen');
        print('Display admin screen');
       navigation.navigate('Admin');
        
      } else if (user.role === 'sales') {
        // Display sales screen
        navigation.navigate('Sales');
        console.log('Display sales screen'); 
        print('Display sales screen');
      }
    }
    else {
      setError('Invalid username or password');
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
      <Text style={styles.logoText}>
          <Text style={styles.blueText}>Risingsun</Text> <Text style={styles.greenText}>Agencies</Text>
        </Text>
      </View>
      <View style={styles.inputContainer}>
      <Input
          placeholder="Email"
          secureTextEntry={false}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Input
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>
      <Button onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // White background color
  },
  logoContainer: {
    marginBottom: 50,
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  blueText: {
    color: '#4747ff', // Blue color
  },
  greenText: {
    color: '#76a901', // Green color
  },
 
  inputContainer: {
    marginBottom: 20,
    width: '80%',
  },
});

export default LoginScreen;