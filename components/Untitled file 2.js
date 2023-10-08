import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const burgerData = [
  {
    id: '1',
    name: 'Burger 1',
    price: 5.99,
    image: require('../assets/hamburger2.png'),
  },
  {
    id: '2',
    name: 'Burger 2',
    price: 6.99,
    image: require('../assets/hamburger.png'),
  },
  {
    id: '1',
    name: 'Burger 1',
    price: 5.99,
    image: require('../assets/hamburger2.png'),
  },
  {
    id: '2',
    name: 'Burger 2',
    price: 6.99,
    image: require('../assets/hamburger.png'),
  },

  {
    id: '1',
    name: 'Burger 1',
    price: 5.99,
    image: require('../assets/hamburger2.png'),
  },
  {
    id: '2',
    name: 'Burger 2',
    price: 6.99,
    image: require('../assets/hamburger.png'),
  },
  // Add more burger items as needed
];

const chipsData = [
  {
    id: '1',
    name: 'Burger 1',
    price: 5.99,
    image: require('../assets/hamburger2.png'),
  },
  {
    id: '2',
    name: 'Burger 2',
    price: 6.99,
    image: require('../assets/hamburger.png'),
  },
];

const drinksData = [
  {
    id: '1',
    name: 'Burger 1',
    price: 5.99,
    image: require('../assets/hamburger2.png'),
  },
  {
    id: '2',
    name: 'Burger 2',
    price: 6.99,
    image: require('../assets/hamburger.png'),
  },
  {
    id: '1',
    name: 'Burger 1',
    price: 5.99,
    image: require('../assets/hamburger2.png'),
  },
  {
    id: '2',
    name: 'Burger 2',
    price: 6.99,
    image: require('../assets/hamburger.png'),
  },
];

const MenuPage = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Burgers');

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>Price: ${item.price.toFixed(2)}</Text>
      <TouchableOpacity style={styles.addIconContainer}>
        <Ionicons name="add-circle" size={30} color="rgba(255, 60, 60, 0.99)" />
      </TouchableOpacity>
    </View>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Burgers':
        return (
          <FlatList
            data={burgerData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
            contentContainerStyle={styles.itemsContainer}
          />
        );
      case 'Chips':
        return (
          <FlatList
            data={chipsData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
            contentContainerStyle={styles.itemsContainer}
          />
        );
      case 'Drinks':
        return (
          <FlatList
            data={drinksData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
            contentContainerStyle={styles.itemsContainer}
          />
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <Ionicons name="menu" size={30} color="rgba(255, 60, 60, 0.99)" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Account')}>
          <Ionicons name="person" size={30} color="rgba(255, 60, 60, 0.99)" />
        </TouchableOpacity>
      </View>
      <Image
        style={styles.natureIcon}
        resizeMode="cover"
        source={require('../assets/Nature.png')}
      />
      {/* Main Content Section */}
      <View style={styles.mainContent}>
      
        <View style={styles.deliveryCard}>
          <View style={styles.deliveryTextContainer}>
            <Text style={styles.deliveryText}>
              The Fastest in Food Delivery
            </Text>
            
            <TouchableOpacity style={styles.orderButton}>
              <Text style={styles.orderButtonText}>Order Now</Text>
            </TouchableOpacity>
          </View>
          
          <Image
            source={require('../assets/scooter.png')}
            style={styles.scooterImage}
          />
          
        </View>
      </View>
      

      {/* Categories Section */}
      <View style={styles.categories}>
        <Text style={styles.categoriesText}>Categories</Text>
        <View style={styles.categoryButtons}>
          <TouchableOpacity
            style={[
              styles.categoryButton,
              activeTab === 'Burgers' && styles.activeTabButton,
            ]}
            onPress={() => setActiveTab('Burgers')}>
            <Text style={styles.categoryButtonText}>Burgers</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.categoryButton,
              activeTab === 'Chips' && styles.activeTabButton,
            ]}
            onPress={() => setActiveTab('Chips')}>
            <Text style={styles.categoryButtonText}>Chips</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.categoryButton,
              activeTab === 'Drinks' && styles.activeTabButton,
            ]}
            onPress={() => setActiveTab('Drinks')}>
            <Text style={styles.categoryButtonText}>Drinks</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tab Content */}
      {renderTabContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  mainContent: {
    alignItems: 'center',
    marginTop: 20,
  },

  natureIcon: {
    top: '10%',
    width: '100%',
    height: 185,
    left: 1,
    position: 'absolute',
    borderRadius: '15px',
  },


  deliveryCard: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deliveryTextContainer: {
    flex: 1,
  },
  deliveryText: {
    fontSize: 20,
    fontWeight: 'medium',
    color: 'rgba(255, 60, 60, 0.99)',
  },
  orderButton: {
    backgroundColor: 'rgba(255, 60, 60, 0.99)',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  orderButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  scooterImage: {
    width: 200,
    height: 220,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    marginBottom: -80,
    marginLeft: 10,
  },
  categories: {
    marginTop: 20,
  },
  categoriesText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    color: 'rgba(255, 60, 60, 0.99)',
  },
  categoryButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  categoryButton: {
    flex: 1,
    backgroundColor: 'rgba(128, 128, 128, 0.50)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  activeTabButton: {
    backgroundColor: 'rgba(255, 60, 60, 0.99)',
  },
  categoryButtonText: {
    fontSize: 16,
    textAlign: 'center',
  },
  itemsContainer: {
    paddingHorizontal: 10,
    marginTop: 20,
  },
  itemContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 17,
    padding: 10,
    margin: 5,
    alignItems: 'center',
  },
  itemImage: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  itemPrice: {
    fontSize: 14,
    color: 'gray',
  },
  addIconContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});

export default MenuPage;
