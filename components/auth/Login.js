import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const LoginScreen = () => {
  const [isLoginActive, setIsLoginActive] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleTabChange = (isLogin) => {
    setIsLoginActive(isLogin);
    if (!isLogin) {
      navigation.navigate("Register");
    }
  };

  const firebaseConfig = {
    apiKey: "AIzaSyAE9IKa0BWiNq0qir7TJnyvLFPQ3qrb-Uc",
    authDomain: "restaurant-app-5dcf0.firebaseapp.com",
    projectId: "restaurant-app-5dcf0",
    storageBucket: "restaurant-app-5dcf0.appspot.com",
    messagingSenderId: "10317499918",
    appId: "1:10317499918:web:6ac4ce63575aea2a0d765f",
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleLogin = async () => {
    setLoading(true);
    try {
      if (email === "admin@email.com" && password === "@Admin123") {
        setLoading(false);
        alert("Logged in as admin");
        navigation.navigate("Form");
      } else {
        const response = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        if (response.user.uid) {
          setLoading(false);
          alert("Logged in as a regular user");
          navigation.navigate("Menu", { uid: response.user.uid });
        } else {
          console.log("login failed:", response.message);
        }
      }
    } catch (error) {
      console.log(error);
      alert("Sign in failed: " + error.message);
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const { user } = await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/ellipse-1.jpeg")}
            style={styles.logo}
          />
        </View>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tabButton, isLoginActive && styles.activeTab]}
            onPress={() => handleTabChange(true)}
          >
            <Text
              style={[styles.tabText, isLoginActive && styles.activeTabText]}
            >
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tabButton, !isLoginActive && styles.activeTab]}
            onPress={() => handleTabChange(false)}
          >
            <Text
              style={[styles.tabText, !isLoginActive && styles.activeTabText]}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          value={email}
          placeholder="Username Or Mobile Number"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            secureTextEntry={!isPasswordVisible}
            value={password}
            autoCapitalize="none"
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.showHidePasswordButton}
          >
            <Icon
              name={isPasswordVisible ? "eye-slash" : "eye"}
              size={20}
              color="#000"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Or</Text>
        <TouchableOpacity
          style={styles.googleButton}
          onPress={handleGoogleLogin}
        >
          <View style={styles.googleButtonContent}>
            <Icon name="google" size={30} color="#DB4437" />
            <Text style={styles.googleButtonText}>Continue with Google</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D9D9D9",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: "100%",
    alignItems: "center",
  },
  logoContainer: {
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  tabContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  tabButton: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    borderBottomWidth: 2,
    borderColor: "transparent",
  },
  activeTab: {
    borderColor: "#FF0000",
  },
  tabText: {
    fontSize: 20,
  },
  activeTabText: {
    fontWeight: "bold",
  },
  content: {
    width: "100%",
    alignItems: "center",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  passwordContainer: {
    position: "relative",
    width: "100%",
  },
  passwordInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  showHidePasswordButton: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  forgotPassword: {
    textAlign: "right",
    color: "#FF0000",
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: "rgba(255, 60, 60, 0.80)",
    padding: 10,
    borderRadius: 30,
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  loginButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },

  googleButton: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 30,
    alignItems: "center",
    width: "100%",
    marginTop: 10,
  },
  googleButtonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  googleButtonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
    marginLeft: 10,
  },
  logo: {
    borderRadius: 77,
    width: 154,
    height: 154,
  },
});

export default LoginScreen;
