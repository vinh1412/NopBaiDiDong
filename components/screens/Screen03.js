import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function AddBikeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Bike</Text>

      <Text style={styles.label}>Bike Name</Text>
      <TextInput style={styles.input} placeholder="Enter bike name" />

      <Text style={styles.label}>Price</Text>
      <TextInput style={styles.input} placeholder="Enter price" keyboardType="numeric" />

      <Text style={styles.label}>Category</Text>
      <TextInput style={styles.input} placeholder="Enter category" />

      <Text style={styles.label}>Image URL</Text>
      <TextInput style={styles.input} placeholder="Enter image URL" />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>ADD BIKE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    alignSelf: 'center',
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#EAEAEA',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#1E90FF',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
