import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const CartPage = ({ cartItems, cartTotal, onClearCart }) => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Text>{item.productName}</Text>
      <Text>Quantity: {item.quantity}</Text>
      <Text>Price: R{item.price}</Text>
    </View>
  );

  const handleCheckout = () => {
    navigation.navigate("Card", {
      cartTotal: cartTotal,
      cartItems: cartItems,
    });
  };

  const parsedCartTotal = parseFloat(cartTotal);
  const formattedCartTotal = `R${parsedCartTotal.toFixed(2)}`;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cart</Text>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.total}>Cart Total: {formattedCartTotal}</Text>
      <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
        <Text style={styles.text}>Checkout</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.clearButton} onPress={onClearCart}>
        <Text style={styles.text}>Clear Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    color: "rgba(255, 60, 60, 0.99)",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  total: {
    color: "rgba(255, 60, 60, 0.99)",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  checkoutButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 15,
    marginTop: 20,
    alignItems: "center",
  },
  clearButton: {
    backgroundColor: "rgba(255, 60, 60, 0.99)",
    padding: 10,
    borderRadius: 15,
    marginTop: 10,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default CartPage;
