import React, { useState } from "react";
import { CheckBox, Text, View } from "react-native";
import { Screen } from "../../components";
import * as Yup from "yup";

import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../../components/forms";

import {
  CheckBoxGroup,
  CheckBoxLabel,
  CheckBoxView,
  LinkText,
  registerStyles,
  RegisterView,
} from "./register.styles";
import { loginStyles } from "../Login/login.styles";
import {
  FacebookSocialButton,
  GoogleSocialButton,
} from "react-native-social-buttons";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
  subscribe: Yup.boolean().required().isTrue().label("SubScribe"),
  confirm: Yup.boolean().required().isTrue().label("Confirm"),
});

const Register = () => {
  const [error, setError] = useState();
  const [isSelected, setSelection] = useState({
    subscribe: false,
    confirm: false,
  });

  const handleSubmit = async (userInfo) => {
    console.log(userInfo);
  };

  return (
    <Screen>
      <RegisterView>
        <Form
          initialValues={{ username: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={error} />
          <FormField
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder={"Username"}
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
          <CheckBoxGroup>
            <CheckBoxView>
              <CheckBox
                name="subscribe"
                value={isSelected.subscribe}
                onValueChange={(v) =>
                  setSelection({ ...isSelected, subscribe: v })
                }
                style={registerStyles.checkbox}
              />
              <CheckBoxLabel>Subscribe to our newsletter</CheckBoxLabel>
            </CheckBoxView>
            <CheckBoxView>
              <CheckBox
                name="confirm"
                value={isSelected.confirm}
                onValueChange={(v) =>
                  setSelection({ ...isSelected, confirm: v })
                }
                style={registerStyles.checkbox}
              />
              <CheckBoxLabel>
                By registering, I confirm that I accept{" "}
                <LinkText>{"Terms & Conditions"}</LinkText> and
                <LinkText> Proterms of sale</LinkText>, have read the{" "}
                <LinkText>Privacy policy</LinkText>, and am at least 18 years
                old.
              </CheckBoxLabel>
            </CheckBoxView>
          </CheckBoxGroup>
          <SubmitButton title={"Sign Up"} />
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
          {/* <AppleSocialButton
            onPress={() => {}}
            buttonViewStyle={styles.socialButton}
            textStyle={styles.socialBtnText}
            buttonText={"Continue with Apple"}
          /> */}
        </View>
        <View>
          <Text style={registerStyles.troubleLabel}>Having trouble?</Text>
        </View>
      </RegisterView>
    </Screen>
  );
};

export default Register;
