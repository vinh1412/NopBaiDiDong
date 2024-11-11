import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function Screen01({navigation}) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.headerText}>
          A premium online store for {'\n'} sporter and their stylish choice
        </Text>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://i.ibb.co/4Vs6qvg/bifour-removebg-preview-1.png",
            }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.title}>POWER BIKE SHOP</Text>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Screen02')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonADD} onPress={()=>navigation.navigate('Screen03')}>
          <Text style={styles.buttonText}>ADD</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  headerText: {
    fontSize: 16,
    textAlign: "center",
    color: "#000",
    marginBottom: 20,
    fontWeight: "bold",
  },
  imageContainer: {
    backgroundColor: "#FFE6E6",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#FF4D4D",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 150,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonADD: {
    marginTop: 20,
    backgroundColor: "blue",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 175,
  },
});
