import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const CardPage = ({ route }) => {
  const navigation = useNavigation();
  const { cartItems, cartTotal } = route.params;
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  const [cvv, setCVV] = useState('');
  const [fullName, setFullName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [yyMm, setYyMm] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handlePayment = () => {
    if (!fullName || !cardNumber || !yyMm || !cvv) {
      alert('Please fill in all required fields.');
      return;
    }

    if (cardNumber.length !== 16) {
      alert('Card number should be 16 digits.');
      return;
    }

    if (yyMm.length !== 4) {
      alert('yy/mm should be 4 digits.');
      return;
    }

    if (cvv.length !== 3) {
      alert('CVV should be 3 digits.');
      return;
    }

    if (!/^[0-9]*$/.test(cvv)) {
      alert('CVV should only contain numbers.');
      return;
    }

    if (!/^[0-9]*$/.test(cardNumber) || !/^[0-9]*$/.test(yyMm)) {
      alert('Card number and yy/mm should only contain numbers.');
      return;
    }

    setIsPaymentSuccessful(true);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    navigation.navigate('Receipt', {
      items: cartItems,
      total: cartTotal,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack}>
          <Ionicons name="arrow-back" size={30} color="rgba(255,60,60,0.99)" />
        </TouchableOpacity>
      </View>
      <Image
        source={require('../assets/Credit-Card-PNG-Pic.png')}
        style={styles.cardImage}
      />
      <TextInput
        style={styles.input}
        placeholder="Full Names"
        value={fullName}
        onChangeText={(text) => setFullName(text)}
        required
      />
      <TextInput
        style={styles.input}
        placeholder="Card Number (16 digits)"
        value={cardNumber}
        onChangeText={(text) => setCardNumber(text)}
        keyboardType="numeric"
        maxLength={16}
        required
      />
      <View style={styles.inputRow}>
        <TextInput
          style={styles.inputSmall}
          placeholder="yy/mm (4 digits)"
          value={yyMm}
          onChangeText={(text) => setYyMm(text)}
          keyboardType="numeric"
          maxLength={4}
          required
        />
        <TextInput
          style={styles.inputSmall}
          placeholder="CVV (3 digits)"
          value={cvv}
          onChangeText={(text) => setCVV(text)}
          keyboardType="numeric"
          maxLength={3}
          required
        />
      </View>
      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.payButtonText}>Pay</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Payment Successful!</Text>
            <TouchableOpacity style={styles.okButton} onPress={closeModal}>
              <Text style={styles.okButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 70,
  },
  cardImage: {
    width: '100%',
    height: 201,
    resizeMode: 'cover',
    marginBottom: 20,
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  inputSmall: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
  },
  payButton: {
    backgroundColor: 'rgba(255,60,60,0.99)',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  payButtonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  // Modal styles
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  okButton: {
    backgroundColor: 'rgba(255,60,60,0.99)',
    padding: 10,
    borderRadius: 8,
  },
  okButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CardPage;
