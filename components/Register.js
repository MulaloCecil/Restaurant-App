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
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const [isLoginActive, setIsLoginActive] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigation = useNavigation();

  const handleTabChange = (isLogin) => {
    setIsLoginActive(isLogin);
    if (isLogin) {
      navigation.navigate('Login');
    }
  };

  const handleRegister = () => {};

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const handleTabPress = () => {
    if (!isLoginActive) {
      navigation.navigate('Login');
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
        <TextInput style={styles.input} placeholder="Email" />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            secureTextEntry={!isPasswordVisible}
          />
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.showHidePasswordButton}>
            <Icon
              name={isPasswordVisible ? 'eye-slash' : 'eye'}
              size={20}
              color="#000"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Confirm Password"
            secureTextEntry={!isPasswordVisible}
          />
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.showHidePasswordButton}>
            <Icon
              name={isPasswordVisible ? 'eye-slash' : 'eye'}
              size={20}
              color="#000"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleRegister}>
          <Text style={styles.registerButtonText}>Register</Text>
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
    borderColor: '#FF0000',
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
  passwordContainer: {
    position: 'relative',
    width: '100%',
  },
  passwordInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  showHidePasswordButton: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  registerButton: {
    backgroundColor: 'rgba(255, 60, 60, 0.80)',
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  registerButtonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },

  loginLink: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginLinkText: {
    color: 'blue',
    fontSize: 18,
  },
});

export default RegisterScreen;
