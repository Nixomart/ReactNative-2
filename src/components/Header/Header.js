import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.child}>
        <Text style={{fontSize: 20}}>Explore</Text>
      </View>
      <View style={[styles.child, {alignItems: 'flex-end'}]}>
        <Image source={require('../../../assets/nasa.png')} style={{width:30, height: 30}} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flexDirection: "row",
  },
  child:{
    width: '50%',

  }
})