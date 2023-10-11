import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../views/Home";
import PostImage from "../components/PostImage/PostImage";
const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
/*  */
        />
        <Stack.Screen name="Detail" component={PostImage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
