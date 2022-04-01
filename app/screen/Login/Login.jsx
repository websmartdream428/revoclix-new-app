import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import * as Yup from "yup";
import {
  FacebookSocialButton,
  GoogleSocialButton,
} from "react-native-social-buttons";
import useAxios from "axios-hooks";

import { Screen } from "../../components";
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../../components/forms";
import { loginStyles, LoginView } from "./login.styles";

import {
  FB_APP_ID,
  GOOGLE_ANDROID_CLIENT_ID,
  GOOGLE_IOS_CLIENT_ID,
} from "../../config/constant";
import { loginApi } from "../../api/auth";
import useAuth from "../../auth/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const Login = () => {
  const auth = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const loginData = { email, password };
    const res = await loginApi(loginData);
    if (res.type !== "success") {
      setLoginFailed("Invalid email and/or password.");
    } else {
      auth.logIn(res.token);
    }
  };

  const handleFBLoginPress = async () => {
    setLoginFailed("The login attempt was cancelled");
  };

  const handleGoogleLoginPress = async () => {
    setLoginFailed("Network connection Error!");
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
            error={loginFailed} //"Invalid email and/or password."
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
            onPress={handleFBLoginPress}
            buttonViewStyle={loginStyles.socialButton}
            textStyle={loginStyles.socialBtnText}
            logoStyle={loginStyles.socialLogo}
            buttonText={"Continue With Faceboox"}
          />
          <GoogleSocialButton
            onPress={handleGoogleLoginPress}
            buttonViewStyle={loginStyles.socialButton}
            textStyle={loginStyles.socialBtnText}
            buttonText={"Continue with Google"}
          />
          {/* <AppleSocialButton
            onPress={() => {}}
            buttonViewStyle={loginStyles.socialButton}
            textStyle={loginStyles.socialBtnText}
            buttonText={"Continue with Apple"}
          /> */}
        </View>
      </LoginView>
    </Screen>
  );
};

export default Login;

// import React, { useEffect, useState } from "react";
// import { Text, View } from "react-native";
// import * as Yup from "yup";
// import {
//   FacebookSocialButton,
//   GoogleSocialButton,
// } from "react-native-social-buttons";
// import * as Facebook from "expo-facebook";
// import * as Google from "expo-google-app-auth";

// import { Screen } from "../../components";
// import {
//   ErrorMessage,
//   Form,
//   FormField,
//   SubmitButton,
// } from "../../components/forms";
// import { loginStyles, LoginView } from "./login.styles";

// import {
//   FB_APP_ID,
//   GOOGLE_ANDROID_CLIENT_ID,
//   GOOGLE_IOS_CLIENT_ID,
// } from "../../config/constant";

// const validationSchema = Yup.object().shape({
//   email: Yup.string().required().email().label("Email"),
//   password: Yup.string().required().min(4).label("Password"),
// });

// const Login = () => {
//   const [loginFailed, setLoginFailed] = useState(false);

//   const handleSubmit = async ({ email, password }) => {
//     console.log(email, password);
//     setLoginFailed("Invalid email and/or password.");
//   };

//   const initSocialLogin = async () => {
//     try {
//       await Facebook.initializeAsync(FB_APP_ID);
//     } catch (e) {
//       console.log(e);
//     } finally {
//       setLoginFailed("Network connection Error!");
//     }
//   };

//   useEffect(() => {
//     initSocialLogin();
//   }, []);

//   const fbLogin = async () => {
//     try {
//       const { token, type } = await Facebook.logInWithReadPermissionsAsync(
//         FB_APP_ID,
//         {
//           permissions: ["public_profile"],
//         }
//       );

//       // GET USER DATA FROM FB API
//       const response = await fetch(
//         `https://graph.facebook.com/me?access_token=${token}`
//       );
//       const user = await response.json();

