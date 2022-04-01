import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { WelcomeScreen, LoginScreen, RegisterScreen } from "../screen";
const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        options={{ headerShown: false }}
        component={WelcomeScreen}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
