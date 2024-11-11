import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useDispatch } from "react-redux";
import { addBike } from "../redux/features/bikesSlice";

export default function AddBikeScreen() {
  const [bikeName, setBikeName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [img, setImg] = useState("");
  const dispatch = useDispatch();

  const handleAddBike = () => {
    if (!bikeName || !price || !category || !img) {
      Alert.alert("Please fill all fields");
      return;
    }
    const newBike = {
      name: bikeName,
      price: price,
      category,
      img,
    };
    dispatch(addBike(newBike))
      .then(() => {
        Alert.alert("Bike added successfully!");
        setBikeName("");
        setPrice("");
        setCategory("");
        setImg("");
      })
      .catch((error) => {
        Alert.alert("Failed to add bike", error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Bike</Text>

      <Text style={styles.label}>Bike Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter bike name"
        value={bikeName}
        onChangeText={setBikeName}
      />

      <Text style={styles.label}>Price</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter price"
        value={price}
        onChangeText={setPrice}
      />

      <Text style={styles.label}>Category</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter category"
        value={category}
        onChangeText={setCategory}
      />

      <Text style={styles.label}>Image URL</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter image URL"
        value={img}
        onChangeText={setImg}
      />

      <TouchableOpacity style={styles.button} onPress={handleAddBike}>
        <Text style={styles.buttonText}>ADD BIKE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    alignSelf: "center",
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#EAEAEA",
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#1E90FF",
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
