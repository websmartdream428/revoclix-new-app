import styled from "react-native-styled-components";
import { View, StyleSheet, Text, Image } from "react-native";
import colors from "../../config/colors";

export const WelcomeView = styled(View, {
  paddingHorizontal: 10,
});

export const HeaderView = styled(View, {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingHorizontal: 5,
});

export const SelectLanguageView = styled(View, {
  flexDirection: "row",
  alignItems: "center",
});

export const WelcomeText = styled(Text, {
  fontSize: 18,
  textAlign: "center",
});

export const WelcomeImage = styled(Image, {
  width: "100%",
  height: 600,
  marginBottom: 10,
});

export const ButtonView = styled(View, {
  width: "100%",
  paddingBottom: 20,
});

export const welcomeStyles = StyleSheet.create({
  loginButton: {
    borderRadius: 5,
  },
  registerButton: {
    borderRadius: 5,
    borderColor: colors.secondary,
    borderWidth: 1,
  },
  dropdown3BtnStyle: {
    backgroundColor: "#FFF",
    paddingHorizontal: 0,
  },
  dropdown3BtnChildStyle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  dropdown3BtnImage: {},
  dropdown3BtnTxt: {
    color: "#444",
    fontWeight: "bold",
    fontSize: 18,
    paddingHorizontal: 10,
  },
  dropdown3DropdownStyle: { backgroundColor: "slategray" },
  dropdown3RowStyle: {
    // backgroundColor: "slategray",
    // borderBottomColor: "#444",
    height: 50,
  },
  dropdown3RowChildStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  dropdownRowImage: { width: 20, height: 20 },
  dropdown3RowTxt: {
    color: "#F1F1F1",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    marginHorizontal: 12,
  },
});
