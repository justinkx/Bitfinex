import React, { useEffect, memo } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { tickerSelector } from "../../Screens/Trading/Selectors";
import { Colors } from "../../Theme/Colors";

const Ticker = () => {
  const ticker = useSelector((state) => tickerSelector(state.Trade));

  return (
    <View style={[styles.container]}>
      <View style={[styles.detailContainer]}>
        <Image style={[styles.btc]} source={require("../../Assets/btc.png")} />
        <View style={[styles.content]}>
          <Text
            style={[styles.text, { fontWeight: "400" }]}
            allowFontScaling={false}
          >
            BTC/USD
          </Text>
          <Text
            style={[
              styles.text,
              {
                fontSize: 13,
                marginVertical: 2,
              },
            ]}
            allowFontScaling={false}
          >
            {`VOL ${Math.round(ticker.VOLUME)} USD`}
          </Text>
          <Text
            style={[
              styles.text,
              {
                fontSize: 13,
              },
            ]}
            allowFontScaling={false}
          >
            {`LOW ${ticker.LOW}`}
          </Text>
        </View>
      </View>
      <View style={[styles.valueContainer]}>
        <Text
          style={[styles.text, { fontWeight: "400" }]}
          allowFontScaling={false}
        >{`${ticker.BID}`}</Text>
        <Text
          style={[
            styles.text,
            {
              fontSize: 12,
              color: Colors.green,
              marginVertical: 3,
            },
          ]}
          allowFontScaling={false}
        >{`${Math.round(ticker.DAILY_CHANGE * 100) / 100} ▲ ${
          Math.round(ticker.DAILY_CHANGE_RELATIVE * 100 * 100) / 100
        }%`}</Text>
        <Text
          style={[
            styles.text,
            {
              fontSize: 13,
            },
          ]}
          allowFontScaling={false}
        >
          {`HIGH ${ticker.HIGH}`}
        </Text>
      </View>
    </View>
  );
};

export default memo(Ticker);

const styles = StyleSheet.create({
  container: {
    height: 80,
    borderRadius: 5,
    backgroundColor: Colors.theme,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  detailContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  valueContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  btc: {
    width: 30,
    height: 40,
    resizeMode: "contain",
    marginRight: 10,
  },
  content: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  text: {
    fontSize: 14,
    color: "white",
  },
});
