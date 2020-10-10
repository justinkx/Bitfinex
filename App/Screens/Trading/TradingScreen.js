import React, { useEffect, useCallback, useRef, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import socket from "../../WebSocket/Socket";
import { BASE_URL } from "../../Utils/Constant";
import { useDispatch } from "react-redux";
import { Colors } from "../../Theme/Colors";
import Header from "../../Components/Header/Header";
import Ticker from "../../Components/Ticker/Ticker";
import OrderBook from "../../Components/OrderBook/OrderBook";
import { saveTicker, saveOrderBook, saveTrades } from "./Actions";
import Trades from "../../Components/Trades/Trades";

const precisions = [0, 1, 2, 3, 4];

const TradingScreen = () => {
  const dispatch = useDispatch();
  const tickerChannelId = useRef();
  const bookOrderChannelId = useRef();
  const tradeChannelId = useRef();
  const [precision, setPrecision] = useState(precisions[0]);
  const connectToSocket = useCallback(() => {
    socket.onopen = (event) => {
      const tickerMsg = JSON.stringify({
        event: "subscribe",
        channel: "ticker",
        symbol: "tBTCUSD",
      });
      socket.send(tickerMsg);
      const bookMessage = JSON.stringify({
        event: "subscribe",
        channel: "book",
        symbol: "tBTCUSD",
        precision: `P${precision}`,
      });
      socket.send(bookMessage);
      const tradeMessage = JSON.stringify({
        event: "subscribe",
        channel: "trades",
        symbol: "tBTCUSD",
      });
      socket.send(tradeMessage);
    };

    socket.onmessage = (message) => {
      const messageData = JSON.parse(message.data);
      if (Array.isArray(messageData)) {
        if (
          parseInt(messageData[0]) === tickerChannelId.current &&
          Array.isArray(messageData[1])
        ) {
          dispatch(saveTicker(messageData[1]));
        } else if (
          parseInt(messageData[0]) === bookOrderChannelId.current &&
          Array.isArray(messageData[1])
        ) {
          dispatch(saveOrderBook(messageData[1]));
        } else if (
          parseInt(messageData[0]) === tradeChannelId.current &&
          Array.isArray(messageData[1])
        ) {
          dispatch(saveTrades(messageData[1]));
        }
      }
      if (messageData.channel) {
        if (messageData.channel === "ticker") {
          tickerChannelId.current = parseInt(messageData.chanId);
        } else if (messageData.channel === "book") {
          bookOrderChannelId.current = parseInt(messageData.chanId);
        } else if (messageData.channel === "trades") {
          tradeChannelId.current = parseInt(messageData.chanId);
        }
      }
    };
  }, []);
  const increasePrecision = useCallback(() => {
    const nextIndex = precision + 1;
    if (nextIndex <= 5) {
      setPrecision(nextIndex);
      socket.send(
        JSON.stringify({
          event: "unsubscribe",
          channel: "book",
          symbol: "tBTCUSD",
        })
      );
      const bookMessage = JSON.stringify({
        event: "subscribe",
        channel: "book",
        symbol: "tBTCUSD",
        precision: `P${nextIndex}`,
      });
      socket.send(bookMessage);
    }
  }, [precision]);

  const decreasePrecision = useCallback(() => {
    const nextIndex = precision - 1;
    if (nextIndex >= 0) {
      setPrecision(nextIndex);
      socket.send(
        JSON.stringify({
          event: "unsubscribe",
          channel: "book",
          symbol: "tBTCUSD",
        })
      );

      const bookMessage = JSON.stringify({
        event: "subscribe",
        channel: "book",
        symbol: "tBTCUSD",
        precision: `P${nextIndex}`,
      });
      socket.send(bookMessage);
    }
  }, [precision]);

  const disconnectSocket = useCallback(() => {
    socket.close();
  }, []);
  useEffect(() => {
    connectToSocket();
    return () => {
      disconnectSocket();
    };
  }, []);
  return (
    <View style={[styles.container]}>
      <Header />
      <ScrollView
        contentContainerStyle={{
          padding: 16,
        }}
        style={[styles.content]}
      >
        <Ticker />
        <OrderBook
          precision={precision}
          decreasePrecision={decreasePrecision}
          increasePrecision={increasePrecision}
        />
        <Trades />
      </ScrollView>
    </View>
  );
};

export default TradingScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: "flex-start",
  },
  content: {
    flex: 1,
  },
});
