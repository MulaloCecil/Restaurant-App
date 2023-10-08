import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReceiptPage = ({ route }) => {
  const { items, total } = route.params;
 
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Receipt</Text>
      {items.map((item) => (
        <View key={item.id} style={styles.item}>
          <Text>{item.name}</Text>
          <Text>R{item.price.toFixed(2)}</Text>
        </View>
      ))}
      <Text style={styles.total}>Total: R{total}</Text>
      <Text style={styles.dateTime}>Date and Time: {new Date().toLocaleString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    color: 'rgba(255, 60, 60, 0.99)',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  total: {
    color: 'rgba(255, 60, 60, 0.99)',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  dateTime: {
    marginTop: 10,
  },
});

export default ReceiptPage;