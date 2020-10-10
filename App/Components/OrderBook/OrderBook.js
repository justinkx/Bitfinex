import React, { useEffect, useState, memo } from "react";
import { StyleSheet, Text, Alert, View } from "react-native";
import ExpandableCard from "../ExpandableCard/ExpandableCard";
import { useDispatch, useSelector } from "react-redux";
import { orderBookSelector } from "../../Screens/Trading/Selectors";
import OrderTableCell from "./OrderTableCell";
import socket from "../../WebSocket/Socket";
const OrderBook = ({ decreasePrecision, increasePrecision, precision }) => {
  const orderBook = useSelector((state) => orderBookSelector(state.Trade));
  const orderBookKeys = Object.keys(orderBook).filter(
    (item) => item !== undefined
  );

  return (
    <ExpandableCard
      precision={precision}
      decreasePrecision={decreasePrecision}
      increasePrecision={increasePrecision}
      showPrecision={true}
      title={"ORDER BOOK"}
    >
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
            {index % 2 === 0 ? (
              <>
                <OrderTableCell
                  cellStyle={styles.cellStart}
                  value={Math.round(orderBook[orderKey]["count"])}
                />
                <OrderTableCell
                  cellStyle={styles.cellmiddle}
                  value={orderBook[orderKey]["price"]}
                />
              </>
            ) : (
              <>
                <OrderTableCell
                  cellStyle={styles.cellmiddle}
                  value={Math.round(orderBook[orderKey]["price"])}
                />
                <OrderTableCell value={orderBook[orderKey]["count"]} />
              </>
            )}
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
