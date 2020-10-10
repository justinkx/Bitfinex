import React from "react";
import { StyleSheet, Text, View } from "react-native";

const OrderTableCell = ({ value, type = "values", cellStyle, cellText }) => {
  return (
    <View style={[styles.cell, cellStyle]}>
      <Text style={[styles.text, cellText]} allowFontScaling={false}>
        {value}
      </Text>
    </View>
  );
};
export default OrderTableCell;

const styles = StyleSheet.create({
  cell: {
    width: "25%",
    height: 50,
    flexDirection: "row",
    position: "relative",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    color: "white",
  },
});
