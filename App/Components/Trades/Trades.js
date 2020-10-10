import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import ExpandableCard from "../ExpandableCard/ExpandableCard";
import { tradesSelector } from "../../Screens/Trading/Selectors";
import { useDispatch, useSelector } from "react-redux";
import TradeCell from "./TradeCell";

const Trades = () => {
  const trades = useSelector((state) => tradesSelector(state.Trade));
  const tradeKeys = Object.keys(trades);

  return (
    <ExpandableCard title={"TRADES BCT/USD"}>
      <TradeCell isTitle={true} />
      {tradeKeys.map((key) => (
        <TradeCell key={key} trade={trades[key]} />
      ))}
    </ExpandableCard>
  );
};

export default memo(Trades);

const styles = StyleSheet.create({});
