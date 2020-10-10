import React, { useEffect, useState, memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { animate } from "../../Utils/Animation";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../Theme/Colors";

const ExpandableCard = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  function toggle() {
    animate();
    setOpen((prev) => !prev);
  }
  return (
    <View style={[styles.container]}>
      <TouchableOpacity onPress={toggle} style={[styles.header]}>
        <View style={[styles.nameContainer]}>
          <Ionicons
            style={styles.icons}
            name={open ? "ios-arrow-down" : "ios-arrow-forward"}
          />
          <Text allowFontScaling={false} style={[styles.title]}>
            {title}
          </Text>
        </View>
        <View style={[styles.nameContainer]}>
          <TouchableOpacity
            style={[
              styles.actionButton,
              {
                marginRight: 10,
              },
            ]}
          >
            <Ionicons style={styles.icons} name={"md-remove"} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.actionButton,
              {
                marginRight: 10,
              },
            ]}
          >
            <Ionicons style={styles.icons} name={"md-add"} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      {open && <View>{children}</View>}
    </View>
  );
};

export default memo(ExpandableCard);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 5,
    marginTop: 10,
    paddingVertical: 12,
    backgroundColor: Colors.theme,
  },
  header: {
    height: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  icons: {
    color: "white",
    fontSize: 18,
  },
  title: {
    color: "white",
    fontSize: 15,
    paddingLeft: 10,
  },
  actionButton: {
    padding: 5,
  },
});
