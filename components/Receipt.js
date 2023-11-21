import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ReceiptPage = ({ route, navigation }) => {
  const { items, total } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Receipt</Text>
      {items.map((item) => (
        <View key={item.id} style={styles.item}>
          <Text>{item.productName}</Text>
          <Text>R{parseFloat(item.price).toFixed(2)}</Text>
        </View>
      ))}
      <Text style={styles.total}>Total: R{total.toFixed(2)}</Text>

      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => navigation.navigate("Menu")}
        >
          <Ionicons name="home" size={28} color="white" />
          <Text style={styles.homeButtonText}>Home</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.dateTime}>
        Date and Time: {new Date().toLocaleString()}
      </Text>
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
    textAlign: "center",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  total: {
    color: "rgba(255, 60, 60, 0.99)",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
  },
  homeButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 60, 60, 0.99)",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  homeButtonText: {
    color: "white",
    marginLeft: 10,
    fontSize: 16,
  },
  dateTime: {
    marginTop: 10,
  },
});

export default ReceiptPage;
