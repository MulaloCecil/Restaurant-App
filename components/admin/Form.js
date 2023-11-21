import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  Image,
  Alert,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const categories = ["burgers", "chips", "drinks"];

const Form = ({ navigation }) => {
  const [productName, setProductName] = useState("");
  const [image, setImage] = useState(null);
  const [weight, setWeight] = useState("");
  const [price, setPrice] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleChooseImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission denied");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      const source = { uri: result.uri };
      setImage(source);
    }
  };

  const handleSubmit = async () => {
    if (productName && image && weight && price && selectedCategory) {
      const response = await fetch(image.uri);
      const blob = await response.blob();

      const storageRef = firebase.storage().ref();
      const imageRef = storageRef.child(`images/${Date.now()}.jpg`);

      const uploadTask = imageRef.put(blob);
      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          console.log(`Upload Progress: ${progress}%`);
        },
        (error) => {
          console.log("Error uploading image: ", error);
        },
        () => {
          uploadTask.snapshot.ref
            .getDownloadURL()
            .then((imageUrl) => {
              firebase
                .firestore()
                .collection("products")
                .add({
                  productName,
                  weight,
                  price,
                  category: selectedCategory,
                  imageUrl,
                })
                .then(() => {
                  setProductName("");
                  setWeight("");
                  setPrice("");
                  setSelectedCategory(categories[0]);
                  setImage(null);
                  Alert.alert("Form submitted successfully!");
                })
                .catch((error) => {
                  console.log("Error adding document: ", error);
                });
            })
            .catch((error) => {
              console.log("Error getting download URL: ", error);
            });
        }
      );
    } else {
      Alert.alert("Please fill in all fields");
    }
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleLogout = () => {
    navigation.navigate("Login");
  };

  const handleProducts = () => {
    navigation.navigate("Products");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        {showSidebar && (
          <View style={styles.sidebar}>
            <TouchableOpacity
              style={styles.sidebarItem}
              onPress={handleProducts}
            >
              <Text style={styles.sidebarText}>Products</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sidebarItem} onPress={handleLogout}>
              <Text style={styles.sidebarText}>Logout</Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.header}>
          <Text style={styles.headerText}>Hello Admin</Text>
          <TouchableOpacity style={styles.menuIcon} onPress={toggleSidebar}>
            <Icon style={{ color: "blue" }} name="menu" size={30} />
          </TouchableOpacity>
        </View>

        <View style={styles.formContainer}>
          <Button title="Choose Image" onPress={handleChooseImage} />
          {image && <Image source={image} style={styles.image} />}

          <Text style={styles.label}>Product Name:</Text>
          <TextInput
            placeholder="Product Name"
            style={styles.input}
            value={productName}
            onChangeText={setProductName}
          />
          <Text style={styles.label}>Weight:</Text>
          <TextInput
            placeholder="Weight"
            style={styles.input}
            value={weight}
            onChangeText={setWeight}
          />
          <Text style={styles.label}>Price:</Text>
          <TextInput
            placeholder="Price"
            style={styles.input}
            value={price}
            onChangeText={setPrice}
          />

          <Text style={styles.label}>Category:</Text>
          <Picker
            selectedValue={selectedCategory}
            onValueChange={(itemValue) => setSelectedCategory(itemValue)}
            style={styles.picker}
          >
            {categories.map((category) => (
              <Picker.Item key={category} label={category} value={category} />
            ))}
          </Picker>

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  sidebar: {
    backgroundColor: "#f2f2f2",
    width: "30%",
    height: "63%",
    position: "absolute",
    zIndex: 1,
    left: 0,
    top: 0,
    padding: 20,
  },
  sidebarItem: {
    marginBottom: 20,
  },
  sidebarText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "blue",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  menuIcon: {
    marginLeft: 10,
  },
  formContainer: {
    flex: 1,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  picker: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Form;
