import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const [isLoginActive, setIsLoginActive] = useState(false); // To track active tab
  const navigation = useNavigation();

  const handleTabChange = (isLogin) => {
    setIsLoginActive(isLogin);
  };

  const handleSignup = () => {
    // Implement your signup logic here
  };

  const handleTabPress = () => {
    if (!isLoginActive) {
      navigation.navigate('Login'); // Navigate to the Login screen
    } else {
      setIsLoginActive(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/ellipse-1.jpeg')}
            style={styles.logo}
          />
        </View>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tabButton, isLoginActive && styles.activeTab]}
            onPress={() => handleTabChange(true)}>
            <Text
              style={[styles.tabText, isLoginActive && styles.activeTabText]}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, !isLoginActive && styles.activeTab]}
            onPress={() => handleTabChange(false)}>
            <Text
              style={[styles.tabText, !isLoginActive && styles.activeTabText]}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <TextInput style={styles.input} placeholder="Full Names" />
        <TextInput style={styles.input} placeholder="Mobile Number" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
          <Text style={styles.signupButtonText}>Signup</Text>
        </TouchableOpacity>
        <View style={styles.loginLink}>
          <Text>Already a member?</Text>
          <TouchableOpacity onPress={handleTabPress}>
            <Text style={styles.loginLinkText}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    borderRadius: 77,
    width: 154,
    height: 154,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tabButton: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: 'transparent',
  },
  activeTab: {
    borderColor: '#FF0000', // Your active tab indicator color
  },
  tabText: {
    fontSize: 20,
  },
  activeTabText: {
    fontWeight: 'bold',
  },
  content: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  signupButton: {
    backgroundColor: 'rgba(255, 60, 60, 0.80)',
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  signupButtonText: {
    color: 'white', // Your button text color
    fontWeight: 'bold',
    fontSize: 30,
  },
  loginLink: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginLinkText: {
    color: 'blue', // Your link color
    fontSize: 18,
  },
});

export default RegisterScreen;