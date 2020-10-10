import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import store from "./Store/Store";
import { Provider } from "react-redux";
import TradingScreen from "./Screens/Trading/TradingScreen";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView />
      <View style={[styles.container]}>
        <TradingScreen />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
