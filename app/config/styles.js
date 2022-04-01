import { Platform } from "react-native";

import colors from "./colors";

export default {
  colors,
  text: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  h2: {
    fontSize: 16,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  container: {
    marginHorizontal: 20,
  },
  flexRowJustifySpaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
};