//       // GET PROFILE IMAGE DATA FROM FB API
//       // NOTE THAT I SET THE IMAGE WIDTH TO 500 WHICH IS OPTIONAL
//       const pictureResponse = await fetch(
//         `https://graph.facebook.com/v8.0/${user.id}/picture?width=500&redirect=false&access_token=${token}`
//       );
//       const pictureOBject = await pictureResponse.json();
//       const userObject = {
//         ...user,
//         photoUrl: pictureOBject.data.url,
//       };

//       return { type, token, user: userObject };
//     } catch (e) {
//       return { error: e };
//     } finally {
//       setLoginFailed("Network connection Error!");
//     }
//   };

//   const handleFBLoginPress = async () => {
//     const { type, token, user, error } = await fbLogin();
//     if (type && token) {
//       if (type === "success") {
//         // DISPATCH TOKEN AND USER DATA
//         // TO HANDLE NAVIGATION TO HOME AND DISPLAY USER INFO
//         console.log(type, token, user, error);
//         // dispatch({ type: "FB_LOGIN", token, user });
//       }
//     } else if (error) {
//       console.log("The login attempt was cancelled");
//       setLoginFailed("The login attempt was cancelled");
//     }
//   };

//   const handleGoogleLoginPress = async () => {
//     try {
//       const { type, token, user, error } = await googleLogin();
//       if (type === "success") {
//         // DISPATCH TOKEN AND USER DATA
//         // TO IMPLEMENT NAVIGATION AND USER INFO DISPLAYS
//         console.log(type, token, user, error);
//         // dispatch({ type: "GOOGLE_LOGIN", token: accessToken, user });
//       }
//     } catch (e) {
//       console.log("error", e);
//     } finally {
//       setLoginFailed("Network connection Error!");
//     }
//   };

//   const googleLogin = async () => {
//     try {
//       const { type, accessToken, user } = await Google.logInAsync({
//         androidClientId: GOOGLE_ANDROID_CLIENT_ID,
//         iosClientId: GOOGLE_IOS_CLIENT_ID,
//       });
//       return { type, token: accessToken, user };
//     } catch (e) {
//       return { error: e };
//     } finally {
//       setLoginFailed("Network connection Error!");
//     }
//   };

//   return (
//     <Screen>
//       <LoginView>
//         <Form
//           initialValues={{ email: "", password: "" }}
//           onSubmit={handleSubmit}
//           validationSchema={validationSchema}
//         >
//           <ErrorMessage
//             error={loginFailed} //"Invalid email and/or password."
//             visible={loginFailed}
//           />
//           <FormField
//             autoCapitalize="none"
//             autoCorrect={false}
//             icon="email"
//             keyboardType="email-address"
//             name="email"
//             placeholder={"Email"}
//             textContentType="emailAddress"
//           />
//           <FormField
//             autoCapitalize="none"
//             autoCorrect={false}
//             icon="lock"
//             name="password"
//             placeholder={"Password"}
//             secureTextEntry
//             textContentType="password"
//           />
//           <SubmitButton title={"Login"} />
//         </Form>
//         <Text style={{ textAlign: "center", marginVertical: 10, fontSize: 18 }}>
//           Or continue with account
//         </Text>
//         <View style={{ width: "100%", flex: 1, alignItems: "center" }}>
//           <FacebookSocialButton
//             onPress={handleFBLoginPress}
//             buttonViewStyle={loginStyles.socialButton}
//             textStyle={loginStyles.socialBtnText}
//             logoStyle={loginStyles.socialLogo}
//             buttonText={"Continue With Faceboox"}
//           />
//           <GoogleSocialButton
//             onPress={handleGoogleLoginPress}
//             buttonViewStyle={loginStyles.socialButton}
//             textStyle={loginStyles.socialBtnText}
//             buttonText={"Continue with Google"}
//           />
//           {/* <AppleSocialButton
//             onPress={() => {}}
//             buttonViewStyle={loginStyles.socialButton}
//             textStyle={loginStyles.socialBtnText}
//             buttonText={"Continue with Apple"}
//           /> */}
//         </View>
//       </LoginView>
//     </Screen>
//   );
// };

// export default Login;
