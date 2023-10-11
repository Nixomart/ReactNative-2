import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import dayjs from "dayjs";
export default function PostImage() {
  const {
    params,
  } = useRoute();
  const formattedDate = dayjs(params.date).format('D [de] MMMM');

  return (
    <View style={styles.container}>
    <Text style={styles.title}>{params.title}</Text>
    <Image source={{ uri: params.url }} style={styles.image} />
    <Text style={styles.date}>{formattedDate}</Text>
    <ScrollView>
    <Text style={styles.explanation}>{params.explanation}</Text>
    </ScrollView>
  </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 10,
  },
  explanation: {
    fontSize: 16,
  },
});