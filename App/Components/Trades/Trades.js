import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import ExpandableCard from "../ExpandableCard/ExpandableCard";

const Trades = () => {
  return <ExpandableCard title={"TRADES BCT/USD"}></ExpandableCard>;
};

export default memo(Trades);

const styles = StyleSheet.create({});
