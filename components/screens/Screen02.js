import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBikes } from '../redux/features/bikesSlice';

export default function App() {
  const dispatch = useDispatch();
  const bikes = useSelector((state) => state.bikes.items);
  const status = useSelector((state) => state.bikes.status);
  const [filter, setFilter] = useState('All'); // State để lưu category hiện tại

  useEffect(() => {
    dispatch(fetchBikes());
  }, [dispatch]);

  // Lọc danh sách xe đạp dựa trên category hiện tại
  const filteredBikes = bikes.filter((bike) => {
    if (filter === 'All') return true;
    return bike.category === filter;
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>The world's Best Bike</Text>
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[styles.filterButton, filter === 'All' && styles.activeFilterButton]}
          onPress={() => setFilter('All')}
        >
          <Text style={[styles.filterText, filter === 'All' && styles.activeFilterText]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, filter === 'Roadbike' && styles.activeFilterButton]}
          onPress={() => setFilter('Roadbike')}
        >
          <Text style={[styles.filterText, filter === 'Roadbike' && styles.activeFilterText]}>Roadbike</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, filter === 'Mountain' && styles.activeFilterButton]}
          onPress={() => setFilter('Mountain')}
        >
          <Text style={[styles.filterText, filter === 'Mountain' && styles.activeFilterText]}>Mountain</Text>
        </TouchableOpacity>
      </View>

      {status === 'loading' ? (
        <ActivityIndicator size="large" color="#FF4D4D" />
      ) : (
        <FlatList
          data={filteredBikes}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => (
            <View style={styles.bikeCard}>
              <Image source={{ uri: item.img }} style={styles.bikeImage} />
              <Text style={styles.bikeName}>{item.name}</Text>
              <Text style={styles.bikePrice}>${item.price}</Text>
            </View>
          )}
        />
      )}
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
  activeFilterButton: {
    backgroundColor: '#FF4D4D', // Màu khi button được chọn
  },
  filterText: {
    color: '#FF4D4D',
    fontWeight: 'bold',
  },
  activeFilterText: {
    color: '#FFF', // Màu chữ khi button được chọn
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
