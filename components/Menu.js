import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
  TextInput,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Cart from "./Cart";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

const MenuPage = ({ navigation }) => {
  const [topData, setTopData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  var arayProd = [];
  const fetchProducts = async () => {
    try {
      const q = query(
        collection(db, "products"),
        where("category", "==", selectedCategory.trim().toLocaleLowerCase())
      );
      const all = collection(db, "products");
      const querySnapshot = await getDocs(selectedCategory == "All" ? all : q);
      arayProd = [];
      querySnapshot.forEach((doc) => {
        arayProd.push({ id: doc.id, ...doc.data() });
      });
      setTopData(arayProd);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.productName}</Text>
      <Text style={styles.itemName}>Weight: {item.weight}</Text>
      <Text style={styles.itemPrice}>Price: R{item.price}</Text>
      <TouchableOpacity
        style={styles.addIconContainer}
        onPress={() => addToCart(item)}
      >
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
      existingItem.totalPrice =
        existingItem.quantity * parseFloat(existingItem.price);
    } else {
      const newItem = {
        ...item,
        quantity: 1,
        totalPrice: parseFloat(item.price),
      };
      updatedCart.push(newItem);
    }

    const total = updatedCart.reduce(
      (acc, cartItem) => acc + cartItem.totalPrice,
      0
    );
    setCartItems(updatedCart);
    setCartTotal(total);
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

    switch (selectedCategory) {
      case "All":
        return (
          <FlatList
            data={topData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
            contentContainerStyle={styles.itemsContainer}
          />
        );
      case "Burgers":
        return (
          <FlatList
            data={topData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
            contentContainerStyle={styles.itemsContainer}
          />
        );
      case "Chips":
        return (
          <FlatList
            data={topData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
            contentContainerStyle={styles.itemsContainer}
          />
        );
      case "Drinks":
        return (
          <FlatList
            data={topData}
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

  const filterProductsByCategory = (category) => {
    setSelectedCategory(category);
    fetchProducts();
  };

  const filteredTopData = topData.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Prof")}>
          <Icon name="person" size={30} color="rgba(255, 60, 60, 0.99)" />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleCart}>
          <Icon name="cart" size={30} color="rgba(255, 60, 60, 0.99)" />
        </TouchableOpacity>
      </View>
      <Image
        style={styles.natureIcon}
        resizeMode="cover"
        source={require("../assets/Nature.png")}
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
            source={require("../assets/scooter.png")}
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
              selectedCategory === "All" && styles.activeTabButton,
            ]}
            onPress={() => filterProductsByCategory("All")}
          >
            <Text style={styles.categoryButtonText}>All</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.categoryButton,
              selectedCategory === "Burgers" && styles.selectedCategoryButton,
            ]}
            onPress={() => filterProductsByCategory("Burgers")}
          >
            <Text style={styles.categoryButtonText}>Burgers</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.categoryButton,
              selectedCategory === "Chips" && styles.activeTabButton,
            ]}
            onPress={() => filterProductsByCategory("Chips")}
          >
            <Text style={styles.categoryButtonText}>Chips</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.categoryButton,
              selectedCategory === "Drinks" && styles.activeTabButton,
            ]}
            onPress={() => filterProductsByCategory("Drinks")}
          >
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
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  mainContent: {
    alignItems: "center",
    marginTop: 20,
  },

  natureIcon: {
    top: "10%",
    width: "100%",
    height: 185,
    left: 1,
    position: "absolute",
    borderRadius: "15px",
  },
  input: {
    width: "50",
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 5,
  },
  deliveryCard: {
    backgroundColor: "transparent",
    borderRadius: 10,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deliveryTextContainer: {
    flex: 1,
  },
  deliveryText: {
    fontSize: 20,
    fontWeight: "medium",
    color: "rgba(255, 60, 60, 0.99)",
  },

  scooterImage: {
    width: 200,
    height: 220,
    resizeMode: "contain",
    alignSelf: "flex-end",
    marginBottom: -80,
    marginLeft: 10,
  },
  categories: {
    marginTop: 20,
  },
  categoriesText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
    color: "rgba(255, 60, 60, 0.99)",
  },
  categoryButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  categoryButton: {
    flex: 1,
    backgroundColor: "rgba(128, 128, 128, 0.50)",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  activeTabButton: {
    backgroundColor: "rgba(255, 60, 60, 0.99)",
  },
  categoryButtonText: {
    fontSize: 16,
    textAlign: "center",
  },
  itemsContainer: {
    paddingHorizontal: 10,
    marginTop: 20,
  },
  itemContainer: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 17,
    padding: 10,
    margin: 5,
    alignItems: "center",
  },
  itemImage: {
    width: 150,
    height: 150,
    resizeMode: "cover",
    borderRadius: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  itemPrice: {
    fontSize: 14,
    color: "gray",
  },
  addIconContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
});

export default MenuPage;
