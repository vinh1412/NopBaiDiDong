import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const bikes = [
  { id: '1', name: 'Pinarello', price: 1800, image: "https://i.ibb.co/4Vs6qvg/bifour-removebg-preview-1.png" },
  { id: '2', name: 'Pina Mountai', price: 1700, image: "https://i.ibb.co/Cwc2nXb/bione-removebg-preview-2.png" },
  { id: '3', name: 'Pina Bike', price: 1500, image: "https://i.ibb.co/6vW2fP9/bitwo-removebg-preview.png" },
  { id: '4', name: 'Pinarello', price: 1900, image: "https://i.ibb.co/Y70JVnn/bione-removebg-preview-4.png" },
  { id: '5', name: 'Pinarello', price: 2700, image:"https://i.ibb.co/Y70JVnn/bione-removebg-preview-4.png" },
  { id: '6', name: 'Pinarello', price: 1350, image: "https://i.ibb.co/f0mGttN/bithree-removebg-preview-1.png" },
];

export default function App() {
  const renderBike = ({ item }) => (
    <View style={styles.bikeCard}>
      <Image source={{ uri: item.image }} style={styles.bikeImage} />
      <Text style={styles.bikeName}>{item.name}</Text>
      <Text style={styles.bikePrice}>${item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>The world's Best Bike</Text>
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Roadbike</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Mountain</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={bikes}
        renderItem={renderBike}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF4D4D',
    marginBottom: 16,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  filterButton: {
    backgroundColor: '#FFF',
    borderColor: '#FF4D4D',
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  filterText: {
    color: '#FF4D4D',
    fontWeight: 'bold',
  },
  listContainer: {
    paddingBottom: 16,
  },
  bikeCard: {
    flex: 1,
    backgroundColor: '#FFE6E6',
    borderRadius: 10,
    padding: 16,
    margin: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  bikeImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  bikeName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  bikePrice: {
    fontSize: 16,
    color: '#FF8C00',
  },
});
