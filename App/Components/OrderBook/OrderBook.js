import React, { useEffect, useState, memo } from "react";
import { StyleSheet, Text, Alert, View } from "react-native";
import ExpandableCard from "../ExpandableCard/ExpandableCard";
import { useDispatch, useSelector } from "react-redux";
import { orderBookSelector } from "../../Screens/Trading/Selectors";
import OrderTableCell from "./OrderTableCell";

const OrderBook = () => {
  const dispatch = useDispatch();
  const orderBook = useSelector((state) => orderBookSelector(state.Trade));
  console.log(orderBook, "orderBook");
  const orderBookKeys = Object.keys(orderBook)
    .filter((item) => item !== undefined)
    .sort((a, b) => b - a);
  return (
    <ExpandableCard title={"ORDER BOOK"}>
      <View style={[styles.bookContainer]}>
        <OrderTableCell cellStyle={styles.cellStart} value={"Total"} />
        <OrderTableCell cellStyle={styles.cellmiddle} value={"Price"} />
        <OrderTableCell cellStyle={styles.cellmiddle} value={"Price"} />
        <OrderTableCell value={"Total"} />
        {orderBookKeys.map((orderKey, index) => (
          <OrderTableCell
            key={orderKey}
            cellStyle={
              index % 4 === 0
                ? styles.cellStart
                : (index % 4 === 1 || index % 4 === 2) && styles.cellmiddle
            }
            value={
              index % 4 === 0 || index % 4 === 3
                ? Math.round(orderBook[orderKey]["amount"])
                : orderBook[orderKey]["price"]
            }
          />
        ))}
      </View>
    </ExpandableCard>
  );
};

export default memo(OrderBook);

const styles = StyleSheet.create({
  bookContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
    paddingHorizontal: 5,
  },
  cellStart: {
    justifyContent: "flex-start",
  },
  cellmiddle: {
    paddingHorizontal: 10,
  },
});
