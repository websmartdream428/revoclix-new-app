import { StyleSheet, View } from "react-native";
import styled from "react-native-styled-components";
import colors from "../../config/colors";

export const LoginView = styled(View, {
  paddingHorizontal: 20,
});

export const loginStyles = StyleSheet.create({
  socialButton: {
    marginTop: 10,
    borderRadius: 5,
    borderColor: colors.dark,
    borderWidth: 1,
    flex: 1,
    backgroundColor: colors.white,
    width: "100%",
    height: 50,
  },
  socialBtnText: {
    color: colors.dark,
    fontSize: 18,
  },
  socialLogo: {
    tintColor: colors.secondary,
  },
});
