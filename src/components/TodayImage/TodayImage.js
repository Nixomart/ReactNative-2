import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
export default function TodayImage({ date, url, explanation, title }) {
  const {navigate} = useNavigation()
  const handleView = () =>{
    navigate('Detail', {title, date, url, explanation})
  }
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: url }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>

        {/*         <ScrollView style={{maxHeight: 100}}>
        <Text style={styles.cardDescription}>{explanation}</Text>
      </ScrollView> */}
        <Text style={styles.cardDate}>{date}</Text>
        <TouchableOpacity
        onPress={handleView}
          style={{
            padding: 10,
            borderWidth: 1,
            borderRadius: 10,
            marginLeft: "auto",
          }}
        >
          <Text style={{ textAlign: "center" }}>Ver mas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 10, // Agrega sombra
    margin: 10,
    
  },
  cardImage: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 14,
    marginTop: 5,
  },
  cardDate: {
    fontSize: 12,
    color: "gray",
    marginTop: 5,
  },
});
