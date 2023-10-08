import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
  TextInput,
  SafeAreaView,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import Cart from './Cart';

const burgerData = [
  {
    id: '1',
    name: 'Royal Burger',
    description: 'monate',
    price: 5.99,
    image: require('../assets/royal.jpeg'),
  },
  {
    id: '2',
    name: 'Beef Burger',
    price: 6.99,
    image: require('../assets/beef.jpg'),
  },
  {
    id: '3',
    name: 'Chicken Burger',
    price: 5.99,
    image: require('../assets/chicken.png'),
  },
  {
    id: '4',
    name: 'Patty Burger',
    price: 6.99,
    image: require('../assets/patty.jpg'),
  },

  {
    id: '5',
    name: 'Big John',
    price: 5.99,
    image: require('../assets/big-john.jpeg'),
  },
  {
    id: '6',
    name: 'Mizo Phyll',
    price: 6.99,
    image: require('../assets/mizo.jpeg'),
  },
];

const chipsData = [
  {
    id: '6',
    name: 'Small Fries',
    price: 5.99,
    image: require('../assets/small-chips.jpg'),
  },
  {
    id: '7',
    name: 'Medium Fries',
    price: 6.99,
    image: require('../assets/French-fries-deliciouse-Medium.jpg'),
  },
  {
    id: '8',
    name: 'Large Fries',
    price: 6.99,
    image: require('../assets/large-chips.png'),
  },
  {
    id: '9',
    name: 'Mix Alabama',
    price: 6.99,
    image: require('../assets/0001084_chips-fully-loaded-medium_550.jpeg'),
  },
  {
    id: '10',
    name: 'Big Dude',
    price: 6.99,
    image: require('../assets/585abfc54f6ae202fedf2935.png'),
  },
  {
    id: '11',
    name: 'Master Castro',
    price: 6.99,
    image: require('../assets/chips.png'),
  },
];

const drinksData = [
  {
    id: '12',
    name: 'Grape Fruit',
    price: 5.99,
    image: require('../assets/cold-grapefruit-juice.jpg'),
  },
  {
    id: '13',
    name: 'Diet Pepsi',
    price: 6.99,
    image: require('../assets/diet-pepsi-fountain-1-e1591902794438.jpg'),
  },
  {
    id: '14',
    name: 'Sprite Lemon',
    price: 5.99,
    image: require('../assets/sprite.jpg'),
  },
  {
    id: '15',
    name: 'Fresh Cola',
    price: 6.99,
    image: require('../assets/fresh-cola-drink-glass.jpg'),
  },
  {
    id: '16',
    name: 'Ice Tea',
    price: 6.99,
    image: require('../assets/fresh-ice-tea-with-ice-strawberries.jpg'),
  },

  {
    id: '17',
    name: 'Fanta Mango',
    price: 6.99,
    image: require('../assets/Fanta-Mango.jpg'),
  },
];

const MenuPage = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Burgers');
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>Price: R{item.price.toFixed(2)}</Text>
      <TouchableOpacity
        style={styles.addIconContainer}
        onPress={() => addToCart(item)}>
        <Icon name="add-circle" size={30} color="rgba(255, 60, 60, 0.99)" />
      </TouchableOpacity>
    </View>
  );

  const addToCart = (item) => {
    const updatedCart = [...cartItems];
    const existingItem = updatedCart.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      updatedCart.push({ ...item, quantity: 1 });
    }

    setCartItems(updatedCart);
    setCartTotal(cartTotal + item.price);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const onCheckout = () => {};

  const onClearCart = () => {
    setCartItems([]);
    setCartTotal(0);
  };

  const renderTabContent = () => {
    if (isCartOpen) {
      return (
        <Cart
          cartItems={cartItems}
          cartTotal={cartTotal}
          onCheckout={onCheckout}
          onClearCart={onClearCart}
        />
      );
    }

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
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Account')}>
          <Icon name="person" size={30} color="rgba(255, 60, 60, 0.99)" />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleCart}>
          <Icon name="cart" size={30} color="rgba(255, 60, 60, 0.99)" />
        </TouchableOpacity>
      </View>
      <Image
        style={styles.natureIcon}
        resizeMode="cover"
        source={require('../assets/Nature.png')}
      />
      <View style={styles.mainContent}>
        <View style={styles.deliveryCard}>
          <View style={styles.deliveryTextContainer}>
            <Text style={styles.deliveryText}>
              The Fastest in Food Delivery
            </Text>

            <TextInput style={styles.input} placeholder="Search" />
          </View>

          <Image
            source={require('../assets/scooter.png')}
            style={styles.scooterImage}
          />
        </View>
      </View>

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
  input: {
    width: '50',
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 5,
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
