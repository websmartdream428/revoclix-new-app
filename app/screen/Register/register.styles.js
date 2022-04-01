import { StyleSheet, Text, View } from "react-native";
import styled from "react-native-styled-components";
import colors from "../../config/colors";

export const RegisterView = styled(View, {
  paddingHorizontal: 20,
});

export const CheckBoxGroup = styled(View, {
  marginVertical: 20,
});

export const CheckBoxView = styled(View, {
  flexDirection: "row",
  marginBottom: 15,
});

export const CheckBoxLabel = styled(Text, {
  fontSize: 18,
  lineHeight: 25,
  width: "80%",
});

export const LinkText = styled(Text, {
  color: colors.secondary,
});

export const registerStyles = StyleSheet.create({
  checkbox: {
    marginRight: 6,
  },
  troubleLabel: {
    marginVertical: 30,
    textAlign: "center",
    color: colors.secondary,
    fontSize: 20,
  },
});
