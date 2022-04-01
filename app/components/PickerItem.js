import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import colors from "../config/colors";

import Text from "./Text";

function PickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{item.label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
    color: colors.black,
  },
});

export default PickerItem;
