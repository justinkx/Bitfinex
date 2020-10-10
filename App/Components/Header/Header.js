import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../Theme/Colors";
const Header = () => {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.title]}>BTC/USD</Text>
      <Ionicons style={[styles.starIcon]} name={"md-star"} />
    </View>
  );
};

export default memo(Header);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    paddingHorizontal: 16,
    backgroundColor: Colors.theme,
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  starIcon: {
    fontSize: 24,
    color: "white",
  },
});
