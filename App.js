import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import Routes from "./src/routes";

export default function App() {
  return (
    <>
    <StatusBar barStyle='dark-content'/>
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
</>
  );
}