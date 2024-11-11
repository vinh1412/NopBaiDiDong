import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Screen01() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        A premium online store for sporter and their stylish choice
      </Text>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://i.ibb.co/4Vs6qvg/bifour-removebg-preview-1.png' }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.title}>POWER BIKE SHOP</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  headerText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  imageContainer: {
    backgroundColor: '#FFE6E6',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF4D4D',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
