import React, { useState } from "react";
import { Text, View } from "react-native";
import * as Yup from "yup";
import {
  FacebookSocialButton,
  GoogleSocialButton,
  AppleSocialButton,
} from "react-native-social-buttons";

import { Screen } from "../../components";
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../../components/forms";
import { loginStyles, LoginView } from "./login.styles";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const Login = () => {
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    console.log(email, password);
  };
  return (
    <Screen>
      <LoginView>
        <Form
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage
            error={"Invalid email and/or password."}
            visible={loginFailed}
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder={"Email"}
            textContentType="emailAddress"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder={"Password"}
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title={"Login"} />
        </Form>
        <Text style={{ textAlign: "center", marginVertical: 10, fontSize: 18 }}>
          Or continue with account
        </Text>
        <View style={{ width: "100%", flex: 1, alignItems: "center" }}>
          <FacebookSocialButton
            onPress={() => {}}
            buttonViewStyle={loginStyles.socialButton}
            textStyle={loginStyles.socialBtnText}
            logoStyle={loginStyles.socialLogo}
            buttonText={"Continue With Faceboox"}
          />
          <GoogleSocialButton
            onPress={() => {}}
            buttonViewStyle={loginStyles.socialButton}
            textStyle={loginStyles.socialBtnText}
            buttonText={"Continue with Google"}
          />
          <AppleSocialButton
            onPress={() => {}}
            buttonViewStyle={loginStyles.socialButton}
            textStyle={loginStyles.socialBtnText}
            buttonText={"Continue with Apple"}
          />
        </View>
      </LoginView>
    </Screen>
  );
};

export default Login;
