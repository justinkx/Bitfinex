import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import moment from "moment";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../Theme/Colors";

const TradeCell = ({ isTitle = false, trade }) => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.time, styles.border]}>
        {!isTitle && (
          <Ionicons
            style={{
              fontSize: 18,
              marginRight: 5,
              color:
                Math.round(trade.AMOUNT * 1000) / 1000 > 0
                  ? Colors.green
                  : "red",
            }}
            name={
              Math.round(trade.AMOUNT * 1000) / 1000 > 0
                ? "ios-arrow-up"
                : "ios-arrow-down"
            }
          />
        )}
        <Text
          allowFontScaling={false}
          style={[
            styles.text,
            {
              color: isTitle ? "#899094" : "white",
            },
          ]}
        >
          {isTitle ? "TIME" : moment.utc(trade.MTS).format("HH:MM:SS")}
        </Text>
      </View>
      <View style={[styles.time, styles.border]}>
        <Text
          allowFontScaling={false}
          style={[
            styles.text,
            {
              color: isTitle ? "#899094" : "white",
            },
          ]}
        >
          {isTitle ? "PRICE" : Math.round(trade.PRICE)}
        </Text>
      </View>
      <View style={[styles.amount, styles.border]}>
        <Text
          allowFontScaling={false}
          style={[
            styles.text,
            {
              color: isTitle ? "#899094" : "white",
            },
          ]}
        >
          {isTitle ? "AMOUNT" : Math.round(trade.AMOUNT * 1000) / 1000}
        </Text>
      </View>
    </View>
  );
};

export default memo(TradeCell);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  time: {
    width: "25%",
    alignItems: "center",
    height: 35,
    justifyContent: "flex-start",
    paddingHorizontal: 5,
    flexDirection: "row",
  },
  amount: {
    width: "50%",
    alignItems: "flex-end",
    height: 35,
    paddingHorizontal: 5,
    justifyContent: "center",
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  text: {
    fontSize: 14,
  },
});
