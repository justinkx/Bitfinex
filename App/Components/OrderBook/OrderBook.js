import React, { useEffect, useState, memo } from "react";
import { StyleSheet, Text, Alert, View } from "react-native";
import ExpandableCard from "../ExpandableCard/ExpandableCard";
import { useDispatch, useSelector } from "react-redux";
import { orderBookSelector } from "../../Screens/Trading/Selectors";
import OrderTableCell from "./OrderTableCell";

const OrderBook = () => {
  const orderBook = useSelector((state) => orderBookSelector(state.Trade));
  const orderBookKeys = Object.keys(orderBook).filter(
    (item) => item !== undefined
  );
  console.log("orderBookKeys length >>", orderBookKeys);
  return (
    <ExpandableCard title={"ORDER BOOK"}>
      <View style={[styles.bookContainer]}>
        <OrderTableCell
          cellText={{ color: "#899094" }}
          cellStyle={styles.cellStart}
          value={"Total"}
        />
        <OrderTableCell
          cellText={{ color: "#899094" }}
          cellStyle={styles.cellmiddle}
          value={"Price"}
        />
        <OrderTableCell
          cellText={{ color: "#899094" }}
          cellStyle={styles.cellmiddle}
          value={"Price"}
        />
        <OrderTableCell cellText={{ color: "#899094" }} value={"Total"} />
        {orderBookKeys.map((orderKey, index) => (
          <React.Fragment key={orderKey}>
            <OrderTableCell
              key={index}
              cellStyle={
                index % 4 === 0
                  ? styles.cellStart
                  : (index % 4 === 1 || index % 4 === 2) && styles.cellmiddle
              }
              value={
                index % 4 === 0 || index % 4 === 3
                  ? Math.round(orderBook[orderKey]["count"])
                  : orderBook[orderKey]["price"]
              }
            />
            <OrderTableCell
              key={index}
              cellStyle={
                index % 4 === 0
                  ? styles.cellStart
                  : (index % 4 === 1 || index % 4 === 2) && styles.cellmiddle
              }
              value={
                index % 4 === 0 || index % 4 === 3
                  ? Math.round(orderBook[orderKey]["count"])
                  : orderBook[orderKey]["price"]
              }
            />
          </React.Fragment>
        ))}
      </View>
    </ExpandableCard>
  );
};

export default memo(OrderBook);

const styles = StyleSheet.create({
  bookContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
    alignItems: "center",
    flexWrap: "wrap",
    paddingHorizontal: 10,
  },
  cellStart: {
    justifyContent: "flex-start",
  },
  cellmiddle: {
    paddingHorizontal: 10,
  },
});
