import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const window = Dimensions.get('window');
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const Home = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    'IndieFlower-Regular': require('../assets/fonts/IndieFlower-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const handleSkipPress = () => {
    navigation.navigate('Menu');
  };

  const handleGetStartedPress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.welcome}>
      <TouchableOpacity style={styles.skipButton} onPress={handleSkipPress}>
        <Text style={styles.buttonSkip}>SKIP</Text>
      </TouchableOpacity>
      <Image source={require('../assets/image-1.png')} style={styles.image1} />
      <Image
        source={require('../assets/ellipse-1.jpeg')}
        style={styles.ellipse1}
      />
      <Text style={styles.fastRescuedFood}>
        Fast, rescued food at your service.
      </Text>
      <View style={styles.rectangle1}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleGetStartedPress}>
          <Text style={styles.loginButtonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  welcome: {
    backgroundColor: 'rgba(255, 60, 60, 0.99)',
    borderRadius: 15,
    width: window.width,
    height: window.height,
    position: 'relative',
    overflow: 'hidden',
    marginTop: 25,
  },
  rectangle1: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    width: window.width * 0.55,
    height: window.height * 0.06,
    position: 'absolute',
    left: window.width * 0.22,
    top: window.height * 0.86,
  },
  skipButton: {
    position: 'absolute',
    left: window.width * 0.73,
    top: window.height * 0.017,
  },

  buttonSkip: {
    color: '#ffffff',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: window.height * 0.022,
    paddingLeft: 60,
  },
  image1: {
    borderRadius: 15,
    width: window.width * 0.96,
    height: window.height * 0.35,
    position: 'absolute',
    left: window.width * 0.02,
    top: window.height * 0.45,
  },
  ellipse1: {
    borderRadius: window.width * 0.19,
    width: window.width * 0.38,
    height: window.width * 0.38,
    position: 'absolute',
    left: window.width * 0.29,
    top: window.height * 0.07,
  },
  fastRescuedFood: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: window.height * 0.05,
    fontFamily: 'IndieFlower-Regular',
    position: 'absolute',
    left: window.width * 0.07,
    top: window.height * 0.26,
    width: window.width * 0.86,
    height: window.height * 0.34,
  },

  loginButton: {
    position: 'absolute',
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 15,
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  loginButtonText: {
    color: 'rgba(255, 60, 60, 0.90)',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default Home;